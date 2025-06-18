<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'price', 'stock_quantity'];

    public static function getProducts($body)
    {
        $res = DB::table('products')
            ->select('id', 'name', 'price', 'stock_quantity', 'img')
            ->where('name', 'like', '%' . $body->search . '%')
            ->get();

        if (count($res) == 0) {
            return null;
        }

        return $res;
    }

    public static function updateStockQuantity($body)
    {

        $productId = $body['product_id'];
        $quantityPurchased = $body['quantity'];

        $product = DB::table('products')->where('id', $productId)->first();

        if ($product->stock_quantity < $quantityPurchased) {
            return null;
        }

        $res = DB::table('products')->where('id', $productId)->update([
            'stock_quantity' => $product->stock_quantity - $quantityPurchased
        ]);

        return $res;
    }
}
