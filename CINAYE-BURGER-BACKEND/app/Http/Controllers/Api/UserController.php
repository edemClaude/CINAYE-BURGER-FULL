<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserFormRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            // Retrieve all users from the database
            return response()->json(User::all(), 200);
        } catch (Exception $e) {
            // Return an error response if the query fails
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return JsonResponse
     */
    public function show(User $user): JsonResponse
    {
        try {
            // Retrieve the user from the database
            return response()->json($user, 200);
        } catch (Exception $e) {
            // Return an error response if the query fails
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserFormRequest $request
     * @param User $user
     * @return JsonResponse
     */
    public function update(UserFormRequest $request, User $user): JsonResponse
    {
        try {
            // Update the user in the database
            $user->update($request->validated());

            // Return the updated user
            return response()->json($user, 200);
        } catch (Exception $e) {
            // Return an error response if the query fails
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return JsonResponse
     */
    public function destroy(User $user): JsonResponse
    {
        try {
            // Delete the user from the database
            $user->delete();

            // Return a success response
            return response()->json(['message' => 'User deleted successfully'], 200);
        } catch (Exception $e) {
            // Return an error response if the query fails
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Activate the specified resource in storage.
     *
     * @param User $user
     * @return JsonResponse
     */
    public function activate(User $user): JsonResponse
    {
        try {
            // Update the user in the database to set is_active to true
            $user->update(['is_active' => true]);

            // Return the updated user with a 200-status code
            return response()->json($user, 200);
        } catch (Exception $e) {
            // Return an error response if the query fails
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Deactivate the specified resource in storage.
     *
     * @param User $user
     * @return JsonResponse
     */
    public function deactivate(User $user): JsonResponse
    {
        try {
            // Update the user in the database to set is_active to false
            $user->update(['is_active' => false]);

            // Return the updated user with a 200-status code
            return response()->json($user, 200);
        } catch (Exception $e) {
            // Return an error response if the query fails
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
