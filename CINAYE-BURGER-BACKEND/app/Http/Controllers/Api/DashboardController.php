<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Burger;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Payment;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        // Try to fetch various counts and revenue data
        try {
            return response()->json([
                'customer_count' => $this->customerCount(), // Get total customer count
                'burger_count' => $this->burgerCount(), // Get total burger count
                'order_count' => $this->orderCount(), // Get total order count
                'payment_count' => $this->paymentCount(), // Get total payment count
                'total_revenue' => $this->totalRevenue(), // Get total revenue
                'daily_order_count' => $this->dailyOrderCount(), // Get daily order count
                'daily_validated_order_count' => $this->dailyValidatedOrderCount(), // Get daily validated order count
                'daily_pending_order_count' => $this->dailyPendingOrderCount(), // Get daily pending order count
                'daily_canceled_order_count' => $this->dailyCanceledOrderCount(), // Get daily canceled order count
                'daily_revenue' => $this->dailyRevenue(), // Get daily revenue
            ]);
        } catch (Exception $e) {
            // Return error message if an exception occurs
            return response()->json([
                'message' => $e->getMessage()
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Filter orders based on the given criteria.
     *
     * @param Request $request The request object containing filter parameters
     * @return JsonResponse JSON response containing filtered orders
     */
    public function filter(Request $request): JsonResponse
    {
        // Validate the request data
        $request->validate([
            'customer' => 'integer|nullable',
            'burger' => 'string|nullable',
            'date' => 'date|nullable',
            'status' => 'string|nullable',
        ]);

        $query = Order::query();

        // Filter orders by customer
        if($request->has('customer')){
            $query->where('customer_id', $request->input()['customer']);
        }

        // Filter orders by burger type
        if($request->has('burger')){
            $query->where('burger_id', $request->input()['burger']);
        }

        // Filter orders by date
        if($request->has('date')){
            $query->whereDate('created_at', $request->input()['date']);
        }

        // Filter orders by status
        if($request->has('status')){
            $query->where('status', $request->input()['status']);
        }

        $orders = $query->with('customer', 'burger')->get();

        return response()->json([
            'orders' => $orders
        ]);
    }

    /**
     * Retrieve the count of customers.
     * @return int
     */
    public function customerCount(): int
    {
        return Customer::all()->count();
    }

    /**
     * Retrieve the count of burgers.
     * @return int
     */
    public function burgerCount(): int
    {
        return Burger::all()->count();
    }

    /**
     * Retrieve the count of orders.
     * @return int
     */
    public function orderCount(): int
    {
        return Order::all()->count();
    }

    /**
     * Retrieve the count of payments.
     * @return int
     */
    public function paymentCount(): int
    {
        return Payment::all()->count();
    }

    /**
     * Retrieve the total revenue.
     * @return mixed
     */
    public function totalRevenue(): mixed
    {
        return Payment::all()->sum('amount');
    }

    /**
     * Retrieve the count of orders for the current day.
     * @return int
     */
    public function dailyOrderCount(): int
    {
        return Order::whereDate('created_at', date('Y-m-d'))->count();
    }

    /**
     * Retrieve the count of validated orders for the current day.
     *
     * @return int
     */
    public function dailyValidatedOrderCount(): int
    {
        return Order::whereDate('created_at', date('Y-m-d'))
            ->where('status', '=','ready')->count();
    }

    /**
     * Retrieve the count of pending orders for the current day.
     * @return int
     */
    public function dailyPendingOrderCount(): int
    {
        return Order::whereDate('created_at', date('Y-m-d'))
            ->where('status', '=','pending')->count();
    }

    /**
     * Retrieve the count of canceled orders for the current day.
     * @return int
     */
    public function dailyCanceledOrderCount(): int
    {
        return Order::whereDate('created_at', date('Y-m-d'))
            ->where('status', '=','canceled')->count();
    }

    /**
     * Retrieve the total revenue for the current day.
     * @return int|mixed
     */
    public function dailyRevenue(): mixed
    {
        return Payment::whereDate('created_at', date('Y-m-d'))
            ->sum('amount');
    }


}
