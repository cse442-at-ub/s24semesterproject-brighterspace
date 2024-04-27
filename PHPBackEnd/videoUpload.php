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
        // if ($_FILES['video']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = 'uploads/';
            $uploadFile = $uploadDir . basename($_FILES['file']['name']);
            // move the file to the upload directory
            if (move_uploaded_file($_FILES['file']['tmp_name'],$uploadFile)) {
                // Update the database with the file path
                // store path for html video tag instead
                $videoTag = "$uploadFile";
                $sql = "INSERT INTO video (classroom, title, video) VALUES (?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("sss", $classroom, $title, $videoTag);
                $stmt->execute();
                $stmt->close();
                $response = [
                    'success' => true,
                    'message' => 'File uploaded successfully'
                ];
            } else {
                $response = [
                    'success' => false,
                    'error' => 'Failed to upload file: '
                ];
            }
        header('Content-Type: application/json');
        // echo json_encode($response);
        // }
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_GET['data'] === 'video') {
        $sql = "SELECT picture FROM profile WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->bind_result($profile_picture);
        $stmt->fetch();
        $stmt->close();
        echo $profile_picture;
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
} else {
    http_response_code(405);
    echo "Method not allowed";  
}

$conn->close();

?>