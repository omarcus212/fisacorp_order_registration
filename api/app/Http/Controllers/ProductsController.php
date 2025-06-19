<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController
{
    public function getProducts(Request $request)
    {

        $data = new Product();
        $search = $request->query('search');
        $products = $data->getProducts($search);

        if (!$products) {

            return response()->json([
                'status' => 'erro',
                'res' => 'Nenhum produto encontrado.',
            ], 422);

        } else {

            return response()->json([
                'status' => 'success',
                'res' => $products,
            ])->setStatusCode(200);

        }

    }
}
