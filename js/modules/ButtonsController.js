export default class ButtonsController {
  constructor(settings) {
    this.settings = settings;
    this.buttons = [...document.querySelectorAll('.button')];
  }

  get() {
    return this.buttons;
  }

  getOne(elm) {
    return this.settings.btns[elm.querySelector('a').dataset.nbr - 1];
  }

  enable() {
    this.buttons.forEach(btn => {
      btn.classList.add('disable');
    });
  }

  disable() {
    setTimeout(() => {
      this.buttons.forEach(btn => {
        btn.classList.remove('disable');
      });
    }, this.settings.waitingToEnable);
  }

  enableAfterWhile() {
    this.enable();
    this.disable();
  }
}