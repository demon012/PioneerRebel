<?php
if ($_GET['xbmc'] == 'upstairs')
{
    $XBMC = 'xbmc.internal/jsonrpc';
}
else if ($_GET['xbmc'] == 'downstairs')
{
    $XBMC = 'xbian.internal:8080/jsonrpc';
}

if ($_GET['command'] == 'play')
{
    $JSON = '{"jsonrpc": "2.0", "method": "Player.PlayPause", "params": { "playerid": 1 }, "id": 1}';
}
else if ($_GET['command'] == 'pause')
{
    $JSON = '{"jsonrpc": "2.0", "method": "Player.PlayPause", "params": { "playerid": 1 }, "id": 1}';
}

$COMMAND = "http://" . $XBMC . "?request=" . $JSON;

print($COMMAND);
http_get($COMMAND);
?>
