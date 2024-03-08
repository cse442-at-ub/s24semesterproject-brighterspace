<?php

header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow GET, POST, and OPTIONS requests
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow the Content-Type and Authorization headers


//have to add these(maybe because it is my own server?)


// Receive the POST data from the client
$input = json_decode(file_get_contents("php://input"));

$output = $input->data; //this thing grabs from the string inside the object(I think it is consider an object: JSON)

// Do something with the string data (e.g., echo it)
echo "Received string from client: " . $output;

?>