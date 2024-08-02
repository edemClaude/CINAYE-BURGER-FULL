<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderFormRequest;
use App\Models\Order;
use App\Notifications\Auth\SendCustomerMailNotification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            // Retrieve all orders from the database
            $orders = Order::with('customer', 'burger')->get();

            // Return a JSON response with the retrieved orders
            return response()->json($orders, 200);
        } catch (\Exception $e) {
            // Return a JSON response with the exception message
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     *  Store a newly created resource in storage.
     *
     * @param OrderFormRequest $request
     * @return JsonResponse
     */
    public function store(OrderFormRequest $request) : JsonResponse
    {
        try {
            // Create a new Order instance with the validated data from the request
            $order = Order::create($request->validated());

            // Return a JSON response with the newly created order and status code 201 (Created)
            return response()->json($order, 201);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message and status code 500 (Internal Server Error)
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Cancel an order
     *
     * @param Order $order
     * @return JsonResponse
     */
    public function cancel(Order $order) : JsonResponse
    {
        try {
            // Update the 'is_cancelled' attribute of the order to true
            $order->update(['is_canceled' => true]);
            // Return a JSON response with the updated order and status code 200 (OK)
            return response()->json($order, 200);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message and status code 500 (Internal Server Error)
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Order $order
     * @return JsonResponse
     */
    public function show(Order $order) : JsonResponse
    {
        try {
            // Return a JSON response with the specified order
            return response()->json($order, 200);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    public function setReady(Order $order) : JsonResponse
    {
        try {
            // Update the 'is_ready' attribute of the order to true
            $order->update(['status' => 'ready']);

            $customer = $order->customer;
            $customer->notify(new SendCustomerMailNotification());

            // Return a JSON response with the specified order
            return response()->json($order, 200);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }
}
