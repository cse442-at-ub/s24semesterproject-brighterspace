<?php
require "dbConnection.php";
session_start();
$_SESSION['status'] = "guest";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('SameSite=None');

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    verify();
}

function getNameAndPassword(): array
{

    $some = file_get_contents('php://input');
    $body = json_decode($some);
    $name = '';
    $password = '';
    foreach ($body as $key => $value) {
        if ($key == 'name') {
            $name = $value;
        } else {
            $password = $value;
        }
    }
//    echo $name, $password;
    return [$name, $password];
}

function verify()
{
    $nameAndPassword = getNameAndPassword();
    $dataBaseRows = readDataBase($nameAndPassword[0]);
    if ($dataBaseRows) {
        if (password_verify($nameAndPassword[1], $dataBaseRows[1]) and $nameAndPassword[0] == $dataBaseRows[0]) {
//
            $_SESSION['username'] = $nameAndPassword[0];
            $_SESSION['name'] = $dataBaseRows[4];
            $cookieName = 'Token';
            $cookieValue = bin2hex(random_bytes(12));
            $cookieHash = hash('sha256', $cookieValue);
            updateDataBase($cookieHash, $nameAndPassword[0]);
            setcookie($cookieName, $cookieHash, time() + (3600), '/', '', true, true);
            setcookie('Admin', $dataBaseRows[3], time() + (3600), '/', '', true, true);
            echo "True, Admin: $dataBaseRows[3]";
            if($dataBaseRows[3] == "1"){
                $_SESSION['status'] = "teacher";
            }else{
                $_SESSION['status'] = "student";
            }

        }
    } else {
        echo 'False';
    }

}

function updateDataBase($token, $name): bool
{

    $conn = database();
    $sql = "UPDATE AccountInfo SET Token='$token' WHERE Email='$name'";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }


}

function readDataBase($name)
{
    $conn = database();
    $sql = "SELECT * FROM AccountInfo";
    $results = mysqli_query($conn, $sql);


    if ($results === false){

        return false;
    }


    if (mysqli_num_rows($results) > 0) {

        while ($row = mysqli_fetch_row($results)) {
            if ($row[0] == $name) {
                return $row;
            }
        }
    }
    return false;
}

function addAdminUser($email, $password, $status, $name)
{

    $conn = database();
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $token = bin2hex(random_bytes(16));

    $sql = "INSERT INTO AccountInfo (Email, Password, Token, AdminStatus, Name) VALUES ('{$email}','{$hashed}','{$token}','{$status}', '{$name}')";

    if ($conn->query($sql)) {
        return true;
    } else {
        return false;
    }

}
//addAdminUser('HelloWorld123', 'HelloWorld123', '0', 'Mohammed');
