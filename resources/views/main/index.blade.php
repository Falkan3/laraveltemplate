@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')
@section('custom_css')
    <link rel="stylesheet" href="{{ URL::asset('css/libs/animate_custom.css', env('HTTPS')) }}" type="text/css" media="all"/>
@stop
@section('custom_js')
    <script src="{{ URL::asset('js/libs/wow.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/flippers.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/iterator.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/square.js', env('HTTPS')) }}"></script>
@stop

@section('content')
    <div class="wrapper full-height">
        <section class="page">
            <div class="container-fluid">
                <div style="position: relative; height: 400px; margin-bottom: 50px;">
                    <div class="slideInRightResize animated wow" data-wow-duration="1.5s" style="width: 100%; height:100%; background-color: #ff9c10;"></div>
                </div>
            </div>

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
        </section>
    </div>
@stop