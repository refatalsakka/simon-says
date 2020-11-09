import { areArraysEqual } from '../helpers.js';
import ActiveController from './ActiveController.js';
import ScoreController from './ScoreController.js';
import AudioController from './AudioController.js';
import PcController from './PcController.js';
import UserController from './UserController.js';
import ButtonsController from './ButtonsController.js';

export default class GameController {
    constructor() {
        if (typeof GameController.instance === GameController) return GameController.instance;

        GameController.instance = this;

        this.first = true;

        this.settings = {
            btns: ['green', 'red', 'yellow', 'cyan'],
            speed: 1000,
            waitingToEnable: 0,
        }

        this.score = new ScoreController();
        this.audio = new AudioController();
        this.active = new ActiveController(this.settings);
        this.pc = new PcController(this.settings);
        this.user = new UserController(this.settings);
        this.buttons = new ButtonsController(this.settings);

        this.new = document.querySelector('#new');
    }

    start() {
        this.user.clearBtns()

        this.pc.play();

        this.buttons.enableAfterWhile();

        if (!this.first) return;

        this.btnsEvents();

        this.new.addEventListener('click', () => this._new());

        this.first = false;
    }


    btnsEvents() {
        this.buttons.get().forEach(btn => {
            btn.addEventListener('click', _ => {
                eval(`this.active.${this.buttons.getOne(btn)}(false)`);

                this.audio.clickAudio();

                this.user.addBtn(this.buttons.getOne(btn));

                if (this.continue() === true) return this._win();

                return this.lose();
            });
        });
    }

    continue() {
        if (this.pc.getBtns().join('').indexOf(this.user.getBtns().join('')) === 0) {
            return true;
        }

        return false;
    }

    lose() {
        this.buttons.disable();

        setTimeout(_ => {
            this.audio.loseAudio();

            this.score.clear();
        }, 800);
    }

    _win() {
        if (!areArraysEqual(this.pc.getBtns(), this.user.getBtns())) return false;
        
        this.user.clearBtns()

        this.score.plus();

        this.pc.play();

        this.buttons.enableAfterWhile();
    }

    _new() {
        this.user.clearBtns()

        this.pc.clearBtns()

        this.score.clear();

        this.pc.play();

        this.buttons.enableAfterWhile();
    }
}