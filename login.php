<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta charset="UTF-8">
</head>
<body>

<div class="container">

<a>replace with logo</a>

<hr>
<form action = 'PHPBackEnd\functionLoginIn.php' method = "post"> 
<table>
  <tr>
    <td><label for="username"><b>Username</b></label></td>
	<td><input type="text" placeholder="Enter Username" name="username" required></td>
  </tr>
  <tr>
    <td><label for="pass"><b>Password</b></label></td>
	<td><input type="password" placeholder="Enter Password" name="pass" required></td>
  </tr>
</table>
<button type="submit" name = "LoginButton">Login</button>
<button type="submit" name = "signUp">signup</button>

</form>
<br>
<a href="password reset page here">forgot your password?</a>

<hr>


</div>
</body>
</html>