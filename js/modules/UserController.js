export default class UserController {
  constructor(settings) {
    this.settings = settings;
    this.btns = [];
  }

  addBtn(elm) {
    this.btns.push(elm);
  }

  getBtns() {
    return this.btns;
  }

  clearBtns() {
    this.btns = [];
  }
}


// user
// pc
