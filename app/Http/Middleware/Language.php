<?php

namespace App\Http\Middleware;

use Closure;
use Config;
use App;
use Redirect;

class Language
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
        // Make sure current locale exists.
        $locale = $request->segment(1);
        if(strlen($locale)>=5 && substr($locale,0,5) === 'lang_') {
            if ( ! array_key_exists(substr($locale,5), Config::get('app.locales'))) {
                $segments = $request->segments();
                $segments[0] = 'lang_' . Config::get('app.fallback_locale');
                $newUrl = implode('/', $segments);
                if (array_key_exists('QUERY_STRING', $_SERVER))
                    $newUrl .= '?'.$_SERVER['QUERY_STRING'];
                App::setLocale(Config::get('app.fallback_locale'));
                return Redirect::to($newUrl);
            }
            else
                App::setLocale(substr($locale,5));
        }
        else {
            App::setLocale(Config::get('app.fallback_locale'));
            return Redirect::to('lang_' . Config::get('app.fallback_locale'));
        }
        return $next($request);
    }
}
