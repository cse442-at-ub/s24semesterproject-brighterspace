<?php

header("Access-Control-Allow-Origin: *");
// Allow GET requests with content types application/json and application/x-www-form-urlencoded
header("Access-Control-Allow-Methods: GET");
// Allow headers Content-Type (if required for your request)
header("Access-Control-Allow-Headers: Content-Type");
// Allow credentials (if required)
header("Access-Control-Allow-Credentials: true");
// Set content type of response
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $input = json_decode(file_get_contents("php://input"));
    echo "Received string from client: " . json_encode($input);

} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if ($_GET['data'] === 'classrooms') {
        $arrayOfClassrooms = array("CSE123-A", "CSE442-A", "CSE134-A", "CSE234-A", "MTH411-A", "MTH306-A", "EAS360-A");
        echo json_encode($arrayOfClassrooms);
    } elseif ($_GET['data'] === 'students') {
        $arrayOfStudents = array("ASD", "3wr", "Joe", "Mama", "ASD", "WEF", "QWE");
        echo json_encode($arrayOfStudents);
    }

} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {

    http_response_code(200);
    exit;

} else {

    http_response_code(405);
    echo "Method not allowed";
    
}

?>