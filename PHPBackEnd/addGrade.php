<?php
require "dbConnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('SameSite=None');

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    isAllowed();
}


function getInfo() :array
{
    $some = file_get_contents('php://input');
    $body = json_decode($some);
    $class = '';
    $assignment = '';
    $name = '';
    $points = '';
    foreach ($body as $key => $value) {
        if ($key == 'class') {
            $class = $value;
        }
        elseif ($key == 'assignment_name') {
            $assignment = $value;
        }
        elseif ($key == 'student'){
            $name = $value;
        }
        else {
            $points = $value;
        }
    }
    return [$class, $assignment, $name, $points];
}

function isAllowed()
{
    $info = getInfo();
    $class = $info[0];
    $assignment = $info[1];
    $name = $info[2];
    $points = $info[3];

    setMaxPoints($class, $assignment, $name, $points);
}


function setMaxPoints($class, $assignment, $name, $points): bool
{
    $conn = database();
    $sql = "UPDATE '$class' SET '$assignment'='$points' WHERE Student='$name'";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}
