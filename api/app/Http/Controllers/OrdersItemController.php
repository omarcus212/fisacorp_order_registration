<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use App\Models\Product;
use DB;
use Exception;
use Illuminate\Http\Request;

class OrdersItemController
{
    public function createOrdersItem(Request $request)
    {

        $data = new OrderItem();
        $products = new Product();

        try {

            DB::beginTransaction();

            for ($i = 0; $i < count($request->data); $i++) {

                $productsData = $products->updateStockQuantity($request->data[$i]);

                if ($productsData) {

                    $ordersItem = $data->saveOrderItem($request->order_id, $request->data[$i]);

                } else {

                    return response()->json([
                        'status' => 'default',
                        'error' => "Estoque insuficiente para o produto ID {$request->data[$i]['name']}."
                    ], 400);

                }
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
