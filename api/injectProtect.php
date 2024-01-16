<?php

require_once "request.php";

function protect (sendRequest $sendObject){

    $sendObject->name = "*" . $sendObject->name . "*";
    $sendObject->email = "*" . $sendObject->email . "*";
    $sendObject->content = "*" . $sendObject->content . "*";

    return $sendObject;

}