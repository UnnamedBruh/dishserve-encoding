(function() {
	const answers = {
		rock: {
			choices: ["paper", "sheet", "boulder", "foil", "rag", "black hole", "lava", "volcano", "moss", "cutter"],
			answers: ["Paper... covers rock. That line gives me memories.", "A sheet of paper covers rock as well as paper.", "A boulder is bigger than a rock, so... why not?", "Puh-lease, foil wraps around a rock with ease! Hey, that rhymes!", "A rag covers a rock! Just like paper!", "A black hole pulls in any matter heading toward it!", "Lava is made up of scorching-hot rock! But it does melt the rock.", "Throw a rock in a volcano, and what do you get? Melted rock.", "Moss covers the rock and gives it a grassy look. The rock doesn't mind. In fact, it's okay with everything, really.", "Sorry, but that doesn't beat rock."],
			wrongChoices: {
				shotgun: "No gun can win against a rock, even if the bullet is shot at 80 MPH.",
				nothing: "Nothing? Okay, how do I phrase this without... oh yeah! Nothing can't beat a rock, but anything can! Because if you have nothing to use, what's the point of trying to?",
				baby: "A baby can beat a rock, but they're just not strong enough yet!",
				portal: "A portal can't beat a rock, and even if the place is dangerous, it's the portal itself that counts.",
				idiot: "An idiot picks up a rock. They observe it. They accidentally swallowed it. They thought it was hard candy. They choked. They suffocated. They died.",
				nature: "Nature owns rock, and it can go against rock... but it's quite difficult for Mother to accomplish such a feat!",
				fire: "Fire can't burn rock, but the rock can put out fire.",
				molecule: "A molecule? You mean, a single molecule can beat a rock? That's not how reality works, buddy! Everything is made up of molecules, including you!",
				knife: "A knife isn't sharp enough to cut through a rock. Sorry, buddy.",
				money: "Not even a penny's strong against a rock! It would be nice if money could be strong, though. That way, other",
				water: "Water can't beat rock. It's not even strong enough to even destroy a rock.",
				human: "A human being can't destroy a rock. If a human being bashes it on their skull, they could end up dying.",
				tape: "I'm confident a tape could SNAP if it had to hold a boulder off of a ledge.",
				"shrink ray": "Sorry buddy, but shrink rays must be in your time.",
				gun: "Sorry deputy, but bullets can't penetrate through rocks! We tried multiple times, but we just can't do it yet.",
				"": "A blank text doesn't beat anything. It's just not an object.",
				you: "Who is 'you'? Is that you playing the game, or someone else?",
				vaporizer: "A vaporizer? That weapon doesn't exist yet!",
				"your mom": "Oh, you did not just say that! That joke is... well, not as funny as it used to be.",
				"yo mom": "You didn't just say that! These jokes aren't as funny now.",
				zero: "A zero can't do anything but... exist! Its value is nothing in mathematics!"
			}
		},
		paper: {
			choices: ["scissors", "fire", "pencil", "tear", "rip", "shotgun", "hook", "human", "flamethrower"],
			answers: ["Scissors cuts paper. I don't know what to say here.", "Paper is flammable, so fire wins this round.", "A pencil can write on paper, so... yeah.", "Paper is weak, and it is tearable.", "Tears work, but rips also work as well.", "When a shotgun fires at a piece of paper, the bullets tear through the paper.", "A hook can be used to tear apart paper, because their edge is sharp.", "A person/human can rip and tear this paper with ease.", "A flamethrower can burn the paper into dust and ashes.", "That object can't beat paper. Sorry!"],
			wrongChoices: {
				you: "To be honest, who is 'you'? That's going to be one question to solve.",
				"shrink ray": "Are you just trying to lose on purpose, or are you trying to cheese this game?",
				"": "Did you just quit, or are you confused on this? Because a blank text doesn't beat anything.",
				vaporizer: "What is that? I don't know if I heard of a vaporizer... Made-up-or-not, they still don't exist... for now!",
				ow: "Ah, did you touch the edges of the paper? That's what happens when you're not careful!",
				yowch: "Touching the edges of the paper doesn't help you beat the game! It only increases the pain!",
				yes: "This isn't a 'yes' or 'no' answer. Type in an object next time!",
				no: "You don't agree with me? Well, that's not my problem!"
			}
		},
		scissors: {
			choices: ["rust", "paper shredder", "metal", "glue", "hot glue gun", "diamond", "hook", "water"],
			answers: ["Metal rusts over time, including the scissor blades!", "The scissors may be immune to paper, but a paper shredder? I don't think so!", "Metal is stronger than the scissors' blades!", "Glue can definitely put scissors in a 'sticky' situation!", "Hot glue can put scissors in a much 'stickier' situation!", "Diamonds can definitely win against scissors! Scissors can't cut diamond!", "3... 2... 1... GO! The hook grabs the scissors... AND TOSSES THE SCISSORS ONTO THE GROUND! SCISSORS FEELS EXTREME PAIN AND LACK OF WORLD DOMINATION! K.O.!", "If you dump water on paper, you can't write on it anymore... that is, if you don't wait for long.", "I would say no to whatever that object is, since it doesn't win against scissors, or I don't recognize it!"],
			wrongChoices: {
				you: "\"Hey, Vsauce Michael here. Today, we're going to look at the question: \"What is *you*\"? Well, \"you\" is the person being talked to or referred to in general during social conversations. It is actually used quite commonly to address the first person! But why do people use this term? This is because it provides a direct way to refer to the first person, and referring to a spoken individual is extremely common in social...\"",
				"shrink ray": "Shrink rays don't exist in reality. It's impossible. Also, don't cheese this game!",
				"": "A blank text has no value, nor does it have any appearance. Scissors sits there, and scissors win.",
				vaporizer: "Wait... 'What Beats Rock' on page 18... it says \"players *cannot choose items not yet possible in the present day*. If they do, they lose.\" Now you know why you lost!",
				ow: "You... you cut yourself! That's not how you use scissors! Maybe I should supervise you, just in case!",
				yowch: "No, don't use scissors like that! Use it like this! AGH, I ALSO CUT MYSELF!",
				yes: "Yes? That doesn't beat scissors. 'Yes' just beats a question.",
				no: "No? Don't \"no\" me!"
			}
		},
		zero: {
			choices: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
			answers: ["One is greater than zero.", "Two is greater than zero.", "Three is greater than zero.", "Four is greater than zero.", "Five is greater than zero.", "Six is greater than zero.", "Seven is greater than zero.", "Eight is greater than zero.", "Nine is greater than zero.", "Ten is greater than zero."],
			wrongChoices: {
				zero: "Come on, zero is equal to itself! I'm asking, what beats it, not what it is!",
				negative: "Negative? You mean, negative numbers? Ah, they are less than zero! That's why they're called \"negative numbers\"!",
				math: "Math can't beat numbers! Math establishes and embraces them!",
				"negative sign": "A negative sign doesn't change a zero, because a zero bears a nullish value!",
				"negative one": "Negative one is less than zero."
			}
		},
		"black hole": {
			choices: [],
			answers: ["That was a big mistake... NOTHING, and I mean NOTHING, can beat a black hole! It pulls any matter toward it! And by any matter, I mean ANY kind of matter!"],
			wrongChoices: {}
		},
		rust: {
			choices: ["bleach"]
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
							document.getElementById("whatbeats").textContent = input.value + " beats " + currentGuess + ". What beats " + input.value + "?"
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
