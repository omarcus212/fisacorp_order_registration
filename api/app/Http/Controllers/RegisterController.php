<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class RegisterController
{
    public function getRegister(Request $request)
    {

        $data = new Order();
        $search = $request->query('search');
        $ordersRegister = $data->getOrderRegisterList($search);

        if (!$ordersRegister) {

            return response()->json([
                'status' => 'erro',
                'res' => 'Nenhum registro encontrado.',
            ], 422);

        } else {

            return response()->json([
                'status' => 'success',
                'res' => $ordersRegister,
            ])->setStatusCode(200);

        }

    }
}
