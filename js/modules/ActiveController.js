import AudioController from './AudioController.js';
import LightController from './LightController.js';

export default class ActiveController {
  constructor() {
    this.audio = new AudioController();
    this.light = new LightController();
  }

  green(speed = 500, audio = true) {
    this.light.greenOn();

    if (audio) this.audio.greenAudio();;

    setTimeout(() => {
      this.light.greenOff();
    }, speed);
  }

  red(speed = 500, audio = true) {
    this.light.redOn();

    if (audio) this.audio.redAudio();

    setTimeout(() => {
      this.light.redOff();
    }, speed);
  }

  yellow(speed = 500, audio = true) {
    this.light.yellowOn();

    if (audio) this.audio.yellowAudio();

    setTimeout(() => {
      this.light.yellowOff();
    }, speed);
  }

  cyan(speed = 500, audio = true) {
    this.light.cyanOn();

    if (audio) this.audio.cyanAudio();

    setTimeout(() => {
      this.light.cyanOff();
    }, speed);
  }
}