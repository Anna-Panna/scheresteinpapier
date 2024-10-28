let punkt = 0
let zeichen = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    punkt += 1
    if (punkt == 1) {
        basic.setLedColor(0x00ff00)
    } else if (punkt == 2) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0xffffff)
    } else if (punkt == 3) {
        music.playTone(440, music.beat(BeatFraction.Whole))
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    } else {
        basic.turnRgbLedOff()
    }
})
input.onGesture(Gesture.Shake, function () {
    zeichen = randint(1, 3)
    if (zeichen == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (zeichen == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (zeichen == 3) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
