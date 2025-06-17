<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BadRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if (!$request->name || !is_string($request->name)) {
            return response()->json([
                'status' => 'erro',
                'message' => 'O campo name inválido',
            ], 422);
        } else {
            return $next($request);
        }

    }
}
