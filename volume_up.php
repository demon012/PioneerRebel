<?php
    require 'pioneer.lib.php';
    $address = gethostbyname($_GET['device']);
    pvRebel_setVolInc($address);
?>
