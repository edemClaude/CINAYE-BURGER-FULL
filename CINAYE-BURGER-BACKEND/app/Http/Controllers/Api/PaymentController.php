<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaymentFormRequest;
use App\Models\Payment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            // Retrieve all payments from the database
            $payments = Payment::with('order')->get();
            return response()->json($payments, 200);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PaymentFormRequest $request
     * @return JsonResponse
     */
    public function store(PaymentFormRequest $request): JsonResponse
    {
        try {
            // Create a new Payment instance with the validated data from the request
            $payment = Payment::create($request->validated());
            return response()->json($payment, 201);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Payment $payment
     * @return JsonResponse
     */
    public function show(Payment $payment): JsonResponse
    {
        try {
            // Return a JSON response with the specified payment
            return response()->json($payment, 200);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Payment $payment
     * @return JsonResponse
     */
    public function destroy(Payment $payment): JsonResponse
    {
        try {
            // Delete the specified payment
            $payment->delete();
            return response()->json(null, 204);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Set the payment as paid.
     *
     * @param Payment $payments
     * @return JsonResponse
     */
    public function setPaid(Payment $payments): JsonResponse
    {
        try {
            // Update the 'is_paid' attribute of the payment to true
            // and set the 'paid_at' attribute to the current timestamp
            $payments->update(['is_paid' => true, 'paid_at' => now()]);

            // Return a JSON response with the updated payment
            return response()->json(null, 201);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }
}
