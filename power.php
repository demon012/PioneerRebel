<?php
    require 'pioneer.lib.php';
    $device = $_GET['device'];
    $power = strtolower($_GET['power']);
    $device_ip = gethostbyname($device);

    print $device_ip . "<br />";
    print $power . "<br />";

    if($power == "true")
    {
        echo("Power on");
        pvRebel_setPower($device_ip,true);
    }
    else if($power == "false")
    {
        echo("Power off");
        pvRebel_setPower($device_ip,false);
    }
?>
