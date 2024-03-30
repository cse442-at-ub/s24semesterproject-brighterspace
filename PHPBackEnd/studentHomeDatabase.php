<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");
require "dbConnection.php";
//session_start();
//$_SESSION["student_id"] = "taranchana";
//$_SESSION["name"] = "Taran";

$conn = database();

// get student information from the database
$student_id = $_SESSION['student_id']; // this would be the username the student logs in with?
$sql = "SELECT * FROM student_names WHERE id = '$student_id'";
$result_names = $conn->query($sql);

if ($result_names->num_rows > 0) {
    // output the data from each row
    while($row = $result_names->fetch_assoc()) {
        $student_name = $row["name"];
    }
    # header("StudentName: {$student_name}");
} else {
    echo "0 results found";
}

// get the classes for the student, have one table for name, another for classes
$sql_classes = "SELECT * FROM student_classes WHERE id = $student_id";
$result_classes = $conn->query($sql_classes);

$classes = array();
if ($result_classes->num_rows > 0) {
    // output data from each row
    while($row = $result_classes->fetch_assoc()) {
        $classes[] = $row["class_name"];  
    }
    # header("ClassList: {$classes}");
    exit();
}

if ($_GET['data'] === 'student_name') {
    echo json_encode($student_name);
} elseif ($_GET['data'] === 'class_list') {
    echo json_encode($classes);
}

// close connection to database
$conn->close();
?>