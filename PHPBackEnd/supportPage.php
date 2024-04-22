<?php
require "dbConnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('SameSite=None');

session_start();
$conn = database();


if ($_SERVER['REQUEST_METHOD'] == "POST") {

    $username = $_SESSION['username'];
    $some = file_get_contents('php://input');
    $body = json_decode($some);
    $name = '';
    $task = '';
    foreach ($body as $key => $value) {
        $name = $key;
        $task = $value;
    }
    $info = read_data_base();

    if ($name == 'Update') {
        response();

    } else if ($name == 'Ticket') {
        if ($info[0]) {
            insert_into_database($username, $task, 1);
        } else {
            insert_into_database($username, $task, 0);
        }

        response();


    }
}

function response()
{
    $status = read_data_base();
    if ($status[0]){
        $info = $status[1];
        $submitted_ticket = $info['Ticket'];
        $response = $info["Response"];
        if ($response == '') {
            $response = 'We are working on it. We will update you once it resolved';
        }
        echo $submitted_ticket, " | Our Current Response: ", $response;
    }
    else {
        echo 'No ticket Submitted / Found';

    }


}


function insert_into_database($name, $starter_task, $option): bool
{
    global $conn;

    if ($option == 0) {
        $state = $conn->prepare("INSERT INTO supportTicket (Name, Ticket) VALUES (?, ?)");
        $state->bind_param('ss', $name, $starter_task);
    } else {

        $state = $conn->prepare("UPDATE supportTicket SET Ticket=? WHERE Name=?");
        $state->bind_param('ss', $starter_task, $name);
    }


    if ($state->execute()) {
        $return_value = true;
    } else {
        $return_value = false;
    }
    return $return_value;


}

function read_data_base(): array
{
    global $conn;
    $username = $_SESSION['username'];
    $state = $conn->prepare("SELECT * FROM supportTicket WHERE Name=?");
    $state->bind_param('s', $username);

    $state->execute();
    $results = $state->get_result();
    while ($row = $results->fetch_assoc()) {
        return [true, $row];

    }
    return [false];
}