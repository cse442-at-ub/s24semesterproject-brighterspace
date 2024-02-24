<?php

if (isset($_POST["LoginButton"])) {

    require "dbConnection.php";


    $conn = database();
    $name = $_POST["username"];
    $password = $_POST["pass"];

    $rows = readDataBase($name);
    if ($rows != null){
        echo "working";

        if (password_verify($password,$rows[3]) === true){
            session_start();
            setcookie('user', json_encode([
                'username' => $rows[1],
                'password' => $rows[3]
            ]), time() + 3600 * 24 *30);

            $content = $rows[4];
            http_response_code(200);
            header("Content-Type: application/json");
            header("AdminStatus: {$content}");
            header("X-Content-Type-Options: nosnifff");
            header("location: \brighterspace\student_home.php");

        }
    }
}
