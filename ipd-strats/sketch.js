let canvasSize = 400;

let canvas;

function setup() {
    canvas = createCanvas(canvasSize, canvasSize);
    canvas.position(screen.width/2 - canvasSize/2, 80);
}

function draw() {
    background(255);

    strokeWeight(2);

    rect(canvasSize/2 - 100, canvasSize/2 - 75, 100, 75);
    rect(canvasSize/2 - 100, canvasSize/2, 100, 75);
    rect(canvasSize/2, canvasSize/2 - 75, 100, 75);
    rect(canvasSize/2, canvasSize/2, 100, 75);
}
