import AudioController from './AudioController.js';
import LightController from './LightController.js';

export default class ActiveController {
  constructor(settings) {
    this.settings = settings;
    this.audio = new AudioController();
  }

  green(audio = true) {
    LightController.greenOn();

    if (audio) this.audio.greenAudio();;

    setTimeout(() => {
      LightController.greenOff();
    }, this.settings.speed / 2);
  }

  red(audio = true) {
    LightController.redOn();

    if (audio) this.audio.redAudio();

    setTimeout(() => {
      LightController.redOff();
    }, this.settings.speed / 2);
  }

  yellow(audio = true) {
    LightController.yellowOn();

    if (audio) this.audio.yellowAudio();

    setTimeout(() => {
      LightController.yellowOff();
    }, this.settings.speed / 2);
  }

  cyan(audio = true) {
    LightController.cyanOn();

    if (audio) this.audio.cyanAudio();

    setTimeout(() => {
      LightController.cyanOff();
    }, this.settings.speed / 2);
  }
}
