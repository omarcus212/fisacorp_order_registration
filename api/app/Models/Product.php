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
}
