<?php
require "dbConnection.php";
session_start();
if ($_SERVER['REQUEST_METHOD'] == "POST") {


    $some = file_get_contents('php://input');
    $body = json_decode($some);
    $name = '';
    $task = '';
    $username = $_SESSION['username'];
    $student_name = $_SESSION['name'];
    foreach ($body as $key => $value) {
        $name = $key;
        $task = $value;
    }
    $data = array();
    $info = array();
    $info[] = 'cse_312';
    $info[] = 'eas_360';

    foreach ($info as $item) {
        $results = read_data_base($student_name, $item);
        if ($results[0]){
            $data[$item] = $results[1]['Assignments'];

        }

    }
    echo json_encode($data);


}


function read_data_base($name, $database): array
{


    $conn = database();
    $state  = $conn -> prepare("SELECT * FROM $database WHERE Student=?");

    $state ->bind_param('s', $name);

    $state ->execute();

    $results = $state ->get_result();
    while ($row = $results -> fetch_assoc()){
        return [true, $row];
    }
    return [false];

}