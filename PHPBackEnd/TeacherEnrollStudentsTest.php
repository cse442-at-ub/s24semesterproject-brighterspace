<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $input = json_decode(file_get_contents("php://input"));
    echo "Received string from client: " . json_encode($input);

} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if ($_GET['data'] === 'classrooms') {
        $arrayOfClassrooms = array("CSE123-A", "CSE442-A", "CSE134-A", "CSE234-A", "MTH411-A", "MTH306-A", "EAS360-A");
        echo json_encode($arrayOfClassrooms);
    } elseif ($_GET['data'] === 'students') {
        $arrayOfStudents = array("ASD", "3wr", "Joe", "Mama", "qwe", "WEF", "QWE");
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