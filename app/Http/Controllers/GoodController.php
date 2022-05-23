<?php

namespace App\Http\Controllers;

use App\Http\Requests\GoodStoreRequest;
use App\Models\Good;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Goods/Index', [
            'title' => 'Goods',
            'goods' => Good::orderByDesc('created_at')->paginate(3)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Goods/Create', [
            'title' => 'Create new good'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\ $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(GoodStoreRequest $request)
    {
        Good::create(
            $request->all()
        );

        return redirect()->route('goods.index');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Good $good)
    {
        $good->delete();

        return redirect()->back();
    }
}
