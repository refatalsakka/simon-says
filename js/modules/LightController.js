import elms from '../elements.js';

export default class LightController {
  static greenOn() {
    elms.getButton('green').classList.add('active');
  }

  static greenOff() {
    elms.getButton('green').classList.remove('active');
  }

  static redOn() {
    elms.getButton('red').classList.add('active');
  }

  static redOff() {
    elms.getButton('red').classList.remove('active');
  }

  static yellowOn() {
    elms.getButton('yellow').classList.add('active');
  }

  static yellowOff() {
    elms.getButton('yellow').classList.remove('active');
  }

  static cyanOn() {
    elms.getButton('cyan').classList.add('active');
  }

  static cyanOff() {
    elms.getButton('cyan').classList.remove('active');
  }
}
