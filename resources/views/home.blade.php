@extends('layouts.main.main')

@section('title', __('system.home'))
@section('description', '')
@section('custom_css')
    <link rel="stylesheet" href="{{ URL::asset('css/auth.css', env('HTTPS')) }}" type="text/css" media="all"/>
@stop


@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">
                        {{__('system.youareloggedin')}}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
