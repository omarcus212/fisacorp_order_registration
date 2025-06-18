<?php

use App\Http\Controllers\CanceledController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\OrdersItemController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\RegisterController;
use App\Http\Middleware\BadRequest;
use App\Http\Middleware\BadRequestOrder;
use GuzzleHttp\Middleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

Route::get('/customer', [CustomerController::class, 'getCustomer']);
Route::post('/customer', [CustomerController::class, 'createCustomer'])
    ->middleware(BadRequest::class);
Route::put('/customer/{id}', [CustomerController::class, 'updateCustomer']);

Route::get('/orders/{id}', [OrdersController::class, 'getOrders']);
Route::post('/orders', [OrdersController::class, 'createOrders'])
    ->middleware(BadRequestOrder::class);
Route::put('/orders', [CustomerController::class, 'updateOrders']);

Route::get('/products', [ProductsController::class, 'getProducts']);

Route::get('/register', [RegisterController::class, 'getRegister']);
Route::delete('/canceled/{id}', [CanceledController::class, 'canceled']);

Route::get('/ordersItem/{id}', [OrdersItemController::class, 'getOrdersItemId']);
Route::post('/ordersItem', [OrdersItemController::class, 'createOrdersItem']);
Route::get('/ordersItemTotal', [OrdersItemController::class, 'OrdersItemTotal']);
