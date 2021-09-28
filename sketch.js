function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0);

  noFill();
  stroke(1);

  rotateX(frameCount / 100);
  rotateY(frameCount);

  // Hold down to rotateZ
  if (mouseIsPressed) {
    rotateZ(frameCount / 200);
  } else {
    rotateZ(0);
  }

  // loop to generate the sphere
  for (var i = 0; i < map(mouseX, 20, 200, 0, width); i++) {
    // to prevent the loops to affect each other
    push();

    // colors
    var r = map(sin(i + frameCount), -1, 1, 255, 255);
    var g = map(sin(i * frameCount), -1, 1, 0, 204);
    var b = map(cos(i), -1, 1, 204, 0);

    stroke(r, g, b);

    // rotation Y 180°
    rotateY(i / 2);
    rotateZ(i / 7);

    // circle centered in (0, 0)
    ellipse(0, 0, 200);

    pop();
  }
}
