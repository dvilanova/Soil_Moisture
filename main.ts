function ReadAnalog () {
    basic.pause(1000)
    if (pins.analogReadPin(AnalogPin.P1) < 700) {
        basic.pause(1000)
        led.stopAnimation()
        led.setBrightness(80)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        led.setBrightness(80)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(1000)
        led.setBrightness(155)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        while (pins.analogReadPin(AnalogPin.P1) <= 700) {
            music.playMelody("- C5 - C5 - C5 - C5 ", 120)
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
        }
        if (pins.analogReadPin(AnalogPin.P1) > 950) {
            basic.pause(1000)
            led.stopAnimation()
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            led.setBrightness(155)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
            basic.showIcon(IconNames.Yes)
            basic.pause(1000)
            basic.showIcon(IconNames.Happy)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . # .
                # . . . #
                . # # # .
                `)
            basic.showIcon(IconNames.Happy)
            basic.pause(1000)
        } else {
            basic.pause(1000)
            led.stopAnimation()
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            led.setBrightness(90)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                `)
            led.setBrightness(180)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                # # # # #
                `)
            led.setBrightness(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                # # # # #
                `)
            basic.showIcon(IconNames.Angry)
            basic.pause(1000)
            led.stopAnimation()
        }
    }
}
function ConvAnalog () {
    basic.showNumber(Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 0, 100))
}
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    pins.analogWritePin(AnalogPin.P1, 1023)
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
basic.pause(1000)
led.setBrightness(30)
basic.showLeds(`
    . # # # .
    # . # . #
    . . # . .
    # # # # #
    . # # # .
    `)
basic.pause(1000)
led.setBrightness(120)
basic.showLeds(`
    . # # # .
    # . # . #
    . . # . .
    # # # # #
    . # # # .
    `)
basic.pause(1000)
led.setBrightness(190)
basic.showLeds(`
    . # # # .
    # . # . #
    . . # . .
    # # # # #
    . # # # .
    `)
basic.pause(1000)
basic.forever(function () {
    led.stopAnimation()
    led.setBrightness(50)
    basic.showNumber(input.temperature())
    basic.showString("oC")
    basic.clearScreen()
    ReadAnalog()
    ConvAnalog()
    basic.clearScreen()
    basic.showString("%")
    basic.clearScreen()
    basic.pause(200)
})
