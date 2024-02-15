<?php
session_start(); // start session to access user data
// check if the user is logged in
if (!isset($_SESSION['username'])) {
    // redirect to the login page if not logged in
    header("Location: login.html");
    exit;
}

// use the HTML file for the lobby page
include 'student_home.html';
?>