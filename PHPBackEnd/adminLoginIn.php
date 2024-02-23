<?php

require "dbConnection.php";

if (isset($_POST["LoginButton"])) {


    $conn = database();
    $name = $_POST["username"];
    $password = $_POST["pass"];

    $rows = readDataBase($name);
    if ($rows != null){
        echo "working";

        if (password_verify($password,$rows[1]) === true){
            session_start();
            setcookie('user', json_encode([
                'username' => $rows[0],
                'password' => $rows[1]
            ]), time() + 3600 * 24 *30);

            $content = $rows[3];
            http_response_code(200);
            header("Content-Type: application/json");
            header("AdminStatus: {$content}");
            header("X-Content-Type-Options: nosnifff");
            header("location: \brighterspace\student_home.php");
        }
    }
}

function addAdminUser($name, $password, $email){

    $conn = database();
    $hashed = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO LoginInfo (Name, Password, Email, AdminStatus) VALUES ('" . $name . "','" . $hashed . "', '" . $email . "', '1' )";

    if ($conn->query($sql)){
        echo "It added";
    }
    else {
        echo "Error has Occured";
    }


}

function readDataBase($name){
    $conn = database();

    $sql = "SELECT * FROM LoginInfo";
    $results = mysqli_query($conn, $sql);

    if (mysqli_num_rows($results) > 0){

        while ($row = mysqli_fetch_row($results)){
            if ($row[0] == $name){
                return $row;
            }
        }
    }
    return null;
}
