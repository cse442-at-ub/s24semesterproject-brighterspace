<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require "dbConnection.php";


$conn = database();

$sql = "SELECT name FROM student_names";
$result_names = $conn->query($sql);
$names = array();

# Check if there are any results
if ($result_names->num_rows > 0) {
    # Loop through each row and add the name to the array
    while($row = $result_names->fetch_assoc()) {
        $names[] = $row["name"];
    }
}

header('Content-Type: application/json');
echo json_encode($names);
# header("StudentNames: {$names}");
# close connection to database
$conn->close();
?>