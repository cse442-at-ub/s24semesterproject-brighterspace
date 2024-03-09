<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"));
    
    echo "Received string from client: " . json_encode($input);
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $arrayOfClasses = array("CSE123", "CSE45", "CSE134", "CSE234");
    
    echo json_encode($arrayOfClasses);
} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
} else {
    http_response_code(405);
    echo "Method not allowed";
}

?>