@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')
@section('custom_css')
    {{ Html::style('css/xxx.css') }}
@stop
@section('custom_js')
    {{ Html::script('js/xxx.js') }}
@stop

@section('content')
    <div class="wrapper full-height">
        <div class="container">
            <p>Congrats!</p>
        </div>
    </div>
@stop