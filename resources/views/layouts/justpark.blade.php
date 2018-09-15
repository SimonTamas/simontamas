<!DOCTYPE html>
<html>
<head>
    <title>Simon Tamas @yield('title')</title>
    <head>
        @include('includes.head')
        @include('includes.head.script')
        <!-- Google Maps -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDegiUZTNMnewGB_6AZn2pLjZrqgd_tzaY&libraries=places"></script>

        <script type="text/javascript" src="{{URL::asset('js/justpark.js')}}"></script>
        <link rel="stylesheet" type="text/css" href="{{URL::asset('css/justpark.css')}}"/>
    </head>
</head>
    <body id="home">
        <div id="content">
            @yield('content')
        </div>
    </body>
</html>