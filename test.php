<?php
// parameters for the database connection
$servername = "oceanus.cse.buffalo.edu:3306";
$username = "jbrooks7";
$password = "50145853";
$dbname = "cse442_2024_spring_team_e_db";

$conn = new mysqli($servername,$username,$password,$dbname);

//check the connection worked
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}
