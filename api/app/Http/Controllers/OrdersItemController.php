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
                        'res' => "Estoque insuficiente para o produto ID {$request->data[$i]['name']}."
                    ], 422);

                }
            }

            DB::commit();

            if (!$ordersItem) {

                return response()->json([
                    'status' => 'erro',
                    'res' => 'Não foi possivel adicionar o item',
                ], 422);

            } else {

                return response()->json([
                    'status' => 'success',
                    'res' => $ordersItem,
                ])->setStatusCode(200);

            }

        } catch (Exception $e) {

            DB::rollBack();

            return response()->json([
                'status' => 'erro',
                'res' => 'Não foi possivel adicionar o item',
            ], 400);

        }

    }

    public function getOrdersItemId(Request $request)
    {

        $data = new OrderItem();
        $id = $request->route('id');
        $ordersItem = $data->getOrdersItemIdCustomers($id);

        if (!$ordersItem) {

            return response()->json([
                'status' => 'erro',
                'res' => 'Nenhum produto encontrado.',
            ], 422);

        } else {

            return response()->json([
                'status' => 'success',
                'res' => $ordersItem,
            ])->setStatusCode(200);

        }

    }

    public function OrdersItemTotal(Request $request)
    {

        $data = new OrderItem();
        $id = $request->route('id');
        $ordersItem = $data->OrdersItemTotal($id);


        if (!$ordersItem) {

            return response()->json([
                'status' => 'default',
                'res' => '00,00',
            ], 422);

        } else {

            return response()->json([
                'status' => 'success',
                'res' => $ordersItem,
            ])->setStatusCode(200);

        }

    }

}
