export default class ButtonsController {
  constructor(settings) {
    this.settings = settings;
    this.buttons = [...document.querySelectorAll('.button')];
    this.new = document.querySelector('#new');
  }

  get() {
    return this.buttons;
  }

  getOne(elm) {
    return this.settings.btns[elm.querySelector('a').dataset.nbr - 1];
  }

  disable() {
    this.buttons.forEach(btn => {
      btn.classList.add('disable');
    });
    this.new.classList.add('disable');
  }

  enable() {
    setTimeout(() => {
      this.buttons.forEach(btn => {
        btn.classList.remove('disable');
        this.new.classList.remove('disable');
      });
    }, this.settings.waitingToEnable);
  }

  enableAfterWhile() {
    this.disable();
    this.enable();
  }
}
