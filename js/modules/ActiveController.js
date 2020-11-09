import AudioController from './AudioController.js';
import LightController from './LightController.js';

export default class ActiveController {
  constructor(settings) {
    this.settings = settings;

    this.audio = new AudioController();
    this.light = new LightController();
  }

  green(audio = true) {
    this.light.greenOn();

    if (audio) this.audio.greenAudio();;

    setTimeout(() => {
      this.light.greenOff();
    }, this.settings.speed / 2);
  }

  red(audio = true) {
    this.light.redOn();

    if (audio) this.audio.redAudio();

    setTimeout(() => {
      this.light.redOff();
    }, this.settings.speed / 2);
  }

  yellow(audio = true) {
    this.light.yellowOn();

    if (audio) this.audio.yellowAudio();

    setTimeout(() => {
      this.light.yellowOff();
    }, this.settings.speed / 2);
  }

  cyan(audio = true) {
    this.light.cyanOn();

    if (audio) this.audio.cyanAudio();

    setTimeout(() => {
      this.light.cyanOff();
    }, this.settings.speed / 2);
  }
}