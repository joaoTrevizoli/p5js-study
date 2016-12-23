/**
 * Created by joao on 17/12/16.
 */

var ball = {
    x: 0,
    y: 200,
    speed: 10
};

var direction = "right";

function setup() {
  createCanvas(640, 480);
}

function draw() {
    background(122);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(ball.x, ball.y, 80, 80);
    if (ball.x > width || ball.x < 0)
    {
        ball.speed = ball.speed * -1
    }
    ball.x = ball.x + ball.speed;
    console.log(ball.x);
}