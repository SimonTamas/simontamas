<style>
    /* Preloader */
    #preloader {
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-color:#fff; /* change if the mask should have another color then white */
        z-index:99; /* makes sure it stays on top */
    }

    #status {
        width:200px;
        height:200px;
        position:absolute;
        left:50%; /* centers the loading animation horizontally one the screen */
        top:50%; /* centers the loading animation vertically one the screen */
        background-image:url(../img/status.gif); /* path to your loading animation */
        background-repeat:no-repeat;
        background-position:center;
        margin:-100px 0 0 -100px; /* is width and height divided by two */
    }
</style>

<noscript id="deferred-styles">
    <!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.0.0/bootstrap-social.min.css"/>

    <!-- Font awesome -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>

    <!-- Custom Google Web Font -->
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'/>
    <link href='http://fonts.googleapis.com/css?family=Arvo:400,700' rel='stylesheet' type='text/css'/>

    <!-- Custom CSS-->
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/general.css')}}"/>

    <!-- Owl-Carousel -->
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/custom.css')}}"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css"/>
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/style.css')}}"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

    <!-- Magnific Popup core CSS file -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"/>
</noscript>