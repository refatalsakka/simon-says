export default class ScoreController
{   
    constructor() {
        this.score = 0;
        this.imgs = [...document.querySelectorAll('#score img')];
        this.left = this.imgs[0];
        this.right = this.imgs[1];
        this.count = 0;
    }

    up() {
        this.score = this.score + 1;
    }

    clear() {
        this.score = 0;
        this.count = 0;
    }

    changeNumber() {
        if (this.score < 10) {
            this.right.src = `images/digit-${this.score}.jpg`;

        } else {
            this.score = 0;

            this.count = this.count + 1;

            this.right.src = `images/digit-0.jpg`;

            this.left.src = `images/digit-${this.count}.jpg`;
        }
    }

}
