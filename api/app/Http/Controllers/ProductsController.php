<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController
{
    public function getProducts(Request $request)
    {

        $data = new Product();
        $products = $data->getProducts($request);

        if (!$products) {

            return response()->json([
                'status' => 'erro',
                'data' => 'Nenhum produto encontrado.',
            ], 422);

        } else {

            return response()->json([
                'success' => true,
                'data' => $products,
            ])->setStatusCode(200);

        }

    }
}
