<?php
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
} else {
    echo "0 results found";
}
header("StudentNames: {$names}");
# close connection to database
$conn->close();
