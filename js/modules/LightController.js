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
    }

    greenOff() {
        this.green.classList.remove('active');
    }

    _green(audio = true) {
        this.greenOn();

        if (audio) this.audio.greenAudio();;

        setTimeout(() => {
            this.greenOff();
        }, 500);
    }

    redOn() {
        this.red.classList.add('active');
    }

    redOff() {
        this.red.classList.remove('active');
    }

    _red(audio = true) {
        this.redOn();

        if (audio) this.audio.redAudio();
        
        setTimeout(() => {
            this.redOff();
        }, 500);
    }

    yellowOn() {
        this.yellow.classList.add('active');
    }

    yellowOff() {
        this.yellow.classList.remove('active');
    }

    _yellow(audio = true) {
        this.yellowOn();

        if (audio) this.audio.yellowAudio();
        
        setTimeout(() => {
            this.yellowOff();
        }, 500);
    }
    
    cyanOn() {
        this.cyan.classList.add('active');
    }

    cyanOff() {
        this.cyan.classList.remove('active');
    }

    _cyan(audio = true) {
        this.cyanOn();
        
        if (audio) this.audio.cyanAudio();

        setTimeout(() => {
            this.cyanOff();
        }, 500);
    }
    
}