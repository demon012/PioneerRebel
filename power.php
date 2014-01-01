<?php
    require 'pioneer.lib.php';
    $power = strtolower($_GET['power']);
    $device = gethostbyname($_GET['device']);
    if($power == "true")
    {
        echo("Power on");
        pvRebel_setPower($device,true);
    }
    else if($power == "false")
    {
        echo("Power off");
        pvRebel_setPower($device,false);
    }
?>
