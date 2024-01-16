<?php

require_once "request.php";
require "injectProtect.php";
require_once "return.php";

if (!empty($_GET['name']) && !empty($_GET['email']) && !empty($_GET['content'])){

        // Verified!
        $sendObject = null;
        $sendObject = new sendRequest();

        $sendObject->name = $_GET['name'];
        $sendObject->email = $_GET['email'];
        $sendObject->content = $_GET['content'];

        $sendObjectProtect = protect($sendObject);
        insert($sendObjectProtect);

} else {
    erreur("T901");
}

function insert(sendRequest $requestFinal){

    $name = $requestFinal->name;
    $email = $requestFinal->email;
    $content = $requestFinal->content;


    require "db.php";

    $q = $db->prepare("INSERT INTO `contact` (`name`, `email`, `content`) VALUES (:name, :email, :content)");

    $q->execute([
        'name' => $name,
        'email' => $email,
        'content' => $content
    ]);

    valide("T101");


}
