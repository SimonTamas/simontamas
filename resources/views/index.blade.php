@extends('layouts.master')

@section('title') - Home @endsection

@section('content')
    @include('partials.preloader')
    @include('partials.header')
    @include('partials.nav')
    @include('partials.who')
    @include('partials.games')
    @include('partials.banner')
    @include('partials.footer')
@endsection