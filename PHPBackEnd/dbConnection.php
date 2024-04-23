<?php

$servername = 'oceanus.cse.buffalo.edu:3306';
$username = 'jbrooks7';
$password = '50145853';
$dbname = 'cse442_2024_spring_team_e_db';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn ->connect_error){
    die("Connection Failed: ".$conn ->connect_error);
}

function database(){

    global $conn;
    return $conn;
}

