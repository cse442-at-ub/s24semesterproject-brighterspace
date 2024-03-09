<?php
header("Access-Control-Allow-Origin: *");



$arrayOfStrings = array("CSE123", "CSE45", "CSE134", "CSE234");



echo json_encode($arrayOfStrings);

?>