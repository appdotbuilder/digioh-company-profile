<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of services.
     */
    public function index()
    {
        $services = Service::published()->get();
        
        return Inertia::render('services/index', [
            'services' => $services,
        ]);
    }

    /**
     * Display the specified service.
     */
    public function show(Service $service)
    {
        if ($service->status !== 'published') {
            abort(404);
        }

        return Inertia::render('services/show', [
            'service' => $service,
        ]);
    }
}