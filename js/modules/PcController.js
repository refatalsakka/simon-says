export default class PcController {
  constructor(settings, active) {
    this.settings = settings;
    this.btns = [];

    this.active = active;
  }

  addBtn() {
    const btn = this.settings.btns[Math.floor(Math.random() * 4)];

    this.btns.push(btn);
  }

  getBtns() {
    return this.btns;
  }

  clearBtns() {
    this.btns = [];
  }

  activeBtns() {
    this.i = 0;

    const loop = setInterval(() => {
      if (this.i < this.btns.length) {
        this.active[this.btns[this.i]](this.settings.speed / 2);
        this.i++;
      } else {
        clearInterval(loop);
      }
    }, this.settings.speed);
  }

  play() {
    this.addBtn();
    this.activeBtns();
  }
}