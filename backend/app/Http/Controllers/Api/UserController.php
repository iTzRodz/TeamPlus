<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'name' => 'required|max:255|min:1',
            'email' => 'required',
            'password' => 'required'
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Your request is missing data'
            ], 400);
        }

        $users = User::create($request->all());

        return response()->json([
            'message' => 'User created successfully',
            'User' => $users
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return response()->json([
            'message' => 'success',
            'User' => $user
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $validated = Validator::make($request->all(), [
            'name' => 'max:255'
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Your request is missing data'
            ], 400);
        }

        $user->update($request->all());

        return response()->json([
            'message' => 'User updated successfully',
            'User' => $user
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => "user deleted successfully"
        ], 200);
    }
}
