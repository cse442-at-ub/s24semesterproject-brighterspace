<?php
require "dbConnection.php";


function getArrayOfGrades($id){

    $conn = database();
    $sql = "SELECT * FROM studentgrade";
    $results = $conn -> query($sql);

    if ($results ->num_rows > 0){

        while ($rows = $results ->fetch_assoc()){

            if ($rows["id"] == $id){

                $grades = $rows['grades'];
                echo $grades;

            }

        }

    }

}
getArrayOfGrades("20460930");

function addGrades(){

    $conn = database();
    $sql = "INSERT INTO studentgrade (Class, id, grades) VALUES ('CSE442', '90515815', 'ChineseClass: 5, eassy: 10')";

    if ($conn -> query($sql) === true){

        echo "New Data Created";

    }
    else{
        echo "Failure";
    }


}


