<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
class Customer extends Model
{
    protected $fillable = ['name'];

    public static function getAllCustomer()
    {
        $res = DB::table('customer')->get();
        return $res;
    }

    public static function getCustomerId($id)
    {
        $res = DB::table('customer')->where('id', '=', $id)->get();
        return $res;
    }

    public static function saveCustomer($body)
    {
        $id = DB::table('customer')->insertGetId([
            'name' => $body->name,
        ]);

        $res = DB::table('customer')
            ->select('id', 'name')
            ->where('id', $id)
            ->first();

        return $res;
    }

    public static function updateCustomer($body)
    {
        DB::table('customer')
            ->where('id', $body->id)
            ->update([
                'name' => $body->name,
            ]);

        $res = DB::table('customer')
            ->select('id', 'name')
            ->where('id', $body->id)
            ->first();

        return $res;
    }

    public static function deleteCustomer($idCustomer)
    {
        $res = DB::table('customer')->delete($idCustomer);
        return $res;
    }

}