<!-- NavBar-->
<nav class="navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{ url('/') }}">Simon Tamás</a>
        </div>

        <div class="collapse navbar-collapse navbar-right navbar-ex1-collapse">
            <ul class="nav navbar-nav">
               <li class="menuItem"><a href="/">Home<b></b></a></li>
                <li class="menuItem"><a href="{{ url('/portfolio') }}">Portfolio</a></li>
                <li class="menuItem"><a href="{{ url('/resume') }}">Résumé<b></b></a></li>
            </ul>
        </div>

    </div>
</nav>