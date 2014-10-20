function initialise()
{
        $(document).keydown(function(e){
            if( e.keyCode == 74 ) // j
            {
                volume_down("jim-vsx922");
            }
            else if( e.keyCode == 75) // k
            {
                volume_up("jim-vsx922");
            }
            else if( e.keyCode == 188) // ,
            {
                mute("jim-vsx922", true);
            }
            else if( e.keyCode == 190) // .
            {
                mute("jim-vsx922", false);
            }
            else if( e.keyCode == 220) // ]
            {
                power("jim-vsx922", true);
            }
            else if( e.keyCode == 219) // [
            {
                power("jim-vsx922", false);
            }
            else if( e.keyCode == 82) // r
            {
                source("jim-vsx922", "pi");
            }
            else if( e.keyCode == 84) // t
            {
                source("jim-vsx922", "tv");
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
function volume_down(device)
{
    $.ajax({
            url: 'volume_down.php?device=' + device,
                type: "GET",
                dataType: "html",
                success: function(data)
                {
                    //alert(data); // alert on success
                }
    });
}
function volume_up(device)
{
    $.ajax({
            url: 'volume_up.php?device=' + device,
                type: "GET",
                dataType: "html",
                success: function(data)
                {
                    //alert(data); // alert on success
                }
    });
}
function mute(device, bool)
{
    $.ajax({
            url: 'volume_mute.php?device=' + device + '&mute=' + bool,
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
function power(device, bool)
{
    $.ajax({
            url: 'power.php?device=' + device + '&power=' + bool,
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
function source(device, source)
{
    $.ajax({
            url: 'source.php?device=' + device + '&source=' + source,
                type: "GET",
                dataType: "html",
                success: function(data)
                {
                    // alert(data); // alert on success
                }
    });
}
