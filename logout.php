<?php
session_start();

//Clearing the user's cookie
setcookie('username','testuser',-10);

//([VARIABLE FOR USERNAME],[THE USERNAME], [TIME])

//Kills all the variables within the session and cleans up the cookies
$_SESSION=array();

#Destorys the session
session_destroy();
//Testing
//Redirects to the login page
header('location:FunctionLogin.php');

