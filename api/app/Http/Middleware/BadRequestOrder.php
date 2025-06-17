<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BadRequestOrder
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (
            !$request->idCustomer || !is_numeric($request->idCustomer) ||
            !$request->date || !strtotime($request->date)
        ) {
            return response()->json([
                'status' => 'erro',
                'message' => 'O campo id ou date é inválido.',
            ], 422);
        } else {
            return $next($request);
        }

    }
}
