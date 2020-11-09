export default class LightController {
    constructor() {
        this.green = document.querySelector('#button-green');
        this.red = document.querySelector('#button-red');
        this.yellow = document.querySelector('#button-yellow');
        this.cyan = document.querySelector('#button-cyan');
    }

    greenOn() {
        this.green.classList.add('active');
    }

    greenOff() {
        this.green.classList.remove('active');
    }

    redOn() {
        this.red.classList.add('active');
    }

    redOff() {
        this.red.classList.remove('active');
    }

    yellowOn() {
        this.yellow.classList.add('active');
    }

    yellowOff() {
        this.yellow.classList.remove('active');
    }

    cyanOn() {
        this.cyan.classList.add('active');
    }

    cyanOff() {
        this.cyan.classList.remove('active');
    }
}