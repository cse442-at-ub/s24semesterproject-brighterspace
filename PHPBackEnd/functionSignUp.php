<?php 
if (isset($_POST["submit"])){

    $name = $_POST["name"];
    $username = $_POST["username"];
    $uemail = $_POST["uemail"];
    $pass = $_POST["pass"];



    header("location: /login.php");

}
else{
    echo "Something Went Wrong";
}

