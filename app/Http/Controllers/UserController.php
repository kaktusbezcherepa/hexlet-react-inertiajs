<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{   
    public function index()
    {
        $users = User::all();
        return Inertia::render('Users/Index', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'gender' => 'required|string',
            'date_of_birth' => 'required|date',
        ]);

        User::create($validatedData);

        return redirect()->route('users.index')->with('success', 'Пользователь создан');
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Users/Edit', ['user' => $user]);
    }
    public function show($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Users/Show', ['user' => $user]);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'gender' => 'required|string',
            'date_of_birth' => 'required|date',
        ]);

        $user = User::findOrFail($id);
        $user->update($validatedData);

        return redirect()->route('users.index')->with('success', 'Данные пользователя обновлены');
    }

    public function destroy($id)
    {   
        $user = User::findOrFail($id);
        $user->delete();

    }
}