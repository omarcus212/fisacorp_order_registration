<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrdersItemController
{
    public function createOrdersItem(Request $request)
    {

        $data = new OrderItem();
        $ordersItem = $data->saveOrderItem($request);

        if ($ordersItem) {

            return response()->json([
                'status' => 'success',
                'data' => $ordersItem,
            ])->setStatusCode(200);

        } else {

            return response()->json([
                'status' => 'erro',
                'message' => 'Não foi possivel adicionar o item',
            ], 400);

        }

    }


    public function updateOrdersItem(Request $request)
    {

        $data = new OrderItem();
        $ordersItem = $data->updateOrderItem($request);

        if ($ordersItem) {

            return response()->json([
                'status' => 'success',
                'data' => $ordersItem,
            ])->setStatusCode(200);

        } else {

            return response()->json([
                'status' => 'erro',
                'message' => 'Não foi possivel adicionar o item',
            ], 400);

        }

    }


    public function deleteOrdersItem(Request $request)
    {

        $data = new OrderItem();
        $ordersItem = $data->deleteOrderItem($request);

        if ($ordersItem) {

            return response()->json([
                'status' => 'success',
                'data' => $ordersItem,
            ])->setStatusCode(200);

        } else {

            return response()->json([
                'status' => 'erro',
                'message' => 'Não foi possivel remover o item',
            ], 400);

        }

    }

    public function getOrdersItemId(Request $request)
    {

        $data = new OrderItem();
        $id = $request->route('id');
        $ordersItem = $data->getOrdersItemId($id);

        if (!$ordersItem) {

            return response()->json([
                'status' => 'erro',
                'data' => 'Nenhum produto encontrado.',
            ], 422);

        } else {

            return response()->json([
                'success' => true,
                'data' => $ordersItem,
            ])->setStatusCode(200);

        }

    }

    public function OrdersItemTotal(Request $request)
    {

        $data = new OrderItem();
        $ordersItem = $data->OrdersItemTotal($request);


        if (!$ordersItem) {

            return response()->json([
                'status' => 'success',
                'data' => '00,00',
            ], 422);

        } else {

            return response()->json([
                'success' => true,
                'data' => $ordersItem,
            ])->setStatusCode(200);

        }

    }

}
