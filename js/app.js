import ActiveController from './modules/ActiveController.js';
import AudioController from './modules/AudioController.js';
import ButtonsController from './modules/ButtonsController.js';
import GameController from './modules/GameController.js';
import PcController from './modules/PcController.js';
import ScoreController from './modules/ScoreController.js';
import UserController from './modules/UserController.js';

import elms from './elements.js';

(function () {
  elms.getAll('.active').forEach(btn => btn.classList.remove('active'));

  const settings = {
    btns: ['green', 'red', 'yellow', 'cyan'],
    speed: 1000,
    waitingToEnable: 1000,
  };

  const active = new ActiveController(settings);
  const audio = new AudioController();
  const buttons = new ButtonsController(settings);
  const pc = new PcController(settings, active);
  const score = new ScoreController(settings);
  const user = new UserController(settings);
  const game = new GameController(score, audio, pc, user, buttons);

  let gameStarted = false;

  function check(btn) {
    active[buttons.get(btn)](false);

    settings.waitingToEnable = (pc.getBtns().length * settings.speed) + settings.speed + 500;

    audio.clickAudio();

    user.addBtn(buttons.get(btn));

    return game.continue() === true ? game._win() : game.lose();
  }

  elms.new.addEventListener('click', _ => {
    game._new();

    if (gameStarted) return;

    elms.buttons.forEach(btn => btn.addEventListener('click', _ => check(btn)));

    gameStarted = true;
  });
})();
