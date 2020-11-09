import { areArraysEqual } from '../helpers.js';
import ActiveController from './ActiveController.js';
import ScoreController from './ScoreController.js';
import AudioController from './AudioController.js';

export default class GameController {
    constructor() {
        if (typeof GameController.instance === GameController) return GameController.instance;

        GameController.instance = this;

        this.first = true;

        this.active = new ActiveController();
        this.score = new ScoreController();
        this.audio = new AudioController();

        this.settings = {
            btns: ['green', 'red', 'yellow', 'cyan'],
            speed: 1000,
        }

        Object.freeze(this.settings);

        this.btnsElms = [...document.querySelectorAll('.button')];
        this.new = document.querySelector('#new');

        this.pcBtns = [];
        this.userBtns = [];
    }

    start() {
        this.playPc();

        if (!this.first) return;

        this.btnsEvents();

        this.new.addEventListener('click', () => this._new());

        this.first = false;
    }

    playPc() {
        this.userBtns = [];

        this.addRandonBtn();

        this.showPcBtns();

        this.preventClick();

        this.allowClick();
    }

    addRandonBtn() {
        const btn = this.settings.btns[Math.floor(Math.random() * 4)];

        this.pcBtns.push(btn);
    }

    getBtn(elm) {
        return this.settings.btns[elm.querySelector('a').dataset.nbr - 1];
    }

    addUserBtn(elm) {
        this.userBtns.push(this.getBtn(elm));
    }

    showPcBtns() {
        this.i = 0;

        const loop = setInterval(() => {
            if (this.i < this.pcBtns.length) {
                eval(`this.active.${this.pcBtns[this.i]}(${this.settings.speed / 2})`);

                this.i++;
            } else {
                clearInterval(loop);
            }
        }, this.settings.speed);
    }

    preventClick() {
        this.btnsElms.forEach(btn => {
            btn.classList.add('disable');
        });
    }

    allowClick() {
        setTimeout(() => {
            this.btnsElms.forEach(btn => {
                btn.classList.remove('disable');
            });
        }, (this.pcBtns.length * 1000) + 1000);
    }

    btnsEvents() {
        this.btnsElms.forEach(btn => {
            btn.addEventListener('click', _ => {
                eval(`this.active.${this.getBtn(btn)}(500, false)`);

                this.audio.clickAudio();

                this.addUserBtn(btn);

                if (this.continue() === true) return this._win();

                return this.lose();
            });
        });
    }

    continue() {
        if (this.pcBtns.join('').indexOf(this.userBtns.join('')) === 0) {
            return true;
        }

        return false;
    }

    lose() {
        this.preventClick();

        setTimeout(_ => {
            this.audio.loseAudio();

            this.score.clear();
        }, 800);
    }

    _win() {
        if (!areArraysEqual(this.pcBtns, this.userBtns)) return false;

        this.score.plus();

        this.playPc();
    }

    _new() {
        this.pcBtns = [];

        this.score.clear();

        this.playPc();
    }
}