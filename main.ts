let conductividad = 0
let proporcionalidad = 0
let humedad = 0
let proporcionHum = 0
let temperature = 0
let proporcionTemp = 0
input.onButtonPressed(Button.A, function () {
    conductividad = pins.analogReadPin(AnalogPin.P0)
    proporcionalidad = Math.round(pins.map(
    conductividad,
    0,
    1023,
    0,
    100
    ))
    basic.showString("C:" + proporcionalidad)
    if (proporcionalidad == 0) {
        led.plotBrightness(0, 4, 255)
    } else if (proporcionalidad >= 1 && proporcionalidad <= 24) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.plotBrightness(0, 3, 255)
        led.plotBrightness(0, 4, 255)
    } else if (proporcionalidad >= 25 && proporcionalidad <= 49) {
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.plotBrightness(0, 2, 255)
        led.plotBrightness(0, 3, 255)
        led.plotBrightness(0, 4, 255)
    } else if (proporcionalidad >= 50 && proporcionalidad <= 75) {
        led.unplot(0, 0)
        led.plotBrightness(0, 1, 255)
        led.plotBrightness(0, 2, 255)
        led.plotBrightness(0, 3, 255)
        led.plotBrightness(0, 4, 255)
    } else {
        led.plotBrightness(0, 0, 255)
        led.plotBrightness(0, 1, 255)
        led.plotBrightness(0, 2, 255)
        led.plotBrightness(0, 3, 255)
        led.plotBrightness(0, 4, 255)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    humedad = pins.analogReadPin(AnalogPin.P2)
    proporcionHum = Math.round(pins.map(
    humedad,
    0,
    1023,
    0,
    100
    ))
    basic.showString("H:" + proporcionHum + "%")
    if (proporcionHum == 0) {
        led.plotBrightness(4, 4, 255)
    } else if (proporcionHum >= 1 && proporcionHum <= 24) {
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.plotBrightness(4, 3, 255)
        led.plotBrightness(4, 4, 255)
    } else if (proporcionHum >= 25 && proporcionHum <= 49) {
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.plotBrightness(4, 2, 255)
        led.plotBrightness(4, 3, 255)
        led.plotBrightness(4, 4, 255)
    } else if (proporcionHum >= 50 && proporcionHum <= 75) {
        led.unplot(4, 0)
        led.plotBrightness(4, 1, 255)
        led.plotBrightness(4, 2, 255)
        led.plotBrightness(4, 3, 255)
        led.plotBrightness(4, 4, 255)
    } else {
        led.plotBrightness(4, 0, 255)
        led.plotBrightness(4, 1, 255)
        led.plotBrightness(4, 2, 255)
        led.plotBrightness(4, 3, 255)
        led.plotBrightness(4, 4, 255)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    temperature = input.temperature()
    proporcionTemp = pins.map(
    temperature,
    -5,
    60,
    0,
    100
    )
    basic.showString("T:" + temperature + "C")
    if (proporcionTemp == 0) {
        led.plotBrightness(2, 4, 255)
    } else if (proporcionTemp >= 1 && proporcionTemp <= 24) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.unplot(2, 2)
        led.plotBrightness(2, 3, 255)
        led.plotBrightness(2, 4, 255)
    } else if (proporcionTemp >= 25 && proporcionTemp <= 49) {
        led.unplot(2, 0)
        led.unplot(2, 1)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(2, 3, 255)
        led.plotBrightness(2, 4, 255)
    } else if (proporcionTemp >= 50 && proporcionTemp <= 75) {
        led.unplot(2, 0)
        led.plotBrightness(2, 1, 255)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(2, 3, 255)
        led.plotBrightness(2, 4, 255)
    } else {
        led.plotBrightness(2, 0, 255)
        led.plotBrightness(2, 1, 255)
        led.plotBrightness(2, 2, 255)
        led.plotBrightness(2, 3, 255)
        led.plotBrightness(2, 4, 255)
    }
    basic.pause(1000)
})
basic.forever(function () {
	
})
