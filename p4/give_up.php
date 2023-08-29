<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" >
		<link rel="stylesheet" href="p4.styles.css">
		<title>Guess a Number</title>
	</head>
	<body>
	<div class="form-holder">
		<div class="form-content">
			<div class="form-items">
			<h1>Guessing Game</h1>

			<?php
			session_start();
			echo "<h3>Thats too bad, the number I was thinking was: ".$_SESSION['num']."</h3>";
			?>
			<br><a href="restart.php">Restart</a>
			</div>
		</div>
	</div>
	</body>
</html>