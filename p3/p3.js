function generateAnswers() {
	let c1score = 0;
	let c2score = 0;
	let c3score = 0;
	let c4score = 0;

	let choices = document.getElementsByClassName('form-check-input');
		for (let i=0; i<choices.length; i++){
			if (choices[i].checked){
				if(choices[i].value == 'c1'){
					c1score += 1;
				}
				if(choices[i].value == 'c2'){
					c2score += 1;
				}
				if(choices[i].value == 'c3'){
					c3score += 1;
				}
				if(choices[i].value == 'c4'){
					c4score += 1;
				}
			}
		}

	let maxscore = Math.max(c1score,c2score,c3score,c4score);

	let result = document.getElementById("results");
	let img = document.createElement("img");

	if(c1score == maxscore){
		result.innerHTML = "<strong>Fire Nation</strong><br>A nation that values modernization and globalization. Backed by their vast industries and military prowess, the Fire Nation is undoubtedly the most powerful nation.<br>";
		img.src = "https://cdna.artstation.com/p/assets/images/images/050/210/696/large/praneeth-cooray-276-fire-nation-00.jpg?1654302234"
		img.style.height = "500px";
		img.style.width = "500px";
		result.appendChild(img);
	}
	else if(c2score == maxscore){
		result.innerHTML = "<strong>Water Tribes</strong><br>A smaller and closer community, known for their peaceful nature. They try to live in harmony with nature and the other nations around them.";
		img.src = "https://cdnb.artstation.com/p/assets/images/images/050/136/735/large/praneeth-cooray-268-water-tribe-01.jpg?1654132064"
		img.style.height = "500px";
		img.style.width = "500px";
		result.appendChild(img);
	}
	else if(c3score == maxscore){
		result.innerHTML = "<strong>Earth Kingdom</strong><br>The people here are strong and proud, for good reason. They are by far the largest nation with the most expansive economy and resources.";
		img.src = "https://cdna.artstation.com/p/assets/images/images/050/180/766/large/praneeth-cooray-273-earth-kingdom-00.jpg?1654237881"
		img.style.height = "500px";
		img.style.width = "500px";
		result.appendChild(img);
	}
	else if(c4score == maxscore){
		result.innerHTML = "<strong>Air Nomads</strong><br>The most peaceful and spiritually intuned nation. Their people value altruism and detachment from worldly matters above all else.";
		img.src = "https://cdna.artstation.com/p/assets/images/images/050/097/360/large/praneeth-cooray-265-air-nomx-01.jpg?1654052156"
		img.style.height = "500px";
		img.style.width = "500px";
		result.appendChild(img);
	}
	else{
		result.innerHTML = "Unable to determine, please try again!";
	}


}