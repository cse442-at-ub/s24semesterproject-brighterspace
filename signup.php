<?php 

if (isset($_POST["submit"])) {

    $name = $_POST["name"];
    $username = $_POST["Username"];
    $email = $_POST["email"];
    $password = $_POST["pass"];

    
    header("location: /signIn.php");
}
else{
   echo "failure";
}