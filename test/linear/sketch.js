let quadratic = new Quadratic("-0.01(x-100)^2+300");
let min = -400;
let max = 400;
let bSlider;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    bSlider = createSlider(-300, 300, 0, 1);
    bSlider.style("width", "80px");
    bSlider.position("top", "20px");
}

function draw() {
    background(30);
    translate(width / 2, height / 2);

    // x軸、y軸の表示
    stroke("gray");
    line(-width / 2, 0, width / 2, 0);
    line(0, -height / 2, 0, height / 2);

    // 定義域の直線
    line(min, -height / 2, min, height / 2);
    line(max, -height / 2, max, height / 2);

    tangentLinear = quadratic.getTangentLinear(bSlider.value());
    normalLinear = quadratic.getNormalLinear(bSlider.value());

    push();
    noFill();
    stroke("white");
    strokeWeight(2);
    tangentLinear.draw(min, max);
    normalLinear.draw(min, max);
    quadratic.draw(min, max);
    pop();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}