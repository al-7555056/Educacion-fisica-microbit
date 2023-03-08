input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Letra._pickRandom()))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 10))
    basic.pause(1000)
    basic.clearScreen()
})
let Letra: string[] = []
Letra = [
"A",
"E",
"I",
"O",
"U"
]
