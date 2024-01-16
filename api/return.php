<?php

function erreur($errCode){

    $url = "../?err=" . $errCode;

    header('Location: '. $url );

}

function valide($trueCode){

    $url = "../?true=" . $trueCode;

    header('Location: '. $url );

}