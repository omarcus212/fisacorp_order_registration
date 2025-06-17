<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use DB;
use Exception;
use Illuminate\Http\Request;

class OrdersItemController
{
    public function createOrdersItem(Request $request)
    {

        $data = new OrderItem();

        try {

            DB::beginTransaction();

            for ($i = 0; $i < count($request->data); $i++) {

                $ordersItem = $data->saveOrderItem($request->order_id, $request->data[$i]);

            }

            DB::commit();

            if (!$ordersItem) {

                return response()->json([
                    'status' => 'erro',
                    'message' => 'Não foi possivel adicionar o item',
                ], 400);

            } else {

                return response()->json([
                    'status' => 'success',
                    'data' => $ordersItem,
                ])->setStatusCode(200);

            }

        } catch (Exception $e) {

            DB::rollBack();

            return response()->json([
                'status' => 'erro',
                'message' => 'Não foi possivel adicionar o item',
            ], 500);

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
                'status' => 'success',
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
                'status' => 'default',
                'data' => '00,00',
            ], 422);

        } else {

            return response()->json([
                'status' => 'success',
                'data' => $ordersItem,
            ])->setStatusCode(200);

        }

    }

}
