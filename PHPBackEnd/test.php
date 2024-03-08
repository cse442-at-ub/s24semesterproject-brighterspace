<?php

header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow GET, POST, and OPTIONS requests
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$arrayOfStrings = array("CSE123", "CSE45", "CSE134", "CSE234");



echo json_encode($arrayOfStrings);

?>