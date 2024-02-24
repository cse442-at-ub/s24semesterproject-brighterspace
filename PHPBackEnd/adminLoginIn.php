<?php

require "dbConnection.php";

if (isset($_POST["LoginButton"])) {

    # Check if we found the user. If we did, we verify their password
    # If their password is correct, we redirect them and provide a http response
    # The http response contain admin which let them know if the user is admin.
    # 0 = Not Admin, 1 = Admin

    $conn = database();
    $name = $_POST["username"];
    $password = $_POST["pass"];

    $rows = readDataBase($name);
    if ($rows != null){
        echo "working";

        if (password_verify($password,$rows[3]) === true){
            session_start();
            setcookie('user', json_encode([
                'username' => $rows[1],
                'password' => $rows[3]
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

function addAdminUser($name,$username, $password, $email){
    
    # Allows the team to create a admin account on our database so the admin can Login in once we provide the info

    $conn = database();
    $hashed = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO AccountInfo (Name, Username, Email, Password, Admin) VALUES ('{$name}', '{$username}', '{$email}','$hashed', '1')";

    if ($conn->query($sql)){
        echo "It added";
    }
    else {
        echo "Error has Occured";
    }


}

function readDataBase($name){
    $conn = database();

    $sql = "SELECT * FROM AccountInfo";
    $results = mysqli_query($conn, $sql);

    if (mysqli_num_rows($results) > 0){

        while ($row = mysqli_fetch_row($results)){
            if ($row[1] == $name){
                return $row;
            }
        }
    }
    return null;
}



