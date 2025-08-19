<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use App\Models\SiteSetting;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index()
    {
        $contactInfo = [
            'address' => SiteSetting::get('contact_address', '123 Business Street, Digital City'),
            'phone' => SiteSetting::get('contact_phone', '+1 (555) 123-4567'),
            'email' => SiteSetting::get('contact_email', 'hello@digioh.com'),
            'whatsapp' => SiteSetting::get('contact_whatsapp', '+1234567890'),
            'map_embed' => SiteSetting::get('contact_map_embed', ''),
            'social_links' => SiteSetting::get('social_links', []),
        ];

        return Inertia::render('contact', [
            'contactInfo' => $contactInfo,
        ]);
    }

    /**
     * Store a new contact message.
     */
    public function store(StoreContactMessageRequest $request)
    {
        $contactMessage = ContactMessage::create($request->validated());

        // Send email notification (optional)
        $adminEmail = SiteSetting::get('contact_admin_email', 'admin@digioh.com');
        
        try {
            Mail::send('emails.contact-message', [
                'message' => $contactMessage,
            ], function ($mail) use ($contactMessage, $adminEmail) {
                $mail->to($adminEmail)
                     ->subject('New Contact Message: ' . $contactMessage->subject)
                     ->replyTo($contactMessage->email, $contactMessage->name);
            });
        } catch (\Exception $e) {
            // Log error but don't fail the request
            logger('Failed to send contact email: ' . $e->getMessage());
        }

        return redirect()->back()->with('success', 'Thank you for your message! We will get back to you soon.');
    }
}