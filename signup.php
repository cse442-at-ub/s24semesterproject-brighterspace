<!DOCTYPE html>
<html>
<head>
<title>Sign Up</title>
<meta charset="UTF-8">
</head>
<body>

<div class="container">

<a>replace with logo</a>
<hr>
<form action = "PHPBackEnd\functionSignUp.php" method="post">
<table>
  <tr>
    <td><label for="name"><b>Name</b></label></td>
	<td><input type="text" placeholder="Enter Name" name="name" required></td>
  </tr>
  <tr>
    <td><label for="username"><b>Username</b></label></td>
	<td><input type="text" placeholder="Enter Username" name="username" required></td>
  </tr>
  <tr>
    <td><label for="email"><b>Email</b></label></td>
	<td><input type="email" placeholder="Enter Email" name="uemail" required></td>
  </tr>
  <tr>
    <td><label for="psw"><b>Password</b></label></td>
	<td><input type="password" placeholder="Enter Password" name="pass" required></td>
  </tr>
  <tr>
    <td><label for="psw"><b>Confirm Password</b></label></td>
	<td><input type="password" placeholder="Enter Password" name="cpass" required></td>
  </tr>
</table>
<button type="submit" name = "submit">Create Account</button>
</form>
<hr>

</div>
</body>
</html>