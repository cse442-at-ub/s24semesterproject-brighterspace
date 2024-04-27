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
    $name = '';
    $points = '';
    foreach ($body as $key => $value) {
        if ($key == 'class') {
            $class = $value;
        } elseif ($key == 'assignment_name') {
            $name = $value;
        }
        else {
            $points = $value;
        }
    }
    return [$class, $name, $points];
}

function isAllowed()
{
    $info = getInfo();
    $class = $info[0];
    $name = $info[1];
    $points = $info[2];

    if(inDataBase($class)){
        echo("False, exists");
    }
    else {
        updateDataBase($class, $name);
        setMaxPoints($class, $name, $points);
        echo($info[0] . $info[1] . $info[2]);
    }



}
function inDataBase($class) : bool
{
    $conn = database($class);
    $sql = "SELECT * FROM '$class'";
    $results = mysqli_query($conn, $sql);

    if (mysqli_num_fields($results) > 0) {

        while ($col = mysqli_fetch_fields($results)) {
            if ($col[0] == $class) {
                return true;
            }
        }
    }
    return false;
}

function updateDataBase($class, $name): bool
{

    $conn = database();
    $sql = "ALTER TABLE '$class' ADD '$name' INT";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function setMaxPoints($class, $name, $points): bool
{
    $conn = database();
    $sql = "UPDATE '$class' SET '$name'='$points' WHERE Student=max_points";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

