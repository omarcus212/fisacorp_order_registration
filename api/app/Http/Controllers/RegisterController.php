<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class RegisterController
{
    public function getRegister(Request $request)
    {

        $data = new Order();

        $ordersRegister = $data->getOrderRegisterList($request);

        if (!$ordersRegister) {

            return response()->json([
                'status' => 'erro',
                'data' => 'Nenhum registro encontrado.',
            ], 422);

        } else {

            return response()->json([
                'status' => 'success',
                'data' => $ordersRegister,
            ])->setStatusCode(200);

        }

    }
}
