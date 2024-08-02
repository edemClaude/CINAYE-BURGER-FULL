<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Register a new user.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request): JsonResponse
    {
        // Validate the incoming request data
        $request->validate([
            'first_name' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Create a new user with the validated data
        $user = User::create([
            'last_name' => $request->last_name,
            'name' => $request->first_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Generate a plain text token for the user
        $token = $user->createToken('auth_token')->plainTextToken;

        // Return the token as a JSON response
        return response()->json(['access_token' => $token, 'token_type' => 'Bearer']);
    }

    /**
     * Handle user login.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request) : JsonResponse
    {
        // Check if the user login attempt is valid
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid login details'], 401);
        }

        // Retrieve the logged-in user
        $loggedInUser = User::where('email', $request->email)->firstOrFail();

        // Generate the access token for the logged-in user
        $accessToken = $loggedInUser->createToken('auth_token')->plainTextToken;

        // Return the access token and token type in JSON format
        return response()->json(['access_token' => $accessToken, 'token_type' => 'Bearer']);
    }

    /**
     * Log the user out by deleting the current access token.
     *
     * This PHP code snippet defines a logout function that logs a user out by deleting their current access token.
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
