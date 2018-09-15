@extends('layouts.master')

@section('title') - Blog @endsection

@section('content')
    @include('partials.preloader')
    @include('partials.nav')
    @include('partials.blog')
    @include('partials.footer')
@endsection