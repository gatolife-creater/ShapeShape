let r = 300;

let polygons;

let x = 50;
let xs = 1 / 8;
let m;
let n;

let apex = 5;

let count = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw() {
    background(30);
    translate(width / 2, height / 2);

    noFill();
    strokeWeight(1);
    stroke("white");

    m = 20;
    n = 1;

    let points = [];

    for (let i = 0; i < apex; i++) {
        let point = new Point(cos(360 / apex * i) * r, sin(360 / apex * i) * r);
        points.push(point);
    }

    polygons = [
        new Polygon(points)
    ];

    if (x >= 99 || x <= 1) {
        xs *= -1;
    }


    for (let i = 0; i < count; i++) {
        let newPoints = [];
        for (let line of polygons[i].lines) {
            newPoints.push(line.getInteriorPoint(m, n));
        }
        let newQuad = new Polygon(newPoints);
        polygons.push(newQuad);
    }

    for (let polygon of polygons) {
        polygon.draw();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
    r += event.deltaY * r / 1500;
    if (r === 0) {
        r === 1;
    }
}