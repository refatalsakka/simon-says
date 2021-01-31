import elms from '../elements.js';
import { areArraysEqual, areFirstOfArraysEqual } from '../helpers.js';

export default class GameController {
  constructor(score, audio, pc, user, buttons) {
    this.score = score;
    this.audio = audio;
    this.pc = pc;
    this.user = user;
    this.buttons = buttons;
  }

  _new() {
    this.user.clearBtns();
    this.pc.clearBtns();
    this.score.clear();
    this.pc.play();
    this.buttons.enableAfterWhile();
  }

  continue() {
    return areFirstOfArraysEqual(this.pc.getBtns(), this.user.getBtns());
  }

  lose() {
    this.buttons.disable();

    setTimeout(_ => {
      this.audio.loseAudio();
      this.score.clear();
      elms.new.classList.remove('disable')
    }, 800);
  }

  _win() {
    if (!areArraysEqual(this.pc.getBtns(), this.user.getBtns())) return false;

    this.user.clearBtns()
    this.score.plus();
    this.pc.play();
    this.buttons.enableAfterWhile();
  }
}
