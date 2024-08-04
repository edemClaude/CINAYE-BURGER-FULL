<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BurgerFormRequest;
use App\Models\Burger;
use Illuminate\Http\JsonResponse;

class BurgerController extends Controller
{

    /**
     * Retrieve all burgers from the database and return them as a JSON response.
     *
     * @return JsonResponse
     */
    public function index() : JsonResponse
    {
        try {
            // Retrieve all burgers from the database
            $burgers = Burger::all();

            // Return a JSON response with the retrieved burgers
            return response()->json($burgers, 200);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Display the specified burger.
     *
     * @param Burger $burger
     * @return JsonResponse
     */
    public function show(Burger $burger) : JsonResponse
    {
        try {
            // Return a JSON response with the specified burger
            return response()->json($burger, 200);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Delete the specified burger.
     *
     * @param Burger $burger
     * @return JsonResponse
     */
    public function destroy(Burger $burger) : JsonResponse
    {
        try {
            $burger->delete();
            return response()->json(null, 204);
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Update a burger record.
     *
     * @param BurgerFormRequest $request
     * @param Burger $burger
     * @return JsonResponse
     */
    public function update(BurgerFormRequest $request, Burger $burger) : JsonResponse
    {
        try {

            // Update the burger record with the validated request data
            $burger->update($request->validated());

            // Return a JSON response with the updated burger and a 200 status code
            return response()->json($burger, 200);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message and a 500-status code
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BurgerFormRequest $request
     * @return JsonResponse
     */
    public function store(BurgerFormRequest $request) : JsonResponse
    {
        try{
            // Create a new Burger instance with the validated data from the request
            $burger = Burger::create($request->validated());

            // Return a JSON response with the newly created burger and status code 201 (Created)
            return response()->json($burger, 201);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message and status code 500 (Internal Server Error)
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Archive a burger by updating its 'is_archived' attribute.
     *
     * @param Burger $burger The burger to archive
     * @return JsonResponse
     */
    public function archive(Burger $burger) : JsonResponse
    {
        try {
            // Update the 'is_archived' attribute of the burger to true
            $burger->update(['is_archived' => true]);

            // Return a JSON response with a status code of 204 (No Content)
            return response()->json(null, 204);
        } catch (\Exception $exception) {
            // Return a JSON response with the exception message and a status code of 500 (Internal Server Error)
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Restore a previously archived Burger.
     *
     * @param Burger $burger The Burger object to restore
     * @return JsonResponse
     */
    public function restore(Burger $burger) : JsonResponse
    {
        try {
            // Update the Burger to set is_archived to false
            $burger->update(['is_archived' => false]);
            // Return a success response with no content
            return response()->json(null, 204);
        } catch (\Exception $exception) {
            // Return an error response with the exception message
            return response()->json($exception->getMessage(), 500);
        }
    }

    /**
     * Retrieve only unarchived burgers from the database and return them as JSON response.
     *
     * @return JsonResponse
     */
    public function getOnlyUnarchivedBurger() : JsonResponse
    {
        try {
            // Retrieve unarchived burgers from the database
            $burgers = Burger::where('is_archived', false)->get();

            // Return JSON response with the unarchived burgers
            return response()->json($burgers, 200);
        } catch (\Exception $exception) {
            // Return JSON response with the error message if an exception occurs
            return response()->json($exception->getMessage(), 500);
        }
    }

}
