(function(Scratch) {
	class Extension {
		getInfo() {
			return {
				id: "unnamedbruhutilities",
				name: "UnnamedBruh's Utilities",
				color1: "#00AA00",
				color2: "#006600",
				color3: "#002200",
				blocks: [
					{
						opcode: "ternary",
						blockType: Scratch.BlockType.REPORTER,
						text: "if [A] then [B] else [C]",
						arguments: {
							A: {
								type: Scratch.BlockType.BOOLEAN
							},
							B: {
								type: Scratch.BlockType.STRING
							},
							C: {
								type: Scratch.BlockType.STRING
							}
						}
					},
					'---',
					{
						opcode: "boolean",
						blockType: Scratch.BlockType.BOOLEAN,
						text: "[A]",
						arguments: {
							A: {
								type: Scratch.BlockType.STRING,
								menu: "trueFalse"
							}
						}
					},
					{
						opcode: "exponent",
						blockType: Scratch.BlockType.REPORTER,
						text: "[A] ^ [B]",
						arguments: {
							A: {
								type: Scratch.BlockType.NUMBER
							},
							B: {
								type: Scratch.BlockType.NUMBER
							}
						}
					}
				],
				menus: {
					trueFalse: {
						items: ["true", "false"]
					}
				}
			}
		}
		ternary({A, B, C}) {
			return A ? B : C
		}
		boolean({A}) {
			return A[0] === "t" ? true : false
		}
		exponent({A, B}) {
			return Math.pow(Scratch.Cast.toNumber(A), Scratch.Cast.toNumber(B))
		}
	}
	Scratch.extensions.register(new Extension())
})(Scratch)
