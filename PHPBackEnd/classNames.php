<?php
require "PHPBackEnd\dbConnection.php";

# this file will return a list of all of the classes in the database

$conn = database();

$sql = "SELECT 'Class Name' FROM class_catalog";
$result_classes = $conn->query($sql);
$classes = array();

# Check if there are any results
if ($result_classes->num_rows > 0) {
    # Loop through each row and add the name to the array
    while($row = $result_classes->fetch_assoc()) {
        $classes[] = $row["Class Name"];
    }
} else {
    echo "0 results found";
}
header("ClassNames: {$classes}");
# close connection to database
$conn->close();
