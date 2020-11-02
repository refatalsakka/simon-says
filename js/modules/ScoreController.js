export default class ScoreController {
    constructor() {
        this.imgs = document.querySelectorAll("#score img");
        this.leftImg = this.imgs[0];
        this.rightImg = this.imgs[1];
        this.monad = 0;
        this.tens = 0;
    }

    clear() {
        this.monad = 0;
        this.tens = 0;

        this.editHtml();
    }

    plusMonad() {
        this.monad = this.monad + 1;
    }

    clearMonad() {
        this.monad = 0;
    }

    plusTens() {
        this.tens = this.tens + 1;
    }

    editHtml() {
        this.rightImg.src = "images/digit-" + this.monad + ".jpg";
        this.leftImg.src = "images/digit-" + this.tens + ".jpg";
    }

    plus() {
        if (this.monad < 9) {
            this.plusMonad();
        } else {
            this.plusTens();
            this.clearMonad();
        }

        this.editHtml();
    }
}