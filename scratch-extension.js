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
								type: Scratch.ArgumentType.BOOLEAN
							},
							B: {
								type: Scratch.ArgumentType.STRING
							},
							C: {
								type: Scratch.ArgumentType.STRING
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
								type: Scratch.ArgumentType.STRING,
								menu: "trueFalse"
							}
						}
					},
					{
						opcode: "nand",
						blockType: Scratch.BlockType.BOOLEAN,
						text: "[A] nand [B]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.BOOLEAN
							},
							B: {
								type: Scratch.ArgumentType.BOOLEAN
							}
						}
					},
					{
						opcode: "nor",
						blockType: Scratch.BlockType.BOOLEAN,
						text: "[A] nor [B]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.BOOLEAN
							},
							B: {
								type: Scratch.ArgumentType.BOOLEAN
							}
						}
					},
					{
						opcode: "xor",
						blockType: Scratch.BlockType.BOOLEAN,
						text: "[A] xor [B]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.BOOLEAN
							},
							B: {
								type: Scratch.ArgumentType.BOOLEAN
							}
						}
					},
					{
						opcode: "xnor",
						blockType: Scratch.BlockType.BOOLEAN,
						text: "[A] xnor [B]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.BOOLEAN
							},
							B: {
								type: Scratch.ArgumentType.BOOLEAN
							}
						}
					},
					'---',
					{
						opcode: "exponent",
						blockType: Scratch.BlockType.REPORTER,
						text: "[A] ^ [B]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.NUMBER
							},
							B: {
								type: Scratch.ArgumentType.NUMBER
							}
						}
					},
					'---',
					{
						opcode: "typeof",
						blockType: Scratch.BlockType.REPORTER,
						text: "type of [A]",
						arguments: {
							A: {
								type: Scratch.ArgumentType.STRING
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
		nand({A, B}) {
			return !(A & B)
		}
		nor({A, B}) {
			return !(A | B)
		}
		xor({A, B}) {
			return (A ^ B) === 1
		}
		xnor({A, B}) {
			return (A ^ B) === 0
		}
		typeof(args) {
			const isJSON = (function() {
				try {
					JSON.parse(A)
					return true
				} catch {
					return false
				}
			})()
			const A = String(args.A)
			return (this.boolean(A) && new Set([4,5]).has(A.length)) ? "boolean" : /^\d*(\.\d*?)$/.test(A) ? "number" : Array.isArray(A) ? "array" : isJSON ? "json" : "string"
		}
	}
	Scratch.extensions.register(new Extension())
})(Scratch)
