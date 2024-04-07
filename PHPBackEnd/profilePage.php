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


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_GET['data'] === 'picture') {
        if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $imageInfo = file_get_contents($_FILES['file']['tmp_name']);
            $sql = "UPDATE profile SET profile_picture = ? WHERE username = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("bs", $imageInfo, $username);
            $stmt->send_long_data(0, $imageInfo);
            $stmt->execute();
            $stmt->close();
            $response = [
                'success' => true,
                'image' => base64_encode($imageInfo)
            ];
        } else {
            $response = [
                'success' => false,
                'error' => 'Failed to upload file: ' . $_FILES['file']['error']
            ];
        }
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    }
    if ($_GET['data'] === 'bio') {
        $inputBio = json_decode(file_get_contents("php://input"));
        $returnBio = $inputBio->bio;
        // Update user's bio in the database
        $sql = "UPDATE profile SET bio = ? WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $returnBio, $username);
        $stmt->execute();
        $stmt->close();
        echo "Received string from client: " . json_encode($inputBio);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['data']) && $_GET['data'] === 'picture') {
        //$image = base64_decode($imageInfo);
        $sql = "SELECT picture FROM profile WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->bind_result($profile_picture);
        $stmt->fetch();
        $stmt->close();
        header('Content-Type: image/jpeg');
        //echo $image;
        echo $profile_picture;
        exit;
    }
    if (isset($_GET['data']) && $_GET['data'] === 'bio') {
        //$bio = "I am not happy";
        $sql = "SELECT bio FROM profile WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->bind_result($bio);
        $stmt->fetch();
        $stmt->close();
        header('Content-Type: text/plain');
        echo $bio;
        exit;
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
} else {
    http_response_code(405);
    echo "Method not allowed";  
}

$conn->close();

?>