<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    @yield('custom_meta')

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>
    <meta name="description" content="@yield('description')">

    {{Html::favicon('favicon.ico')}}

    <!-- Styles -->
    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap/bootstrap.min.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/bootstrap/bootstrap-theme.min.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" type="text/css" href="{{ URL::asset('fonts/fontawesome/fontawesome-4.3.0.min.css', env('HTTPS')) }}" type="text/css"
          media="all"/>

    <link rel="stylesheet" href="{{ URL::asset('css/framework.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/layout.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/style.css', env('HTTPS')) }}" type="text/css" media="all"/>
    @yield('custom_css')

    <!-- Scripts -->
    <script src="{{ URL::asset('js/jquery/jquery-3.1.1.min.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/bootstrap/bootstrap.min.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/jquery/jquery.easing.min.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/jquery/jquery-inputmask.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/jquery/jquery.counterup.min.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/jquery/jquery.waypoints.min.js', env('HTTPS')) }}"></script>

    <script>
        window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>

@include('layouts.main.includes.header')

@yield('content')

@include('layouts.main.includes.footer')

<a id="backtotop" href="#"><i class="fa fa-chevron-up"></i></a>

<!-- Scripts -->
<script src="{{ URL::asset('js/jquery/jquery.mobilemenu.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/jquery/jquery.lazyload.min.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/mainscript.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/form_js.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/sendform.js', env('HTTPS')) }}"></script>
@yield('custom_js')

</body>
</html>
