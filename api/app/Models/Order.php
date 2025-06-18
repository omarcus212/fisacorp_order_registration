<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['customer_id', 'delivery_date', 'created_at', 'updated_at'];


    public static function getAllOrder()
    {
        $res = DB::table('orders')->get();
        return $res;
    }

    public static function getCustomerOrderId($id)
    {
        $res = DB::table('orders')
            ->join('customer', 'orders.customer_id', '=', 'customer.id')
            ->where('customer.id', $id)
            ->select(
                'orders.id',
                'orders.delivery_date',
                'orders.created_at',
                'customer.id as customer_id',
                'customer.name'
            )
            ->orderBy('orders.created_at', 'desc')
            ->first();

        return $res;
    }

    public static function saveOrder($body)
    {
        $res = DB::table('orders')->insert([
            'customer_id' => $body->idCustomer,
            'delivery_date' => $body->date
        ]);

        return $res;
    }


    public static function getOrderRegisterList($body)
    {
        $res = DB::table('orders')
            ->join('customer', 'orders.customer_id', '=', 'customer.id')
            ->select(
                'customer.id as customer_id',
                'customer.name as customer_name',
                'orders.created_at as order_date',
                'orders.delivery_date'
            )->where('customer.name', 'like', '%' . $body->search . '%')
            ->get();

        if (count($res) == 0) {
            return null;
        }

        return $res;
    }

    public static function deleteOrders($id)
    {
        $res = DB::table('orders')->delete($id);
        return $res;
    }

}
