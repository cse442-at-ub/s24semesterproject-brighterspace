<?php
require "dbConnection.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('SameSite=None');

if ($_SERVER['REQUEST_METHOD'] == "POST"){

    verify();
}

function getNameAndPassword(): array
{

    $some = file_get_contents('php://input');
    $body = json_decode($some);
    $name = '';
    $password = '';
    foreach ($body as $key => $value){
        if ($key == 'name'){
            $name = $value;
        }else{
            $password = $value;
        }
    }
    return [$name, $password];
}

function verify(){
    $nameAndPassword = getNameAndPassword();
    $dataBaseRows = readDataBase($nameAndPassword[0]);
    if (password_verify($nameAndPassword[1], $dataBaseRows[1]) and $nameAndPassword[0] == $dataBaseRows[0]) {
        session_start();
        $cookieName = 'Token';
        $cookieValue = bin2hex(random_bytes(12));
        $hash = password_hash($cookieValue, PASSWORD_DEFAULT);
        updateDataBase($hash, $nameAndPassword[0]);
        setcookie($cookieName, $cookieValue, time() + (3600), '/','', true, true);
//        header('Location: http://localhost:3000/student-home');
        echo "Login: True, Admin: $dataBaseRows[3], name: $dataBaseRows[4]";

    }else{
        echo "Login: False, Admin: 0";
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

function readDataBase($name){
    $conn = database();
    $sql = "SELECT * FROM AccountInfo";
    $results = mysqli_query($conn, $sql);

    if (mysqli_num_rows($results) > 0){

        while ($row = mysqli_fetch_row($results)){
            if ($row[0] == $name){
                return $row;
            }
        }
    }
    return false;
}
function addAdminUser($email, $password, $status, $name){

    $conn = database();
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $token = bin2hex(random_bytes(16));

    $sql = "INSERT INTO AccountInfo (Email, Password, Token, AdminStatus, Name) VALUES ('{$email}','{$hashed}','{$token}','{$status}', '{$name}')";

    if ($conn->query($sql)){
        return true;
    }
    else {
        return false;
    }

}
//addAdminUser('MMirhossain@gmail.com', 'HelloWorld123', '1', 'Mohammed');