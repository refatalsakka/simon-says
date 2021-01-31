export default {
  get: (selector) => document.querySelector(selector),
  getAll: (selector) => document.querySelectorAll(selector),
  buttons: document.querySelectorAll('.button'),
  new: document.querySelector('#new'),
  getButton: (button) => document.querySelector(`#button-${button}`),
};
