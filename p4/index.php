<!DOCTYPE html>
<html lang="en">
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
	<h3>Im thinking of a number between 1 and 50</h3>

<?php 
	session_start();
	if (empty($_SESSION['num'])){ //if session is empty
		$randNum = rand(1, 50);	//generate random number
		$_SESSION['num'] = $randNum; //assign number to session
		$_SESSION['count'] = 1; //declare count for guesses
	}
?>

	<form method = "post">
		<input class="form-control" type="text" name="guessNum" placeholder="Your Guess?">
		<input class="btn btn-primary" type="submit" name="submit" value="Guess">
	</form>

<?php
	if (isset($_POST['submit'])){ //if submit has been pressed
		$num = $_POST['guessNum']; //store user input
		if ((preg_match('/^[0-9]+$/', $num)) && ($num >= 1 and $num <= 50)){ //if input is a number in range
			if ($num == $_SESSION['num']){
				echo "<h3><div class='success'>Congratulations!</div> You guessed the correct number in only ".$_SESSION['count']." attempts.</h3>";
			}
			else if($num < $_SESSION['num']){
				echo "<h3><div class='response'>Try a higher number</div></h3>";
				$_SESSION['count']++;
			}
			else{
				echo "<h3><div class='response'>Try a lower number</div></h3>";
				$_SESSION['count']++;
			}
		}
	else{
		echo "<h3><div class='response'>Please enter a valid number in range</div></h3>";
	}
	}
?>
<div class="feedback">
	<br><a href="give_up.php">Give Up?</a>
	<br><a href="restart.php">Restart</a>
</div>
</div>
</div>
</div>
</body>
</html>