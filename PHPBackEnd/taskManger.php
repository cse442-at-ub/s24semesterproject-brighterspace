<?php
require "dbConnection.php";
session_start();
$conn = database();

if ($_SERVER['REQUEST_METHOD'] == "POST") {


    $some = file_get_contents('php://input');
    $body = json_decode($some);
    $name = '';
    $task = '';
    $username = $_SESSION['username'];
    foreach ($body as $key => $value) {
        $name = $key;
        $task = $value;
    }
    $info = read_data_base();

    if ($name == 'Ticket'){
        if ($info[0]){

            $all_task =  json_decode($info[1]['Task']);
            $current_task = $task;
            $all_task[] = $current_task;
            insert_into_database($username, $all_task, 1);
        }
        else {
            $starter_task = [$task];
            insert_into_database($username, $starter_task, 0);


        }
    }
    else if ($name == 'Update'){

        format_response(read_data_base()[1]['Task']);
    }

    else if ($name == 'delete'){
        $all_task =  json_decode($info[1]['Task']);

        $current_task = $all_task[$task];
        unset($all_task[$task]);
        insert_into_database($username,$all_task,1);
    }

    else if ($name == 'addPriority'){

        $all_task =  json_decode($info[1]['Task']);
        $current_task = $all_task[$task];
        $all_task[$task] = $all_task[$task - 1];
        $all_task[$task - 1] = $current_task;
        insert_into_database($username, $all_task, 1);
    }
    else if ($name == 'subPriority'){

        $all_task =  json_decode($info[1]['Task']);
        $current_task = $all_task[$task];
        $all_task[$task] = $all_task[$task + 1];
        $all_task[$task + 1] = $current_task;
        insert_into_database($username, $all_task, 1);

    }


}

function format_response($data){

    echo $data;




}

function insert_into_database($name, $starter_task, $option): bool
{
    global $conn;
    $json_array = json_encode($starter_task);

    if ($option == 0){
        $state = $conn ->prepare("INSERT INTO taskmanger (Name, Task) VALUES (?, ?)");
        $state ->bind_param('ss', $name, $json_array);
    }
    else {

        $state = $conn -> prepare("UPDATE taskmanger SET Task=? WHERE Name=?");
        $state ->bind_param('ss', $json_array, $name);



    }


    if ($state ->execute()){
        $return_value = true;
    }
    else{
        $return_value = false;
    }

    format_response($json_array);
    return $return_value;


}

function read_data_base(): array
{
    global $conn;
    $name = $_SESSION['username'];
    $state  = $conn -> prepare("SELECT * FROM taskmanger WHERE Name=?");
    $state ->bind_param('s', $name);

    $state ->execute();
    $results = $state ->get_result();
    while ($row = $results -> fetch_assoc()){
        return [true, $row];

    }
    return [false];

}