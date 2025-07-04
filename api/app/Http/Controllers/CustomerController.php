<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;


class CustomerController extends Controller
{
    public function getCustomer()
    {

        $data = new Customer();

        $customers = $data->getAllCustomer();

        return response()->json([
            'status' => 'success',
            'res' => $customers,
        ])->setStatusCode(200);

    }

    public function createCustomer(Request $request)
    {

        $data = new Customer();

        $customers = $data->saveCustomer($request);

        if (!$customers) {

            return response()->json([
                'status' => 'erro',
                'res' => 'Não foi possivel registrar o cliente',
            ], 422);

        } else {

            return response()->json([
                'status' => 'success',
                'res' => $customers,
            ])->setStatusCode(200);

        }

    }

    public function updateCustomer(Request $request)
    {

        $data = new Customer();

        $customers = $data->updateCustomer($request);

        if (!$customers) {

            return response()->json([
                'status' => 'erro',
                'res' => 'Não foi possivel registrar o cliente',
            ], 422);

        } else {

            return response()->json([
                'status' => 'success',
                'res' => $customers,
            ])->setStatusCode(200);

        }

    }
}
