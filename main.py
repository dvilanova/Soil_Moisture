def ReadAnalog():
    if pins.analog_read_pin(AnalogPin.P1) > 800:
        basic.pause(1000)
        led.stop_animation()
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        basic.show_icon(IconNames.YES)
        basic.pause(500)
        basic.show_icon(IconNames.HAPPY)
        basic.pause(1000)
    elif pins.analog_read_pin(AnalogPin.P1) < 450:
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
        """)
        basic.pause(500)
        basic.show_icon(IconNames.SAD)
        basic.pause(1000)
        while pins.analog_read_pin(AnalogPin.P1) < 450:
            music.play_melody("- C5 - C5 - C5 - C5 ", 120)
    else:
        basic.pause(1000)
        led.stop_animation()
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        # # # # #
                        # # # # #
        """)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        basic.show_icon(IconNames.SURPRISED)
        basic.pause(1000)
def ConvAnalog():
    basic.show_number(pins.map(pins.analog_read_pin(AnalogPin.P1), 0, 1023, 0, 100))
basic.show_leds("""
    . # # # .
        # . # . #
        . . # . .
        # # # # #
        . # # # .
""")
basic.pause(200)
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
basic.pause(200)
basic.show_leds("""
    . # # # .
        # . # . #
        . . # . .
        # # # # #
        . # # # .
""")
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")
basic.pause(200)
basic.show_leds("""
    . # # # .
        # . # . #
        . . # . .
        # # # # #
        . # # # .
""")
basic.pause(200)

def on_forever():
    ConvAnalog()
    basic.show_string("%")
    basic.pause(500)
    ReadAnalog()
basic.forever(on_forever)
