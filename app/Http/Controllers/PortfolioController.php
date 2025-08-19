<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PortfolioItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display a listing of portfolio items.
     */
    public function index(Request $request)
    {
        $query = PortfolioItem::published()->latest();
        
        if ($request->has('category') && $request->category !== 'all') {
            $query->byCategory($request->category);
        }
        
        $portfolioItems = $query->get();
        
        $categories = PortfolioItem::published()
            ->select('category')
            ->distinct()
            ->pluck('category');

        return Inertia::render('portfolio/index', [
            'portfolioItems' => $portfolioItems,
            'categories' => $categories,
            'selectedCategory' => $request->get('category', 'all'),
        ]);
    }

    /**
     * Display the specified portfolio item.
     */
    public function show(PortfolioItem $portfolioItem)
    {
        if ($portfolioItem->status !== 'published') {
            abort(404);
        }

        return Inertia::render('portfolio/show', [
            'portfolioItem' => $portfolioItem,
        ]);
    }
}