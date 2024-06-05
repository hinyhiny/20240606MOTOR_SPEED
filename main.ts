let Speed = 0
pins.digitalWritePin(DigitalPin.P13, 0)
pins.analogWritePin(AnalogPin.P14, Speed)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (Speed < 0) {
            Speed += 10
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, Speed)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (Speed > 0) {
            Speed += -10
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, Speed)
        }
    } else {
        led.plotBarGraph(
        Speed,
        1023
        )
    }
})
