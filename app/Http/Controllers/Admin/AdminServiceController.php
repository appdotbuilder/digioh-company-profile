<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Models\Service;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminServiceController extends Controller
{
    /**
     * Display a listing of services.
     */
    public function index()
    {
        $services = Service::latest()->get();
        
        return Inertia::render('admin/services/index', [
            'services' => $services,
        ]);
    }

    /**
     * Show the form for creating a new service.
     */
    public function create()
    {
        return Inertia::render('admin/services/create');
    }

    /**
     * Store a newly created service.
     */
    public function store(StoreServiceRequest $request)
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        
        if ($data['status'] === 'published' && !isset($data['published_at'])) {
            $data['published_at'] = now();
        }

        $service = Service::create($data);

        return redirect()->route('admin.services.show', $service)
            ->with('success', 'Service created successfully.');
    }

    /**
     * Display the specified service.
     */
    public function show(Service $service)
    {
        return Inertia::render('admin/services/show', [
            'service' => $service,
        ]);
    }

    /**
     * Show the form for editing the specified service.
     */
    public function edit(Service $service)
    {
        return Inertia::render('admin/services/edit', [
            'service' => $service,
        ]);
    }

    /**
     * Update the specified service.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        
        if ($data['status'] === 'published' && !$service->published_at) {
            $data['published_at'] = now();
        }

        $service->update($data);

        return redirect()->route('admin.services.show', $service)
            ->with('success', 'Service updated successfully.');
    }

    /**
     * Remove the specified service.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->route('admin.services.index')
            ->with('success', 'Service deleted successfully.');
    }
}