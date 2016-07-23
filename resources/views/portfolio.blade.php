@extends('layouts.master')

@section('title') - Portfolio @endsection

@section('content')
    @include('partials.preloader')
    @include('partials.nav')
    @include('partials.works-fluid')
    @include('partials.footer')
@endsection