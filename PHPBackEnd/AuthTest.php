<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

session_start();

if (isset($_SESSION['status'])) {
    $role = $_SESSION['status'];
    $userData = array("role" => $role);
    echo json_encode($userData);
} else {
    $userData = array("role" => "guest");
    echo json_encode($userData);
}
?>