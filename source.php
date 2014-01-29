<?php
    require 'pioneer.lib.php';
    $device = gethostbyname($_GET['device']);
    $source = strtolower($_GET['source']);

    echo("device " + $_GET['device']);
    echo("source " + $_GET['source']);
    if($_GET['device'] == 'alan-vsx922.internal')
    {
        if($source == 'pi')
        {
            $source = "25";
        }
        else if($source == 'sat')
        {
            $source = "06";
        }
    }
    else if($_GET['device'] == 'jim-vsx922.internal')
    {
        if($source == 'pi')
        {
            $source = "25";
        }
        else if($source == 'sat')
        {
            $source = "06";
        }
    }

    echo("source " + $source);
    pvRebel_setSource($device, $source);
?>
