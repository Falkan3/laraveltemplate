@extends('layouts.main.main')

@section('title', __('system.login'))
@section('description', '')
@section('custom_css')
    <link rel="stylesheet" href="{{ URL::asset('css/form_css.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/auth.css', env('HTTPS')) }}" type="text/css" media="all"/>
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST"
                              action="{{ url($app->getLocale() . '/login', null, env('HTTPS')) }}">
                            {{ csrf_field() }}

                            <div class="auth-container">
                                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                    <label for="email" class="col-md-4 control-label">{{__('system.emailaddress')}}</label>

                                    <div class="col-xs-12">
                                        <input id="email" type="email" class="form-control" name="email"
                                               value="{{ old('email') }}" required autofocus>

                                        @if ($errors->has('email'))
                                            <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                    <label for="password" class="col-md-4 control-label">{{__('system.password')}}</label>

                                    <div class="col-xs-12">
                                        <input id="password" type="password" class="form-control" name="password"
                                               required>

                                        @if ($errors->has('password'))
                                            <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <div class="checkbox">
                                                <?php /*<input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me*/ ?>
                                                {{Form::checkbox('remember', null, old('remember') ? 'checked' : '', ['id' => 'chk_rememberMe'])}}
                                                {!!Html::decode(Form::label('chk_rememberMe', '<span></span>'.__('system.rememberme'), ['class' => 'control-label']))!!}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <button type="submit" class="btn btn-primary button sliding_bg">
                                            {{__('system.logmein')}}
                                        </button>

                                        <a class="btn btn-link"
                                           href="{{ url($app->getLocale() . '/password/reset', null, env('HTTPS')) }}">
                                            {{__('system.forgotpassword')}}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
