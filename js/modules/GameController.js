import HelpersController from './HelpersController.js';
import LightController from './LightController.js';
import ScoreController from './ScoreController.js';

export default class GameController
{
    constructor() {
        if (typeof GameController.instance === GameController) return GameController.instance;
        
        GameController.instance = this;

        this.first = true;
        
        this.helpers = new HelpersController();
        this.light = new LightController();
        this.score = new ScoreController();

        
        this.settings = {
            btns: ['green', 'red', 'yellow', 'cyan'],
        }

        Object.freeze(this.settings);

        this.btnsElms = [...document.querySelectorAll('.button')];
        this.new = document.querySelector('#new');

        this.pcBtns = [];
        this.userBtns = [];
    }

    start() {
        this.setBtns();

        if (!this.first) return;

        this.btnsEvents();

        this.new.addEventListener('click', () => this._new());

        this.first = false;
    }

    setBtns() {
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

    addUserBtn(elm) {
        const btn = this.settings.btns[elm.querySelector('a').dataset.nbr - 1];

        this.userBtns.push(btn);
    }

    showPcBtns() {
        this.i = 0;

        const loop = setInterval(() => {
            if (this.i < this.pcBtns.length) {
                eval(`this.light._${this.pcBtns[this.i]}()`);

                 this.i++;
            } else {
                clearInterval(loop);
            }
        }, 1000);
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
            btn.addEventListener('click', () => {
                this.addUserBtn(btn)

                if (this.continue() === true) return this._win();

                return this.lose();
            });
        });
    }

    continue() {
        if (this.pcBtns.join('').indexOf(this.userBtns.join('')) === 0) {
            this.score.up();

            return true;
        }

        return false;
    }

    lose() {
        this.preventClick();
    }

    _win() {
        if (!this.helpers.areArraysEqual(this.pcBtns, this.userBtns)) return false;

        this.setBtns();
    }

    _new() {
        this.pcBtns = [];

        this.score.clear();

        this.setBtns();
    }
}