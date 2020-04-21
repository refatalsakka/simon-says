import AudioController from './AudioController.js';

export default class LightController
{
    constructor() {
        this.green = document.querySelector('#button-green');
        this.red = document.querySelector('#button-red');
        this.yellow = document.querySelector('#button-yellow');
        this.cyan = document.querySelector('#button-cyan');

        this.audio = new AudioController();
    }

    greenOn() {
        this.green.classList.add('active');
        this.audio.greenAudio();
    }

    greenOff() {
        this.green.classList.remove('active');
    }

    _green() {
        this.greenOn();

        setTimeout(() => {
            this.greenOff();
        }, 500);
    }

    redOn() {
        this.red.classList.add('active');
        this.audio.redAudio();
    }

    redOff() {
        this.red.classList.remove('active');
    }

    _red() {
        this.redOn();
        
        setTimeout(() => {
            this.redOff();
        }, 500);
    }

    yellowOn() {
        this.yellow.classList.add('active');
        this.audio.yellowAudio();
    }

    yellowOff() {
        this.yellow.classList.remove('active');
    }

    _yellow() {
        this.yellowOn();
        
        setTimeout(() => {
            this.yellowOff();
        }, 500);
    }
    
    cyanOn() {
        this.cyan.classList.add('active');
        this.audio.cyanAudio();
    }

    cyanOff() {
        this.cyan.classList.remove('active');
    }

    _cyan() {
        this.cyanOn();
        
        setTimeout(() => {
            this.cyanOff();
        }, 500);
    }
    
}