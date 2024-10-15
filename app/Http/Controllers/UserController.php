<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
}
