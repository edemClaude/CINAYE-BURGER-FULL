<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerFormRequest;
use App\Models\Customer;
use Exception;
use Illuminate\Http\JsonResponse;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            // Retrieve all customers from the database
            $customers = Customer::with('orders')->get();

            // Return a JSON response with the retrieved customers
            return response()->json($customers, 200);
        } catch (Exception $e) {

            // Return a JSON response with the exception message
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CustomerFormRequest $request
     * @return JsonResponse
     */
    public function store(CustomerFormRequest $request) : JsonResponse
    {
        try{
            // Create a new Customer instance with the validated data from the request
            $customer = Customer::create($request->validated());

            // Return a JSON response with the newly created customer and status code 201 (Created)
            return response()->json($customer, 201);
        } catch (Exception $exception) {
            // Return a JSON response with the exception message and status code 500 (Internal Server Error)
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Customer $customer
     * @return JsonResponse
     */
    public function show(Customer $customer) : JsonResponse
    {
        try {
            // Return a JSON response with the specified customer
            return response()->json($customer, 200);
        } catch (Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Get the orders for the specified customer.
     *
     * @param Customer $customer
     * @return JsonResponse
     */
    public function customerOrders(Customer $customer) : JsonResponse
    {
        try {
            // Return a JSON response with the specified customer
            return response()->json($customer->orders, 200);
        } catch (Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }

    }


}
