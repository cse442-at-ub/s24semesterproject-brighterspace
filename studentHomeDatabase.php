<?php
// parameters for the database connection
$servername = "oceanus.cse.buffalo.edu:3306";
$username = "jbrooks7";
$password = "50145853";
$dbname = "cse442_2024_spring_team_e_db";

$conn = new mysqli($servername,$username,$password,$dbname);

//check the connection worked
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}

// get student information from the database
$student_id = $_SESSION['student_id']; // this would be the username the student logs in with?
$sql = "SELECT * FROM student_names WHERE id = $student_id";
$result_names = $conn->query($sql);

if ($result_names->num_rows > 0) {
    // output the data from each row
    while($row = $result->fetch_assoc()) {
        $student_name = $row["name"];
    }
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
}
// close connection to database
$conn->close();
?>