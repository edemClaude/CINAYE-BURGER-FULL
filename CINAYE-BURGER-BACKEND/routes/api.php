<?php

use App\Http\Controllers\Api\BurgerController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Burger Api Routes
Route::apiResource('burgers', BurgerController::class);
Route::get('unarchived-burgers', [BurgerController::class, 'getOnlyUnarchivedBurger']);
Route::put('burgers/{burger}/archive', [BurgerController::class, 'archive']);
Route::put('burgers/{burger}/restore', [BurgerController::class, 'restore']);

// Customer Api Routes
Route::apiResource('customers', CustomerController::class)->except('destroy', 'update');
Route::get('customers/{customer}/orders', [CustomerController::class, 'customerOrders']);

// Order Api Routes
Route::apiResource('orders', OrderController::class) -> except('destroy', 'update');
Route::put('orders/{order}/complete', [OrderController::class, 'setReady']);
Route::put('orders/{order}/cancel', [OrderController::class, 'cancel']);

// Payment Api Routes
Route::apiResource('payments', PaymentController::class)->except('update');
Route::put('payments/{payment}/complete', [PaymentController::class, 'setPaid']);

// User Api Routes
Route::apiResource('users', UserController::class);
Route::put('users/{user}/activate', [UserController::class, 'activate']);
Route::put('users/{user}/deactivate', [UserController::class, 'deactivate']);

// Auth Routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Dashboard Routes
Route::get('/dashboard', [DashboardController::class, 'index']);
Route::get('/dashboard/filter', [DashboardController::class, 'filter']);
