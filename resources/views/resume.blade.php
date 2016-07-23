@extends('layouts.master')

@section('title') - Résumé @endsection

@section('content')
    @include('partials.preloader')
    @include('partials.nav')
    @include('partials.resume')
    @include('partials.skills')
    @include('partials.footer')
@endsection