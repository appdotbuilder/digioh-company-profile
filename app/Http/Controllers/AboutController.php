<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use App\Models\SiteSetting;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display the about us page.
     */
    public function index()
    {
        $teamMembers = TeamMember::active()->get();
        
        $companyInfo = [
            'history' => SiteSetting::get('about_history', 'Since 2015, digiOH has been pioneering digital events and signage solutions...'),
            'vision' => SiteSetting::get('about_vision', 'To revolutionize how businesses connect through digital experiences.'),
            'mission' => SiteSetting::get('about_mission', 'We create innovative digital solutions that transform events and enhance brand presence.'),
            'office_address' => SiteSetting::get('contact_address', '123 Business Street, Digital City'),
            'office_map_embed' => SiteSetting::get('contact_map_embed', ''),
        ];

        return Inertia::render('about', [
            'teamMembers' => $teamMembers,
            'companyInfo' => $companyInfo,
        ]);
    }
}