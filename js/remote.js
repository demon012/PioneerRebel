var locations = {
    'downstairs': 'jim-vsx922.internal',
    'upstairs': 'alan-vsx922.internal'
};

function initialise()
{
    var location = 'downstairs';
    $(document).keydown(function(e){
        if( e.keyCode == 74 ) // j
        {
            volume_down(locations[location]);
        }
        else if( e.keyCode == 75) // k
        {
            volume_up(locations[location]);
        }
        else if( e.keyCode == 188) // ,
        {
            mute(locations[location], true);
        }
        else if( e.keyCode == 190) // .
        {
            mute(locations[location], false);
        }
        else if( e.keyCode == 221) // ]
        {
            power(locations[location], true);
        }
        else if( e.keyCode == 219) // [
        {
            power(locations[location], false);
        }
        else if( e.keyCode == 82) // r
        {
            source(locations[location], "pi");
        }
        else if( e.keyCode == 84) // t
        {
            source(locations[location], "tv");
        }
        // else
        // {
        //     alert("received " + e.keyCode);
        // }
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
