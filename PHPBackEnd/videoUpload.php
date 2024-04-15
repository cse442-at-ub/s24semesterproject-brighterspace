<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
require "dbConnection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the request is for uploading the video title
    if (isset($_POST['title'])) {
        // Store the video title in a session variable
        session_start();
        $_SESSION['title'] = $_POST['title'];
        echo json_encode(['success' => true, 'message' => 'Video title uploaded successfully']);
    }

    // Check if the request is for uploading the class name
    if (isset($_POST['class_name'])) {
        // Store the class name in a session variable
        session_start();
        $_SESSION['class_name'] = $_POST['class_name'];
        echo json_encode(['success' => true, 'message' => 'Class name uploaded successfully']);
    }

    // Check if the request is for uploading the video file
    if (isset($_FILES['video'])) {
        // Ensure the session variables for title and class name are set
        session_start();
        if (!isset($_SESSION['title']) || !isset($_SESSION['class_name'])) {
            echo json_encode(['success' => false, 'error' => 'Title and class name must be uploaded before the video']);
            exit;
        }

        // Move the uploaded video file to a desired location
        $targetDir = 'uploads/';
        $targetFile = $targetDir . basename($_FILES['video']['name']);

        if (move_uploaded_file($_FILES['video']['tmp_name'], $targetFile)) {
            // Save the video information in the database
            $conn = database();
            if ($conn->connect_error) {
                echo json_encode(['success' => false, 'error' => 'Database connection failed']);
                exit;
            }

            $title = $_SESSION['title'];
            $class_name = $_SESSION['class_name'];
            $video_path = $targetFile;

            $sql = "INSERT INTO videos (title, class_name, video_path) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $title, $class_name, $video_path);
            if ($stmt->execute()) {
                echo json_encode(['success' => true, 'message' => 'Video uploaded successfully']);
            } else {
                echo json_encode(['success' => false, 'error' => 'Failed to upload video to database']);
            }

            $stmt->close();
            $conn->close();
        } else {
            echo json_encode(['success' => false, 'error' => 'Failed to upload video file']);
        }
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
