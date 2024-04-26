<?php
require "dbConnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('SameSite=None');

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    attempt();
}


function getInfo() :array
{
    $some = file_get_contents('php://input');
    $body = json_decode($some);
    $class = '';
    $assignment = '';
    $name = '';
    $points = '';
    $max = '';
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
        elseif ($key =='max'){
            $max = $value;
        }
        else {
            $points = $value;
        }
    }
    return [$class, $assignment, $name, $points, $max];
}

function attempt()
{
    $info = getInfo();
    $class = $info[0];
    $assignment = $info[1];
    $name = $info[2];
    $points = $info[3];
    $max = $info[4];
    addAssignment($class, $assignment, $name, $points, $max);
}


function addAssignment($class, $assignment, $name, $points, $max)
{

    $array = array(
        "assignment_name" => $assignment,
        "score" => $points . "/" . $max,
    );
    $atext = $assignment . ":" . $points . "/" . $max;

    $isinDB = inDB($name, $class);
    if($isinDB !== ""){
        $isinDB =  $isinDB . "&". $atext;
        echo($isinDB);
        $conn = database();
        $sql = "UPDATE `$class` SET Assignments='{$isinDB}' WHERE Student='{$name}'";
        if ($conn->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    } else{
        addStudent($class, $name, $atext);
    }

}

function inDB($name, $class) : string
{
    $conn = database();
    $sql = "SELECT * FROM `$class`;";
    $results = mysqli_query($conn, $sql);
    if (mysqli_num_rows($results) > 0) {
        while ($row = mysqli_fetch_row($results)) {
            if ($row[0] == $name) {
                return $row[1];
            }
        }
    }
    return "";
}

function addStudent($class, $name, $atext): bool
{
    $conn = database();
    $sql = "INSERT INTO `$class`(`Student`, `Assignments`) VALUES ('{$name}','{$atext}')";
    if ($conn->query($sql)) {
        return true;
    } else {
        return false;
    }
}
