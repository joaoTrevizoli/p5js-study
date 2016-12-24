/**
 * Created by joaotrevizoliesteves on 23/12/16.
 */

var bubbles = [];


function setup() {
  createCanvas(640, 480);
}

function mousePressed() {
    var b = new Bubble(random(50, 640), random(50, 480), random(10, 60), 100, false);
    bubbles.push(b);
}

function draw() {
    background(122);
    for (var i = 0; i < bubbles.length; i++){
        bubbles[i].display();
        bubbles[i].move();
        console.log(bubbles[i].mortal);
        if(bubbles[i].lifeSpan < 0){
            bubbles.splice(i, 1);
        }
    }
}