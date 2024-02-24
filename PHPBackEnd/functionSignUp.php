<?php

require "dbConnection.php";

if (isset($_POST["submit"])){

    $name = $_POST["name"];
    $username = $_POST["username"];
    $uemail = $_POST["uemail"];
    $pass = $_POST["pass"];

    $conn = database();
    
    $hashed = password_hash($pass, PASSWORD_DEFAULT);

    $sql = "INSERT INTO AccountInfo (Name, Username, Email, Password, Admin) VALUES ('{$name}', '{$username}', '{$uemail}','$hashed', '0')";

    if ($conn->query($sql)){
        echo "It added";
    }
    else {
        echo "Error has Occurred";
    }
    
    header("location: /login.php");

}
else{
    echo "Something Went Wrong";
}

