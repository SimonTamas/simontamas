<div id="ip"><?php echo $_SERVER["REMOTE_ADDR"] ?></div>
<div id="map"></div>
<div id="backdrop"></div>
<div id="search" class="shadow popup">
    <h3> Time to take a trip! </h3>
    <p> How about we go chill somewhere and have some fun. Tell me where you want to go and i'll get us there super quickly! </p>
    <form role="form">
        <div class="form-group">
            <div class="input-group">
                <input type="text" class="form-control" id="destination">
                <span class="input-group-addon">
                    <i class="fa fa-globe"></i>
                </span>
            </div>
        </div>
    </form>
</div>

<div id="arrived" class="shadow popup">
    <h3></h3>
    <p> Yay! We made it. But now we are here it's time to pick a spot to park our car!</p>
    <div id="park" class="btn btn-justpark btn-block"> Let's park! </div>
</div>

<div id="other" class="shadow popup">
    <h3>We can't park here...</h3>
    <p> It looks like this place is full. <b> No problem! </b> Let's try somewhere else ! </p>
    <div class="btn btn-justpark btn-block"> Try somewhere else! </div>
</div>