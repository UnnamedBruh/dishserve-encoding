(function() {
	const answers = {
		rock: {
			choices: ["paper", "sheet", "boulder", "foil", "rag", "black hole", "lava", "volcano", "zero", "moss"],
			answers: ["Well, duh. Paper covers rock.", "Well, duh. A sheet of paper covers rock as well as paper.", "A boulder is bigger than a rock, so... why not?", "Puh-lease. Foil wraps around a rock with ease. Hey, that rhymes!", "A rag covers a rock. Who wouldn't know that?", "Oh, come on. A black hole sucks up *everything*.", "Lava is made up with really hot rock, so... yeah.", "Throw a rock in a volcano, and what do you get? Melted rock.", "You cheesed this, didn't you... 0 rocks are nothing...", "Moss does cover rock, and rock can't do anything about it. No offense, nature.", "Sorry, but that doesn't beat rock."],
			wrongChoices: {
				shotgun: "No gun can win against a rock, even if the bullet goes at a fricking 80 MPH.",
				nothing: "It sure sucks to be nothing. It's good you're someting, to be honest.",
				baby: "A baby can't beat a rock, and a rock can get a baby injured.",
				portal: "A portal can't beat a rock, and even if the place is dangerous, it's the portal itself that counts.",
				idiot: "Come on... can you come up with something else instead of an 'idiot'?",
				nature: "Nature owns rock, but nature can't go against rock. That's just how it works.",
				fire: "Fire can't burn rock, but rock can put out fire.",
				molecule: "I bet you my thirty dollars that a rock is made up of molecules! - UnnamedBruh",
				knife: "A knife isn't sharp enough to cut through a rock. Sorry, buddy.",
				money: "A penny's not strong against a rock, although it would be nice if money could be stronger than rock.",
				water: "Water can't beat rock. It's not even strong enough to even destroy a rock.",
				human: "A human being can't destroy a rock. If a human being bashes it on their skull, they could end up dying.",
				tape: "I'm confident a tape can even get snapped if a rock falls heavily on the tape (middle of tape is mid-air).",
				"shrink ray": "Sorry buddy, but cheesing isn't a part of this game... or is it?"
			}
		}
	]
	const input = document.getElementById("answer")
	let guessedBefore = new Set(["rock"]), currentGuess = "rock"
	input.onkeydown = function(event) {
		if (event.key == "Enter") {
			input.value = String(input.value).toLowerCase().trim().replace(/(\s)+/, "$1")
			if (!guessedBefore.has(input.value)) {
				
			} else {
				alert("Sorry, but you can't repeat this.")
			}
		}
	}
})()
