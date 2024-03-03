<?php

$classes = "GLY105";
$classesOutput = json_encode($classes);

header('Content-Type: application/json');
echo $classesOutput;

exit();
?>