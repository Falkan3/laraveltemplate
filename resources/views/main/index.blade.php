@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')
@section('custom_css')
    <link rel="stylesheet" href="{{ URL::asset('css/xxx.css', env('HTTPS')) }}" type="text/css" media="all"/>
@stop
@section('custom_js')
    <script src="{{ URL::asset('js/xxx.js', env('HTTPS')) }}" type="text/javascript"></script>
@stop

@section('content')
    <div class="wrapper full-height">
        <div class="container">
            <p>Congrats!</p>

            <div class="col-xs-12 col-sm-4">
                <div class="flipper-main-container">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper color_1">
                            <div class="front">

                            </div>
                            <div class="back">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-4 iterator iterator-container-1">
                <div class="iterator-item"></div>
                <div class="iterator-item"></div>
                <div class="iterator-item"></div>
                <div class="iterator-item"></div>
            </div>

            <div class="col-xs-12 col-sm-4 iterator iterator-container-2">
                <div class="iterator-item"></div>
                <div class="iterator-item"></div>
                <div class="iterator-item"></div>
                <div class="iterator-item"></div>
            </div>
        </div>
    </div>
@stop