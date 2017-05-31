@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')
@section('custom_css')
    <link rel="stylesheet" href="{{ URL::asset('css/libs/animate_custom.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/libs/slick.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/libs/slick-theme.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/libs/fancySelect.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
@stop
@section('custom_js')
    <script src="{{ URL::asset('js/libs/wow.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/libs/slick.min.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/flippers.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/iterator.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/square.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/accordion.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/libs/fancySelect.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/pages/indexscript.js', env('HTTPS')) }}"></script>
@stop

@section('content')
    <section class="carousel">
        <div class="container-fluid">
            <div class="row">
                <div class="carousel">
                    <div class="item slide slide1 bged">
                        <div class="slide_caption"><p>Test 1</p></div>
                    </div>

                    <div class="item slide slide2 bged">
                        <div class="slide_caption"><p>Test 2</p></div>
                    </div>

                    <div class="item slide slide3 bged">
                        <div class="slide_caption"><p>Test 3</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="page no-padding">
        <div class="container-fluid">
            <div class="row">
                <div style="position: absolute; width: 100%; height: 400px; margin-bottom: 50px;  z-index: 1;">
                    <div class="slideInRightResize animated wow" data-wow-duration="1.5s"
                         style="width: 100%; height:100%; background-color: #ff9c10; float: left;"></div>
                </div>
                <div style="position: relative; width: 50%; height: 400px; margin-bottom: 50px; background-color: #fff; margin-left: auto;">

                </div>
            </div>
        </div>

        <div class="container">
            <p>{{__('pages/index.congrats')}}</p>
            <p>{{__('pages/index.lang_is')}}: {{$app->getLocale()}}</p>
            <p><a href="{{url('lang_' . $app->getLocale() . '/form', null, env('HTTPS'))}}">Go to form</a></p>

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

            <div class="col-xs-12">
                <div class="accordion-container">
                    <div class="accordion-item active">
                        <a href="#">
                            <p><i class="fa fa-plus" aria-hidden="true"></i> Accordion1</p>
                        </a>
                        <div class="accordion-item-content">
                            <p>Content</p>
                        </div>
                    </div>
                    <div class="accordion-item active">
                        <a href="#">
                            <p><i class="fa fa-plus" aria-hidden="true"></i> Accordion2</p>
                        </a>
                        <div class="accordion-item-content">
                            <p>Content</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12">
                <select class="basic">
                    <option value="">Select something…</option>
                    <option>Lorem</option>
                    <option>Ipsum</option>
                    <option>Dolor</option>
                    <option>Sit</option>
                    <option>Amet</option>
                </select>
            </div>
        </div>
    </section>
@stop