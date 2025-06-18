<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use Exception;
use Illuminate\Http\Request;

class OrdersController
{


    public function getOrders(Request $request)
    {

        $id = $request->Route('id');
        $data = new Order();

        $orders = $data->getCustomerOrderId($id);

        return response()->json([
            'status' => 'success',
            'data' => $orders,
        ])->setStatusCode(200);

    }
    public function createOrders(Request $request)
    {

        $data = new Order();
        $dataCustomer = new Customer();

        try {

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
                    'message' => 'Não foi possivel registrar o pedido',
                ], 400);

            }

        } catch (Exception $e) {

            return response()->json([
                'status' => 'erro',
                'message' => 'Não foi possivel registrar o pedido',
            ], 500);

        }
    }
}
