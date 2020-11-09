import ActiveController from './modules/ActiveController.js';
import AudioController from './modules/AudioController.js';
import ButtonsController from './modules/ButtonsController.js';
import GameController from './modules/GameController.js';
import PcController from './modules/PcController.js';
import ScoreController from './modules/ScoreController.js';
import UserController from './modules/UserController.js';

(function () {
  const settings = {
    btns: ['green', 'red', 'yellow', 'cyan'],
    speed: 1000,
    waitingToEnable: 0,
  }

  const active = new ActiveController(settings);
  const audio = new AudioController();
  const buttons = new ButtonsController(settings);
  const pc = new PcController(settings);
  const score = new ScoreController(settings);
  const user = new UserController(settings);
  const game = new GameController(score, audio, pc, user, buttons);
  let first = true;

  document.querySelector('#new').addEventListener('click', _ => {
    game._new();

    if (!first) return;

    buttons.get().forEach(btn => {
      btn.addEventListener('click', _ => {
        eval(`active.${buttons.getOne(btn)}(false)`);

        settings.waitingToEnable = (pc.getBtns().length * (settings.speed / 2));

        audio.clickAudio();

        user.addBtn(buttons.getOne(btn));

        if (game.continue() === true) return game._win();

        return game.lose();
      });
    });

    first = false
  });
})()
