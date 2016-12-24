/**
 * Created by joaotrevizoliesteves on 23/12/16.
 */

function Bubble(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.lifeSpan = 255;

    this.display = function () {
        stroke(255);
        // noStroke();
        fill(255, this.lifeSpan);
        ellipse(this.x, this.y, this.size, this.size);
    };

    this.move = function (){
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        this.lifeSpan--;
    }


}