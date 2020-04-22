export default class GameController
{
    constructor() {
        this.green = new Audio('sounds/green.mp3');
        this.red = new Audio('sounds/red.mp3');
        this.yellow = new Audio('sounds/yellow.mp3');
        this.cyan = new Audio('sounds/cyan.mp3'); 
        this.click = new Audio('sounds/click.mp3');
    }

    greenAudio() {
        this.green.play();
    }

    redAudio() {
        this.red.play();
    }

    yellowAudio() {
        this.yellow.play();
    }
    
    cyanAudio() {
        this.cyan.play();
    }

    clickAudio() {
        this.click.play();
    }
}