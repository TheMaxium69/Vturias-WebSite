<?php

function head($page)
{

    //Page
    if ($page == 1) {
        $title = "Vturias";
    } else if ($page == 2) {
        $title = "Légal | Vturias";
    } else {
        $title = "404 | Vturias";
    }


    include "env.php";

    echo '<!doctype html> <html lang="fr"> <head>';
    require_once "composant/meta.phtml";
    echo '<title>' . $title . '</title>';
    echo '<link href="' . $env_urlLogo . '" rel="shortcut icon">';
    require_once "extension.php";
    echo '</head>';
}
