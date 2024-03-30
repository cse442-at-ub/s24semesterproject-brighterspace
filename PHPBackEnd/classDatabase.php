<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate input
    $input = json_decode(file_get_contents("php://input"));
    $student_id = $input->student_id;
    $class_id = $input->class_id;

    // Include database connection script
    require "dbConnection.php";

    // Connect to the database
    $conn = database();

    // Check which class slot is available for the student
    $sql_check_slot = "SELECT * FROM student_classes WHERE id = '$student_id'";
    $result_check_slot = $conn->query($sql_check_slot);

    $available_slot = null;

    if ($result_check_slot->num_rows > 0) {
        // Check each class slot
        while($row = $result_check_slot->fetch_assoc()) {
            if ($row['class1'] == NULL) {
                $available_slot = 'class1';
                break;
            } elseif ($row['class2'] == NULL) {
                $available_slot = 'class2';
                break;
            } elseif ($row['class3'] == NULL) {
                $available_slot = 'class3';
                break;
            } elseif ($row['class4'] == NULL) {
                $available_slot = 'class4';
                break;
            } elseif ($row['class5'] == NULL) {
                $available_slot = 'class5';
                break;
            } elseif ($row['class6'] == NULL) {
                $available_slot = 'class6';
                break;
            }
        }
    } else {
        // No previous enrollments found, set to null
        $available_slot = null;
    }

    if ($available_slot) {
        // Update the enrollment in the student_classes table
        $sql_update_enrollment = "UPDATE student_classes SET $available_slot = '$class_id' WHERE id = '$student_id'";

        if ($conn->query($sql_update_enrollment) === TRUE) {
            echo "Student enrolled successfully";
        } else {
            echo "Error: " . $sql_update_enrollment . "<br>" . $conn->error;
        }
    } else {
        echo "Error: Student already enrolled in maximum number of classes";
    }

    // Close database connection
    $conn->close();
}
?>
