<?php
    require 'pioneer.lib.php';
    $mute = strtolower($_GET['mute']);
    echo($mute);
    if($mute == "true")
    {
        pvRebel_setMuting("192.168.0.145",true);
    }
    else if($mute == "false")
    {
        pvRebel_setMuting("192.168.0.145",false);
    }
?>
