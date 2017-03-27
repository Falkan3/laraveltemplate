<!DOCTYPE html>
<html lang="{{$app->getLocale()}}">
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

    @yield('custom_css')
    <link rel="stylesheet" href="{{ URL::asset('css/framework.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/layout.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('css/style.css', env('HTTPS')) }}" type="text/css" media="all"/>

    <!-- Scripts -->
    <script src="{{ URL::asset('js/jquery/jquery-3.1.1.min.js', env('HTTPS')) }}"></script>
    <script src="{{ URL::asset('js/bootstrap/bootstrap.min.js', env('HTTPS')) }}"></script>

    <script>
        window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>
<div id="hideAll">&nbsp;</div>
<script type="text/javascript">
    document.getElementById("hideAll").style.display = "block";
</script>

@include('layouts.main.includes.header')

@yield('content')

@include('layouts.main.includes.footer')

<a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a>

<!-- Scripts -->
<script src="{{ URL::asset('js/jquery/jquery.easing.min.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/jquery/jquery-inputmask.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/jquery/jquery.counterup.min.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/jquery/jquery.waypoints.min.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/jquery/jquery.mobilemenu.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/jquery/jquery.lazyload.min.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/jquery/jquery.nicescroll.min.js', env('HTTPS')) }}"></script>
<script src="{{ URL::asset('js/mainscript.js', env('HTTPS')) }}"></script>
@yield('custom_js')

<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
<script>
    window.addEventListener("load", function(){
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "#252e39"
                },
                "button": {
                    "background": "transparent",
                    "text": "#14a7d0",
                    "border": "#14a7d0"
                }
            },
            "position": "bottom-left"
        })});
</script>

</body>
</html>
