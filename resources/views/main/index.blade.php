@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')
@section('custom_css')
    <!-- libs -->
    <link rel="stylesheet" href="{{ URL::asset('css/libs/animate_custom.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/libs/slick.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/libs/slick-theme.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
@stop
@section('custom_js')
    <!-- libs -->
    <script src="{{ URL::asset('js/libs/wow.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/libs/slick.min.js', env('HTTPS')) }}"></script>
    <!-- plugins -->
    <script src="{{ URL::asset('js/plugins/flippers.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/iterator.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/square.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/plugins/accordion.js', env('HTTPS')) }}"></script>
    <!-- main -->
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
        </div>

        <div class="container custom-scroll-box"
             style="height: 1000px; max-height: 300px; padding: 25px;">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper consectetur fringilla. Morbi
                egestas enim in egestas porttitor. Ut convallis mollis ipsum, ut scelerisque mi tristique et. Fusce nunc
                elit, laoreet sed odio vitae, tincidunt malesuada lacus. Mauris leo neque, feugiat at dui id, aliquam
                molestie arcu. Nulla vitae sem viverra, fermentum urna vel, pellentesque sapien. Maecenas at fringilla
                elit. Suspendisse potenti. Fusce quis maximus justo.</p>

            <p>Nam lorem turpis, aliquet ac felis eu, ornare volutpat diam. Aliquam leo mi, aliquam quis risus et,
                consequat sollicitudin dui. Nam maximus, nisl vitae efficitur pharetra, urna urna posuere dui, mollis
                eleifend mauris magna vitae sapien. Donec lectus elit, gravida sit amet massa non, finibus tempus orci.
                Integer mattis vel nulla et pellentesque. Sed imperdiet condimentum nibh, id volutpat mi mattis lacinia.
                Donec at ex urna. Pellentesque dictum mauris ut orci rutrum venenatis. Sed nisl urna, finibus non diam
                sed, aliquam sodales lacus. Sed blandit augue at mi rutrum, nec aliquet lacus fermentum. Sed ipsum arcu,
                rhoncus et cursus non, bibendum sed libero. Aenean eu risus non massa ullamcorper ultricies id aliquam
                leo. Etiam fermentum odio est, vel sodales tortor hendrerit a.</p>

            <p>Etiam interdum nisl diam, sed tristique justo mattis non. Integer sit amet ante rutrum, auctor risus
                vel, eleifend odio. Fusce mattis massa interdum ante tristique faucibus. Suspendisse potenti. Phasellus
                ut justo ac justo hendrerit suscipit at at nunc. Cras eleifend orci ut mauris sodales, vitae iaculis
                nibh consequat. Donec congue ex sit amet augue placerat, commodo malesuada sapien porta. Nulla facilisi.
                Vestibulum in ante vitae dolor dapibus tempor. Phasellus dolor metus, placerat ac maximus eu, feugiat
                sit amet mi. Fusce lacinia viverra lectus, non sodales lorem ultricies ut. Praesent eget elit consequat,
                tempor magna ac, sollicitudin ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam
                in finibus purus. Donec justo lacus, elementum ac consectetur id, condimentum sit amet nibh.</p>

            <p>Donec eget tempus ligula. Maecenas tellus urna, condimentum ac est non, sollicitudin rhoncus massa. Cras
                dictum metus eget enim egestas congue. Vivamus dictum fringilla blandit. Donec scelerisque augue a risus
                ornare accumsan. Praesent tristique odio justo, sed faucibus urna tempus sed. Proin sed commodo
                metus.</p>

            <p> Praesent feugiat eu quam ut dictum. Proin leo lacus, maximus a velit quis, cursus viverra orci. In sit
                amet luctus lorem. Phasellus efficitur consectetur augue, id eleifend augue fringilla sit amet. Fusce
                consectetur risus non lacus tempor fermentum. Cras venenatis dui a justo scelerisque pharetra. Nulla
                vulputate nisi ac ullamcorper malesuada.</p>
        </div>
    </section>
@stop