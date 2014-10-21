<?php
    require 'pioneer.lib.php';
    $mute = strtolower($_GET['mute']);
    $address = gethostbyname($_GET['device']);
    echo($mute);
    if($mute == "true")
    {
        pvRebel_setMuting($address,true);
    }
    else if($mute == "false")
    {
        pvRebel_setMuting($address,false);
    }
?>
