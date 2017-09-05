@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')

@section('custom_css')
    <!-- libs -->
    <link rel="stylesheet" href="{{ URL::asset('libs/fancy_select/css/fancySelect.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('libs/roundslider/css/roundslider.min.css', env('HTTPS')) }}" type="text/css"
          media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('libs/ion_range_slider/css/ion.rangeSlider.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <link rel="stylesheet" href="{{ URL::asset('libs/ion_range_slider/css/ion.rangeSlider.skinFlat.css', env('HTTPS')) }}" type="text/css" media="all"/>
    <!-- main -->
    <link rel="stylesheet" href="{{ URL::asset('css/form_css.css', env('HTTPS')) }}" type="text/css" media="all"/>
@stop
@section('custom_js')
    <!-- libs -->
    <script type="text/javascript" src="{{ URL::asset('libs/fancy_select/js/fancySelect.js', env('HTTPS')) }}"></script>
    <script type="text/javascript" src="{{ URL::asset('libs/roundslider/js/roundslider.min.js', env('HTTPS')) }}"></script>
    <script type="text/javascript" src="{{ URL::asset('libs/ion_range_slider/js/ion.rangeSlider.min.js', env('HTTPS')) }}"></script>
    <!-- plugins -->
    <script type="text/javascript" src="{{ URL::asset('plugins/js/square.js', env('HTTPS')) }}"></script>
    <!-- main -->
    <script type="text/javascript" src="{{ URL::asset('js/form_js.js', env('HTTPS')) }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/sendform.js', env('HTTPS')) }}"></script>
    <script type="text/javascript" src="{{ URL::asset('js/pages/form_script.js', env('HTTPS')) }}"></script>
@stop

@section('content')
    <section class="page big-form">
        <div class="container btmspace-30">
            <h1 class="text-center">Formularz kontaktowy</h1>

            {!! Form::open(['url' => url('api/submitLead', null, env('HTTPS')), 'method' => 'post', 'class' =>'contact-form']) !!}

            <div class="row fields">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    {{ Form::label('txt_name', 'Imię', ['class' => 'control-label']) }}
                    {{Form::text('txt_name', null, ['id' => 'txt_name', 'class' => 'name'])}}
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                    {{ Form::label('txt_surname', 'Nazwisko', ['class' => 'control-label']) }}
                    {{Form::text('txt_surname', null, ['id' => 'txt_surname', 'class' => 'name'])}}
                </div>
            </div>

            <div class="row fields">
                <div class="col-xs-12 col-sm-6 col-md-6">
                    {{ Form::label('txt_tel', 'Telefon', ['class' => 'control-label']) }}
                    {{Form::text('txt_tel', null, ['id' => 'txt_tel', 'class' => 'telephone'])}}
                </div>

                <div class="col-xs-12 col-sm-6 col-md-6">
                    {{ Form::label('txt_email', 'E-mail', ['class' => 'control-label']) }}
                    {{Form::text('txt_email', null, ['id' => 'txt_email', 'class' => 'email'])}}
                </div>
            </div>

            <div class="row">
                <p class="header">Lorem ipsum</p>

                <div class="container-fluid boxes-container btmspace-30">
                    <div class="row">
                        {!! Form::hidden('test', "1,3", ['required', 'data-container' => 'true', 'data-index' => '0', 'data-multiselect' => 'true']) !!}
                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="tools" data-index="0" data-val="0"></button>
                            </div>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="sun" data-index="0" data-val="1"></button>
                            </div>
                            <p>Lorem Ipsum</p>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="rings" data-index="0" data-val="2"></button>
                            </div>
                            <p>Lorem Ipsum</p></div>
                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="taxes" data-index="0" data-val="3"></button>
                            </div>
                            <p>Lorem Ipsum</p>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="car" data-index="0" data-val="4"></button>
                            </div>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="house" data-index="0" data-val="5"></button>
                            </div>
                            <p>Lorem Ipsum</p>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="mortarboard" data-index="0" data-val="6"></button>
                            </div>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="monitor" data-index="0" data-val="7"></button>
                            </div>
                            <p>Lorem Ipsum</p>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="wallet" data-index="0" data-val="8"></button>
                            </div>
                            <p>Lorem Ipsum</p></div>
                        <div class="col-xs-12 col-sm-6 col-md-15">
                            <div class="box-image">
                                <button type="button" class="star" data-index="0" data-val="9"></button>
                            </div>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="agreements btmspace-30">
                <div>
                    {{Form::checkbox('agree1', '1', 1, ['id' => 'agree1'])}}
                    {!!Html::decode(Form::label('agree1', '<span></span>Zgoda na gromadzenie i przetwarzanie danych osobowych', ['class' => 'control-label']))!!}
                    <a href="#" class="read-more-click anchor">[Więcej]</a>
                    <div class="read-more">
                        <p>
                            Wyrażam zgodę na przetwarzanie przez Spark DigitUP Sp. z o.o.(Administrator Danych)
                            podanych przeze mnie danych osobowych w celu przedstawienia dopasowanej oferty produktów
                            finansowych przygotowanej przez partnerów Administratora Danych oraz w celach
                            marketingowych Administratora Danych, a także na opracowywanie podanych danych osobowych
                            wraz z innymi danymi osobowymi przetwarzanymi przez Administratora, w celu wskazanym
                            powyżej. Wyrażam zgodę na przekazywanie lub udostępnianie podanych danych osobowych
                            partnerom Administratora Danych, w szczególności instytucjom finansowym i
                            ubezpieczeniowym w celu przedstawienia przedstawienia dopasowanej oferty produktów
                            finansowych oraz w celach marketingowych. Informujemy, że Administratorem Danych
                            osobowych jest Spark DigitUP Sp. z o.o. z siedzibą w Krakowie (31-060), Plac Wolnica 13
                            lok. 10, NIP: 6762496391, REGON: 363042916, wpisaną do rejestru przedsiębiorców
                            Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla Krakowa-Śródmieście w
                            Krakowie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS
                            0000587711 o kapitale zakładowym w wysokości 5.000 złotych Przetwarzanie danych
                            osobowych będzie miało miejsce zgodnie z ustawą z 29 sierpnia 1997 r. o ochronie danych
                            osobowych. Posiada Pan/Pani prawo dostępu do treści swoich danych oraz ich poprawiania,
                            a także zwrócenia się z żądaniem usunięcia podanych danych osobowych. Zbierane dane będą
                            przetwarzane, w tym przekazywane partnerom administratora, wyłącznie w celach podanych
                            powyżej. Podanie przez Pana/Panią danych osobowych jest całkowicie dobrowolne.
                        </p>
                    </div>
                </div>

                <div>
                    {{Form::checkbox('agree2', '1', 1, ['id' => 'agree2'])}}
                    {!!Html::decode(Form::label('agree2', '<span></span>Zgoda na otrzymywanie informacji handlowych', ['class' => 'control-label']))!!}
                    <a href="#" class="read-more-click anchor">[Więcej]</a>
                    <div class="read-more">
                        <p>
                            Wyrażam zgodę na otrzymywanie od Spark DigitUP Sp. z o.o., informacji handlowej w
                            rozumieniu art. 10 ust. 2 Ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą
                            elektroniczną na podany adres poczty elektronicznej.
                        </p>
                    </div>
                </div>

                <div>
                    {{Form::checkbox('agree3', '1', 1, ['id' => 'agree3'])}}
                    {!!Html::decode(Form::label('agree3', '<span></span>Zgoda na używanie telekomunikacyjnych urządzeń końcowych', ['class' => 'control-label']))!!}
                    <a href="#" class="read-more-click anchor">[Więcej]</a>
                    <div class="read-more">
                        <p>
                            Wyrażam zgodę na używanie telekomunikacyjnych urządzeń końcowych i automatycznych
                            systemów wywołujących (w rozumieniu ustawy z dnia 16 lipca 2004 r. – Prawo
                            telekomunikacyjne (Dz. U. z 2014 r. poz. 243 z późn. zm.)); w stosunku do podanego
                            przeze mnie numeru telefonu, dla celów marketingu bezpośredniego przez DigitUp Sp. z
                            o.o. z siedzibą z siedzibą w Krakowie (31-060), Plac Wolnica 13 lok. 10, NIP:
                            6762496391, REGON: 363042916, wpisaną do rejestru przedsiębiorców Krajowego Rejestru
                            Sądowego prowadzonego przez Sąd Rejonowy dla Krakowa-Śródmieście w Krakowie, XIII
                            Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS 0000587711 o kapitale
                            zakładowym w wysokości 5.000 złotych.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row btmspace-30">
                <div class="col-xs-12">
                    <input id="f_n_amount" type="range" name="f_n_amount" min="1000"
                           max="100000"
                           step="1000" value="5000"
                           required
                    />
                </div>
            </div>

            <div class="row btmspace-30">
                <div class="col-xs-12" style="margin: 30px 0;">
                    <select class="basic">
                        <option value="">Select something…</option>
                        <option>Lorem</option>
                        <option>Ipsum</option>
                        <option>Dolor</option>
                        <option>Sit</option>
                        <option>Amet</option>
                    </select>
                </div>

                <div class="col-xs-12">
                    <div class="input-container custom-range">
                        <?php
                            if(!isset($filter_info)) {
                                $filter_info['rate']['min'] = 0;
                                $filter_info['rate']['max'] = 100;
                            }
                        ?>

                        {!! Form::hidden('rate_min_helper', isset($filter_info['rate']['val_min']) ? $filter_info['rate']['val_min'] : '') !!}
                        {!! Form::hidden('rate_max_helper', isset($filter_info['rate']['val_max']) ? $filter_info['rate']['val_max'] : '') !!}
                        {{Form::text('rate_full', null, ['id' => 'sel_rate_full', 'class' => 'custom-input cst-range-slider',
                            'title' => 'Stawka',
                            'min' => $filter_info['rate']['min'],
                            'max' => $filter_info['rate']['max'],
                            'data-val-min' => isset($filter_info['rate']['val_min']) ? $filter_info['rate']['val_min'] : $filter_info['rate']['min'],
                            'data-val-max' => isset($filter_info['rate']['val_max']) ? $filter_info['rate']['val_max'] : $filter_info['rate']['max'],
                        ])}}
                    </div>
                </div>
            </div>

            <div class="row btmspace-30">
                <div class="col-xs-12">
                    <div class="align-middle">
                        <p class="inline-block">Option</p>
                        <div class="switch-container red">
                            <label class="switch">
                                <input type="checkbox" checked="checked">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row submit-row">
                <div class="col-xs-12 col-sm-12 col-md-12 no-padding">
                    <input type="submit" value="Złóż wniosek" class="button sliding_bg"/>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 no-padding">
                    <div class="loader loading_ajax hidden"></div>
                    <div class="status"></div>
                </div>
            </div>
            {!! Form::close() !!}

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 form-thank-you"></div>
            </div>
        </div>
    </section>
@stop