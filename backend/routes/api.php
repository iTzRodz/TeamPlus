<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => 'api',
    'prefix' => 'authorized'

], function ($router) {

    $router->group(['prefix' => 'auth'], function ($router) {
        $router->post('/login', [LoginController::class, 'login']);
    });
 ;

});

$router->group(['prefix' => 'user'], function ($router) {
    $router->post('/store', [UserController::class, 'store']);
    $router->post('/update/{id}', [UserController::class, 'update']);
});
