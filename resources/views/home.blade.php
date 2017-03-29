@extends('layouts.main.main')

@section('title', __('system.home'))
@section('description', '')
@section('custom_css')
    <link rel="stylesheet" href="{{ URL::asset('css/auth.css', env('HTTPS')) }}" type="text/css" media="all"/>
@stop
@section('custom_js')
    <script src="{{ URL::asset('js/plugins/flippers.js', env('HTTPS')) }}"></script>
@stop


@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="container-fluid">
                            {{__('system.youareloggedin')}}

                            <div class="row tile-container">
                                @if(Auth::user()->isAdmin())
                                    <div class="flipper-main-container">

                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                                <div class="flipper color_1">
                                                    <div class="front">

                                                    </div>
                                                    <div class="back">
                                                        <a href="{{url('lang_' . $app->getLocale() . '/admin', env('HTTPS'))}}"
                                                           class="flipper"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                                <div class="flipper color_1">
                                                    <div class="front">

                                                    </div>
                                                    <div class="back">
                                                        <a href="{{url('lang_' . $app->getLocale() . '/admin', env('HTTPS'))}}"
                                                           class="flipper"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xs-12 col-sm-6 col-md-4">
                                            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                                                <div class="flipper color_1">
                                                    <div class="front">

                                                    </div>
                                                    <div class="back">
                                                        <a href="{{url('lang_' . $app->getLocale() . '/admin', env('HTTPS'))}}"
                                                           class="flipper"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
