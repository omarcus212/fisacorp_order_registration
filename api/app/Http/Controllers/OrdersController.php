<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use Illuminate\Http\Request;

class OrdersController
{
    public function createOrders(Request $request)
    {

        $data = new Order();
        $dataCustomer = new Customer();

        $orders = $data->saveOrder($request);

        if ($orders) {

            return response()->json([
                'status' => 'success',
                'data' => $orders,
            ])->setStatusCode(200);

        } else {

            $orders = $dataCustomer->deleteCustomer($request);
            return response()->json([
                'status' => 'erro',
                'message' => 'Não foi possivel registrar o cliente',
            ], 400);

        }

    }
}
