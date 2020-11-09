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
    let i = 0;

    const loop = setInterval(() => {
      if (i < this.btns.length) {
        this.active[this.btns[i]](this.settings.speed / 2);
        i++;
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
