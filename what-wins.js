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
				tape: "I'm confident a tape can get snapped if a rock falls heavily on the tape (middle of tape is mid-air).",
				"shrink ray": "Sorry buddy, but cheesing isn't a part of this game... or is it?",
				gun: "Sorry deputy, but guns don't work on rocks.",
				"": "A blank text doesn't beat anything. It's just not an object.",
				you: "Who is 'you'? Is that you playing the game, or someone else?",
				vaporizer: "You can't vaporize anything with made-up tools."
			}
		},
		paper: {
			choices: ["scissors", "fire", "pencil", "tear", "rip", "shotgun", "hook", "human", "flamethrower", "paper"],
			answers: ["Scissors cuts paper. I don't know what to say here.", "Paper is flammable, so fire wins this round.", "A pencil can write on paper, so... yeah.", "Paper is weak, and it is tearable.", "Tears work, but rips also work as well.", "When a shotgun fires at a piece of paper, the bullets tear through the paper.", "A hook can be used to tear apart paper, because their edge is sharp.", "A person/human can rip and tear this paper.", "A flamethrower can burn the paper into smithereens.", "That object can't beat paper. Sorry!"],
			wrongChoices: {
				you: "To be honest, who is 'you'? That's going to be one question to solve.",
				"shrink ray": "Are you just trying to lose on purpose, or are you trying to cheese this game?",
				"": "Did you just quit, or are you confused on this? Because a blank text doesn't beat anything.",
				vaporizer: "What is that? Is that... A MADE UP TOOL? Made up tools don't beat anything!",
				ow: "Ah, did you touch the edges of the paper? That's what happens when you do that!",
				yowch: "Touching the edges of the paper doesn't help you beat the game, it only increases your pain!",
				yes: "This isn't a 'yes' or 'no' answer. Type in an object! That's how this game works.",
				no: "You don't agree with me? Well, that's not my problem, nor is it UnnamedBruh's problem."
			}
		},
		scissors: {
			choices: ["rust", "paper shredder", "metal", "glue", "hot glue gun", "diamond", "hook", "water"],
			answers: ["Metal rusts over time, including the scissor blades!", "The scissors may be immune to paper, but a paper shredder? Hell if it is!", "Metal is stronger than the scissors blades!", "Glue can definitely put scissors in a 'sticky' situation! :trollface:", "Hot glue can put scissors in a much 'stickier' situation! :trollface:", "Diamonds can definitely win against scissors! Scissors can't cut diamond.", "3... 2... 1... GO! The hook grabs the scissors... AND TOSSES THE SCISSORS ONTO THE GROUND! K.O.!", "If you dump water on paper, you can't write on it anymore.", "I would say no to whatever that object is, since it doesn't win against scissors!"],
			wrongChoices: {
				you: "'Hey, Vsauce Michael here. Today, we're going to look at the question: \"Who is *you*\"? Well, \"you\" is a being that means the person being talked to by another person...'",
				"shrink ray": "Shrink rays don't exist in reality. It's impossible. Also, don't cheese this game!",
				"": "A blank text has no value, nor does it have any appearance. Scissors sits there, and scissors win.",
				vaporizer: "Made-up tools aren't allowed in this game, according to my rules of 'What Beats Rock' on page 18... it says 'This means that players *cannot make up certain items that are not in real life* to win the game, so if they do, they lose.' Now you know why?",
				ow: "You... you cut yourself! THAT'S NOT HOW YOU USE SCISSORS!",
				yowch: "STOP CUTTING YOURSELF!",
				yes: "'yes'? That doesn't beat scissors. 'yes' just beats nothing.",
				no: "No? Don't 'no' me.",
				"don't don't no me me": "Oh yeah? What if I do it again?",
				"don't \"don't no me\" me": "Oh yeah? What if I do it again?",
				"don't 'don't no me' me": "Oh yeah? What if I do it again?",
				"do not 'do not no me' me": "Oh yeah? Also, that's not what I exactly said.",
				"do not 'don't no me' me": "Oh yeah? What if I do it again?",
				"do not \"don't no me\" me": "Oh yeah? What if I do it again?",
				"do not \"do not no me\" me": "Oh yeah? Also, that's not what I exactly said."
			}
		}
	}
	const input = document.getElementById("answer")
	let guessedBefore = new Set(["rock"]), currentGuess = "rock", length = 1
	input.onkeydown = function(event) {
		if (event.key == "Enter") {
			input.value = String(input.value).toLowerCase().trim().replace(/(\s)+/, "$1")
			guessedBefore.add(input.value)
			if (guessedBefore.size !== length) {
				length = guessedBefore.size
				const ans = answers[currentGuess]
				if (ans) {
					const badchoice = ans.wrongChoices[input.value]
					const correctAnswer = ans.answers[ans.choices.indexOf(input.value)]
					if (badchoice) {
						document.getElementById("whatbeats").textContent = input.value + " doesn't beat " + currentGuess
						document.getElementById("subtitle").textContent = badchoice
						input.disabled = true
					} else {
						if (correctAnswer) {
							document.getElementById("whatbeats").textContent = input.value + " beats " + currentGuess
							document.getElementById("subtitle").textContent = correctAnswer
						} else {
							document.getElementById("whatbeats").textContent = input.value + " doesn't beat " + currentGuess
							document.getElementById("subtitle").textContent = ans.answers[ans.answers.length - 1]
							input.disabled = true
						}
					}
					currentGuess = input.value
					input.value = ""
					document.getElementById("score").textContent = "Score: " + (guessedBefore.size - 1)
				} else {
					input.disabled = true
					document.getElementById("whatbeats").textContent = "You reached an end to this game."
					document.getElementById("subtitle").textContent = "Congrats."
				}
			} else {
				alert("Sorry, but you can't repeat that.")
			}
		}
	}
})()
