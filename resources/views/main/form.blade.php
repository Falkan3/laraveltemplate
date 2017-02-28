@extends('layouts.main.main')

@section('title', 'index')
@section('description', '')

@section('content')
    <div class="wrapper full-height">
        <div class="page big-form">
            <div class="main-logo header">
                <a href="https://finansowyplaner.pl/"><img src="{{asset('images/content/logo.png')}}" alt="logo"/></a>
            </div>
            <div class="container">
                <h1 class="text-center margin-bottom">Formularz kontaktowy</h1>

                {!! Form::open(['url' => 'api/submitLead', 'method' => 'post', 'class' =>'contact-form']) !!}

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

                <div style="margin-top: 20px;" class="agreements">
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

                <div class="row submit-row">
                    <div class="col-xs-12 col-sm-12 col-md-12 no-padding">
                        <input type="submit" value="Złóż wniosek"/>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 no-padding">
                        <img src="{{asset('images/ajax-loader.gif')}}" alt="loading..." class="loading_ajax hidden"/>
                        <div class="status"></div>
                    </div>
                </div>
                {!! Form::close() !!}
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 form-thank-you"></div>
                </div>
            </div>
        </div>
    </div>
@stop