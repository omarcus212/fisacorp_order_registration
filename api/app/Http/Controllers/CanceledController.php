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

            $oderRes = $order->getCustomerOrderId($idCustomer);

            if ($oderRes) {

                $idOrder = $oderRes->id;
                $orderItemRes = $orderItem->getOrdersItemId($idOrder);

                if ($orderItemRes) {

                    $deleOrderItem = $orderItem->deleteOrdersItemCustomer($idOrder);

                    if ($deleOrderItem) {

                        $deleOrder = $order->deleteOrders($idOrder);

                        if ($deleOrder) {

                            $order->deleteOrders($idOrder);
                            $customer->deleteCustomer($idCustomer);

                            return response()->json([
                                'status' => 'success',
                                'res' => 'Registro excluido com sucesso',
                            ], 200);
                        }

                    }

                    $order->deleteOrders($idOrder);
                    $customer->deleteCustomer($idCustomer);

                    return response()->json([
                        'status' => 'success',
                        'res' => 'Registro excluido com sucesso',
                    ], 200);

                } else {

                    $customer->deleteCustomer($idCustomer);

                    return response()->json([
                        'status' => 'success',
                        'res' => 'Registro excluido com sucesso',
                    ], 200);

                }

            } else {

                $customerRes = $customer->getCustomerId($idCustomer);

                if ($customerRes) {

                    $resDataCostumer = $customer->deleteCustomer($idCustomer);

                    if ($resDataCostumer || $resDataCostumer == 0) {

                        return response()->json([
                            'status' => 'success',
                            'res' => 'Registro excluido com sucesso',
                        ], 200);

                    } else {

                        return response()->json([
                            'status' => 'erro',
                            'res' => 'Não foi possivel cancelar pedido',
                        ], 402);
                    }

                } else {

                    return response()->json([
                        'status' => 'erro',
                        'res' => 'Não foi possivel cancelar pedido',
                    ], 422);

                }


            }

        } catch (Exception $e) {

            DB::rollBack();

            return response()->json([
                'status' => 'erro',
                'res' => 'Não foi possivel cancelar pedido',
            ], 400);
        }
    }
}
