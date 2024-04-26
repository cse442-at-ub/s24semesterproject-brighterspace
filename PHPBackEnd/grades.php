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

    $results = read_data_base($student_name);
    if ($results[0]){
        $data = array();
        $data['cse_312'] = $results[1]['Assignments'];

        echo json_encode($data);
    }
}


function read_data_base($name): array
{


    $conn = database();
    $state  = $conn -> prepare("SELECT * FROM cse_312 WHERE Student=?");
    $state ->bind_param('s', $name);

    $state ->execute();
    $results = $state ->get_result();
    while ($row = $results -> fetch_assoc()){
        return [true, $row];
    }
    return [false];

}