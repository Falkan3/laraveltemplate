<?php

namespace App\Http\Controllers;

use App;
use Illuminate\Http\Request;

class HelperController extends Controller
{
    /**
     * Handle an incoming request.
     *
     * @param  $lang
     * @param Request $request
     * @return mixed
     */
    public static function switchLanguage($lang = null, $new_lang = null, Request $request)
    {
        // Make sure locale exists.
        if (isset($new_lang)) {
            $locale = $request->segment(1);
            if (strlen($locale) >= 6 && array_key_exists(substr($locale, 5), config('app.locales'))) {
                $locale = $new_lang;
                if(array_key_exists($locale, config('app.locales'))) {
                    $segments = explode('/', \URL::previous());
                    $segments[3] = 'lang_' . $locale;
                    $newUrl = implode('/', $segments);
                    if (array_key_exists('QUERY_STRING', $_SERVER))
                        $newUrl .= '?' . $_SERVER['QUERY_STRING'];
                    App::setLocale($locale);
                }
            }
        }

        return redirect(url($newUrl, env('HTTPS')));
        //return redirect()->route('index');
    }
}
