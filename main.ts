function ReadAnalog () {
    basic.pause(1000)
    if (Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 100, 0) < 30) {
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
        led.setBrightness(266)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        while (Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 100, 0) <= 30) {
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
        if (Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 100, 0) > 90) {
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
            led.setBrightness(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                `)
            led.setBrightness(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                # # # # #
                `)
            led.setBrightness(255)
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
    basic.showNumber(Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, 100, 0))
}
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    pins.analogWritePin(AnalogPin.P1, 0)
})
basic.pause(1000)
led.setBrightness(50)
basic.showLeds(`
    . # # # .
    # . # . #
    . . # . .
    # # # # #
    . # # # .
    `)
basic.pause(1000)
led.setBrightness(150)
basic.showLeds(`
    . # # # .
    # . # . #
    . . # . .
    # # # # #
    . # # # .
    `)
basic.pause(1000)
led.setBrightness(255)
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
