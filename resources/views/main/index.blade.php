@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')
@section('custom_css')
    <link rel="stylesheet" href="{{ URL::asset('css/libs/animate_custom.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/libs/slick.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/libs/slick-theme.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
@stop
@section('custom_js')
    <script src="{{ URL::asset('js/libs/wow.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/libs/slick.min.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/flippers.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/iterator.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/square.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/indexscript.js', env('HTTPS')) }}"></script>
@stop

@section('content')
    <section class="carousel">
        <div class="container-fluid">
            <div class="row">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner bged" role="listbox">
                        <div class="item active">
                            <img src="{{asset('images/banners/bg3.jpg', env('HTTPS'))}}" alt="Chania">
                        </div>

                        <div class="item">
                            <img src="{{asset('images/banners/bg3.jpg', env('HTTPS'))}}" alt="Chania">
                        </div>

                        <div class="item">
                            <img src="{{asset('images/banners/bg3.jpg', env('HTTPS'))}}" alt="Flower">
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
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
                <div style="position: relative; width: 100%; height: 400px; margin-bottom: 50px; background-color: #212121;">

                </div>
            </div>
        </div>

        <div class="container">
            <p>{{__('pages/index.congrats')}}</p>
            <p>{{__('pages/index.lang_is')}}: {{$app->getLocale()}}</p>
            <p><a href="{{url('lang_' . $app->getLocale(), 'form')}}">Go to form</a></p>

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
@stop