<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::check())
        {
            if(Auth::user()->isAdmin()) {
                return $next($request);
            }

            return redirect()->guest('lang_' . \Lang::getLocale() . '/home')->with('error', __('auth.admin_only'));
        }

        return redirect()->guest('lang_' . \Lang::getLocale() . '/login');
        //return redirect()->intended('lang_' . \Lang::getLocale() . '/home');
        //return redirect('lang_' . \Lang::getLocale() . '/home');
    }
}
