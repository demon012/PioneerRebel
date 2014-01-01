<?php
    require 'pioneer.lib.php';
    $device = gethostbyname($_GET['device']);
    $source = strtolower($_GET['source']);

    if($source == 'pi')
    {
        $source = "25";
    }
    else if($source == 'sat')
    {
        $source = "06";
    }
    echo("source " + $source);
    pvRebel_setSource($device, $source);
?>
