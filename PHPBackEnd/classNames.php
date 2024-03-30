<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");
require "dbConnection.php";

# this file will return a list of all of the classes in the database

$conn = database();

$sql = "SELECT className FROM class_catalog";
$result_classes = $conn->query($sql);
$classes = array();

# Check if there are any results
if ($result_classes->num_rows > 0) {
    # Loop through each row and add the name to the array
    while($row = $result_classes->fetch_assoc()) {
        $classes[] = $row["className"];
    }
} 
header('Content-Type: application/json');
echo json_encode($classes);
# header("ClassNames: {$classes}");
# close connection to database
$conn->close();
