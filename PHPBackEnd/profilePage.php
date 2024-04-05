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


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // $image = base64_decode($imageInfo);
    $sql = "SELECT bio, picture FROM profile WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($bio, $profile_picture);
    $stmt->fetch();
    $stmt->close();
    // Prepare response
    $response = [
        'bio' => $bio,
        'profile_picture' => base64_encode($profile_picture)
    ];
    echo json_encode($response);
    // header('Content-Type: image/jpeg');
    // echo $image;
    exit;
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the user submitted a bio update
    if (isset($_POST['bio'])) {
        $new_bio = $_POST['bio'];

        // Update user's bio in the database
        $sql = "UPDATE profile SET bio = ? WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $new_bio, $username);
        $stmt->execute();
        $stmt->close();

        echo json_encode(['success' => true, 'message' => 'Bio updated successfully']);
    }

    // Check if the user uploaded a new profile picture
    if (isset($_FILES['file']['error']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $profile_picture = file_get_contents($_FILES['file']['tmp_name']);

        // Update user's profile picture in the database
        $sql = "UPDATE profile SET profile_picture = ? WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("bs", $profile_picture, $username);
        $stmt->send_long_data(0, $profile_picture);
        $stmt->execute();
        $stmt->close();

        echo json_encode(['success' => true, 'message' => 'Profile picture updated successfully']);
    } elseif (isset($_FILES['file']['error'])) {
        echo json_encode(['success' => false, 'error' => 'Failed to upload file: ' . $_FILES['file']['error']]);
    }
}

$conn->close();

?>