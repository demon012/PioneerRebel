function initialise()
{
        $(document).keydown(function(e){
            if( e.keyCode == 74 ) // j
            {
                volume_down("downstairs");
            }
            else if( e.keyCode == 75) // k
            {
                volume_up("downstairs");
            }
            else if( e.keyCode == 188) // ,
            {
                mute("downstairs", true);
            }
            else if( e.keyCode == 190) // .
            {
                mute("downstairs", false);
            }
            else if( e.keyCode == 221) // ]
            {
                power("downstairs", true);
            }
            else if( e.keyCode == 219) // [
            {
                power("downstairs", false);
            }
            else if( e.keyCode == 82) // r
            {
                source("downstairs", "pi");
            }
            else if( e.keyCode == 84) // t
            {
                source("downstairs", "tv");
            }
            else
            {
                alert("received " + e.keyCode);
            }
        });
}

/*
 * Volume
 */
function volume_down(location)
{
    $.ajax({
            url: 'volume_down.php?location=' + location,
                type: "GET",
                dataType: "html",
                success: function(data)
                {
                    //alert(data); // alert on success
                }
    });
}
function volume_up(location)
{
    $.ajax({
            url: 'volume_up.php?location=' + location,
                type: "GET",
                dataType: "html",
                success: function(data)
                {
                    //alert(data); // alert on success
                }
    });
}
function mute(location, bool)
{
    $.ajax({
            url: 'volume_mute.php?location=' + location + '&mute=' + bool,
                type: "GET",
                dataType: "html",
                success: function(data)
                {
                    // alert(data); // alert on success
                }
    });
}

/*
 * Power
 */
function power(location, bool)
{
    $.ajax({
            url: 'power.php?location=' + location + '&power=' + bool,
                type: "GET",
                dataType: "html",
                success: function(data)
                {
                    // alert(data); // alert on success
                }
    });
}
/*
 * Source
 */
function source(location, source)
{
    $.ajax({
            url: 'source.php?location=' + location + '&source=' + source,
                type: "GET",
                dataType: "html",
                success: function(data)
                {
                    // alert(data); // alert on success
                }
    });
}
