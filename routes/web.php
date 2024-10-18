<?php


use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/users/create', [UserController::class, 'create'])->name('users.create');


Route::resource('users', UserController::class);
