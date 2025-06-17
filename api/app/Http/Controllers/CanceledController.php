<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use App\Models\OrderItem;
use DB;
use Exception;
use Illuminate\Http\Request;

class CanceledController
{
    public function canceled(Request $request)
    {
        $idCustomer = (int) $request->Route('id');
        $customer = new Customer();
        $order = new Order();
        $orderItem = new OrderItem();

        try {
            $customerOrderData = $order->getCustomerOrderId($idCustomer);

            if ($customerOrderData) {

                $orderItemData = $orderItem->deleteOrdersItemCustomer($customerOrderData[0]->id);

                if ($orderItemData || $orderItemData == 0) {

                    $orderData = $order->deleteOrders($customerOrderData[0]->id);

                    if ($orderData || $orderData == 0) {

                        $customerData = $customer->deleteCustomer(1);

                        if (!$customerData || $customerData == 0) {

                            return response()->json([
                                'status' => 'success',
                                'data' => 'Envios cancelado com sucesso',
                            ])->setStatusCode(200);

                        }
                    }
                }

            } else {

                return response()->json([
                    'status' => 'erro',
                    'data' => 'Não foi possivel cancelar o envio',
                ])->setStatusCode(400);

            }

        } catch (Exception $e) {

            DB::rollBack();

            return response()->json([
                'status' => 'erro',
                'message' => 'Não foi possivel cancelar os item e envio / pedido não encontrado',
            ], 500);
        }
    }
}
