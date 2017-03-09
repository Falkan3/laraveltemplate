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
        </div>
    </div>
@stop