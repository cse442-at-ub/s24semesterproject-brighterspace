<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require "dbConnection.php";

$conn = database();
session_start();
$username = $_SESSION['username'];

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if ($_GET['data'] === 'video') {
        $classroom = $_POST['classroom'];
        $title = $_POST['title'];
        if ($_FILES['video']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = 'uploads/';
            $uploadFile = $uploadDir . basename($_FILES['video']['name']); // Corrected 'file' to 'video'
            // move the file to the upload directory
            if (move_uploaded_file($_FILES['video']['tmp_name'], $uploadFile)) {
                // Update the database with the file path
                // store path for html video tag instead
                $videoTag = $uploadFile; // No need for quotes around $uploadFile
                $sql = "INSERT INTO video (classroom, title, video) VALUES (?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("sss", $classroom, $title, $videoTag);
                $stmt->execute();
                $stmt->close();
                $response = [
                    'success' => true,
                    'message' => 'File uploaded successfully'
                ];
                // echo("upload successful");
            } else {
                $response = [
                    'success' => false,
                    'error' => 'Failed to upload file'
                ];
                // echo("failed to move file");
            }
        } else {
            $response = [
                'success' => false,
                'error' => 'Failed to upload video: ' . $_FILES['video']['error']
            ];
            // echo("failed to upload video");
        }
        header('Content-Type: application/json');
        echo json_encode($response);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_GET['data'] === 'video') {
        $sql = "SELECT classroom, title, video FROM video"; // Select all videos with their classroom and title
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $stmt->bind_result($classroom, $title, $video); // Bind the results to variables
        $videos = []; // Array to store all videos
        while ($stmt->fetch()) {
            $videoInfo = [
                'classroom' => $classroom,
                'title' => $title,
                'video' => $video
            ];
            $videos[] = $videoInfo; // Add each video to the array
        }
        $stmt->close();
        $response = [
            'success' => true,
            'message' => 'Returned list of videos'
        ];
        echo json_encode($response);
        echo json_encode($videos); // Return all videos as JSON
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
} else {
    http_response_code(405);
    echo "Method not allowed";  
}

$conn->close();

?>