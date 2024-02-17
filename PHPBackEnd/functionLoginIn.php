<?php

if (isset($_POST["LoginButton"])){

    $existingAccount = "testAcc";
    $existingPassword = "test123";
    
    $name = $_POST["username"];
    $password = $_POST["pass"];


    if (($existingAccount == $name) & ($existingPassword == $password)){
       
        header("location: /student_home.php");
    }

    else{
        echo "Account Doesn't exist";
    }
    
}

if (isset($_POST["signUp"])){

    header("location: /signup.php");



}