<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers {
        logout as performLogout;
    }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Get the post register / login redirect path.
     *
     * @return string
     */
    public function redirectTo()
    {
        // Logic that determines where to send the user
        if (Auth::user()->isAdmin()) {
            return '/admin';
        }

        return '/home';
    }

    protected function authenticated($request,$user)
    {
        if($user->isAdmin()){
            return redirect()->intended('lang_' . \Lang::getLocale() . '/admin');
        }

        return redirect()->intended('lang_' . \Lang::getLocale() . '/home');
    }

    public function logout(\Illuminate\Http\Request $request)
    {
        $this->performLogout($request);
        return redirect()->back();
        //return redirect('lang_' . \Lang::getLocale());
    }
}
