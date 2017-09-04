@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')
@section('custom_css')
    <!-- libs -->
    <link rel="stylesheet" href="{{ URL::asset('libs/animate/css/animate_custom.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('libs/slick/css/slick.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('libs/slick/css/slick-theme.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
@stop
@section('custom_js')
    <!-- libs -->
    <script type="text/javascript" src="{{ URL::asset('libs/wow/js/wow.js', env('HTTPS')) }}"></script>
    <script type="text/javascript" src="{{ URL::asset('libs/slick/js/slick.min.js', env('HTTPS')) }}"></script>
    <script type="text/javascript" src="{{ URL::asset('libs/jquery_extensions/js/jquery.ba-throttle-debounce.min.js', env('HTTPS')) }}"></script>
    <script type="text/javascript" src="{{ URL::asset('libs/table_sticky_header/js/jquery.stickyheader.js', env('HTTPS')) }}"></script>
    <script type="text/javascript" src="{{ URL::asset('libs/doughnut_chart/js/doughnut-chart.js', env('HTTPS')) }}"></script>
    <!-- plugins -->
    <script src="{{ URL::asset('plugins/js/flippers.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('plugins/js/iterator.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('plugins/js/square.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('plugins/js/accordion.js', env('HTTPS')) }}"></script>
    <!-- main -->
    <script src="{{ URL::asset('js/utility.js', env('HTTPS')) }}"></script>
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
                <div class="header-section-container">
                    <div class="half-screen first">
                        <div class="slideInRightResize animated wow aligner all" data-wow-duration="1.5s">
                            <p class="uppercase">index</p>
                        </div>
                    </div>

                    <div class="half-screen second">
                        <div class="slideInUp animated wow aligner all" data-wow-duration="1.5s" data-wow-delay="1.5s">
                            <p>description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="page">
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

        <div class="container custom-scroll-box btmspace-30"
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

        <div class="container btmspace-30">
            <div class="row">
                <div class="col-xs-12 col-md-6 chart-half-screen"> <?php /* add class .full-screen to this div to view a single chart. Also remove col-md-6 */ ?>
                    <h4 class="title btmspace-30">
                        <span>Click score</span>
                    </h4>

                    <div class="cs-chart-container">
                        <div class="chart-legend">
                            <p><i class="fa fa-info rightspace-10" aria-hidden="true"></i> Legenda:</p>
                            <div class="ct"></div>
                        </div>

                        <div id="clickscore_doughnut_chart" class="doughnut-chart small"
                             data-ok="500"
                             data-fraud="200"
                             data-undefined="50">
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-md-6 chart-half-screen">
                    <h4 class="title btmspace-30">
                        <span>Urządzenia</span>
                    </h4>

                    <div class="cs-chart-container">
                        <div class="chart-legend">
                            <p><i class="fa fa-info rightspace-10" aria-hidden="true"></i> Legenda:</p>
                            <div class="ct"></div>
                        </div>

                        <div id="device_doughnut_chart" class="doughnut-chart small"
                             data-pc="600"
                             data-mobile="120"
                             data-undefined="30">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container btmspace-30">
            <div class="row">
                <div class="col-xs-12">
                    <div class="horizontal-bar-wrap">
                        <p class="title">
                            <span>Podejrzane IP</span>
                        </p>

                        <div class="barGraph">
                            <div class="graph">
                                <div class="graph-barBack">
                                    <div class="graph-bar" data-value="1557" data-percentage="25">
                                        <div class="graph-legend">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="horizontal-bar-wrap" data-legend="false">
                        <p class="title inline-block">
                            <span>Podejrzane IP zablokowane w Adwords</span>
                        </p>

                        <div class="barGraph">
                            <div class="graph">
                                <div class="graph-barBack">
                                    <div class="graph-bar" data-value="83" data-percentage="15">
                                        <div class="graph-legend">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="horizontal-bar-wrap" data-legend="false">
                        <p class="title inline-block">
                            <span>IP OK</span>
                        </p>

                        <div class="barGraph">
                            <div class="graph">
                                <div class="graph-barBack">
                                    <div class="graph-bar green" data-value="120" data-percentage="60">
                                        <div class="graph-legend">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="horizontal-bar-wrap multiple" data-legend="true">
                        <p class="title inline-block">
                            <span>test</span>
                        </p>

                        <div class="barGraph">
                            <div class="graph">
                                <div class="graph-barBack">
                                    <div class="graph-bar green thicc" data-value="300" data-percentage="30" data-background-color="#5cf562" data-legend-text="wysoki">
                                        <div class="graph-legend">abc</div>
                                    </div>

                                    <div class="graph-bar green thicc" data-value="150" data-percentage="15" data-background-color="#fff500" data-legend-text="średni">
                                        <div class="graph-legend">def</div>
                                    </div>

                                    <div class="graph-bar green thicc" data-value="550" data-percentage="55" data-background-color="#ff310b" data-legend-text="niski">
                                        <div class="graph-legend">ghi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="table-responsive">
                        <table class="table table-hover bg-white table-clickable sticky-table">
                            <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th>GID</th>
                                <th>Data</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td>150179102735563</td>
                                <td>2017-08-03 22:10:21</td>
                            </tr>
                            <tr>
                                <td class="text-center">2</td>
                                <td>150179102735563</td>
                                <td>2017-08-03 22:10:21</td>
                            </tr>
                            <tr>
                                <td class="text-center">3</td>
                                <td>150179102735563</td>
                                <td>2017-08-03 22:10:21</td>
                            </tr>
                            <tr>
                                <td class="text-center">4</td>
                                <td>150179102735563</td>
                                <td>2017-08-03 22:10:21</td>
                            </tr>
                            <tr>
                                <td class="text-center">5</td>
                                <td>150179102735563</td>
                                <td>2017-08-03 22:10:21</td>
                            </tr>
                            <tr>
                                <td class="text-center">6</td>
                                <td>150179102735563</td>
                                <td>2017-08-03 22:10:21</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop