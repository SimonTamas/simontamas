<!-- Modernizr -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>

<!-- JavaScript -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
<script type="text/javascript" src="{{URL::asset('js/script.js')}}"></script>


<!-- StikyMenu -->
<script type="text/javascript" src="{{URL::asset('js/stickUp.min.js')}}"></script>
<script type="text/javascript">
    jQuery(function($) {
        $(document).ready( function() {
            $('.navbar-default').stickUp();

        });
    });
</script>


<!-- Smoothscroll -->
<script type="text/javascript" src="{{URL::asset('js/jquery.corner.js')}}"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
<script>
    new WOW().init();
</script>
<script type="text/javascript" scr="https://cdnjs.cloudflare.com/ajax/libs/classie/1.0.1/classie.min.js"></script>
<script type="text/javascript" src="{{URL::asset('js/uiMorphingButton_inflow.js')}}"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>


<script>
    var loadDeferredStyles = function() {
        var addStylesNode = document.getElementById("deferred-styles");
        var replacement = document.createElement("div");
        replacement.innerHTML = addStylesNode.textContent;
        document.body.appendChild(replacement)
        addStylesNode.parentElement.removeChild(addStylesNode);
    };
    var raf = requestAnimationFrame || mozRequestAnimationFrame ||
            webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
    else window.addEventListener('load', loadDeferredStyles);
</script>