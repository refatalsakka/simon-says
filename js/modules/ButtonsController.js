import elms from '../elements.js';

export default class ButtonsController {
  constructor(settings) {
    this.settings = settings;
  }

  get(elm) {
    return this.settings.btns[elm.querySelector('a').dataset.nbr - 1];
  }

  disable() {
    elms.buttons.forEach(btn => btn.classList.add('disable'));
    elms.new.classList.add('disable');
  }

  enable() {
    setTimeout(() => {
      elms.buttons.forEach(btn => {
        btn.classList.remove('disable');
        elms.new.classList.remove('disable');
      });
    }, this.settings.waitingToEnable);
  }

  enableAfterWhile() {
    this.disable();
    this.enable();
  }
}
