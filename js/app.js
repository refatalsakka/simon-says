import game from './modules/GameController.js';

document.querySelector('#new').addEventListener('click', () => new game().start(), {once: true});
