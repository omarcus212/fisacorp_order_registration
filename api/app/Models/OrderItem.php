<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'unit_price',
    ];

    public static function saveOrderItem($order_id, $body)
    {
        $res = DB::table('order_items')->insert([
            'order_id' => $order_id,
            'product_id' => $body['product_id'],
            'quantity' => $body['quantity'],
            'unit_price' => $body['unit_price'],
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return $res;
    }

    public static function getOrdersItemId($id)
    {
        $res = DB::table('orders')
            ->join('customer', 'orders.customer_id', '=', 'customer.id')
            ->join('order_items', 'orders.id', '=', 'order_items.order_id')
            ->join('products', 'order_items.product_id', '=', 'products.id')
            ->select(
                'order_items.id',
                'customer.name as customer_name',
                'products.name as product_name',
                'products.img',
                'order_items.quantity',
                'order_items.unit_price',
                DB::raw('(order_items.quantity * order_items.unit_price) as total_price')
            )
            ->where('customer.id', $id)
            ->get();

        if (count($res) == 0) {
            return null;
        }

        return $res;
    }

    public static function OrdersItemTotal($body)
    {
        $res = DB::table('orders')
            ->join('order_items', 'orders.id', '=', 'order_items.order_id')
            ->select(
                'orders.id as order_id',
                DB::raw('SUM(order_items.quantity * order_items.unit_price) as total_order_price')
            )
            ->where('orders.customer_id', $body->customer_id)
            ->groupBy('orders.id')
            ->get();

        if (count($res) == 0) {
            return null;
        }

        return $res;
    }

    public static function deleteOrdersItemCustomer($id)
    {
        $res = DB::table('order_items')->where('order_id', '=', $id)->delete();
        return $res;
    }

}
