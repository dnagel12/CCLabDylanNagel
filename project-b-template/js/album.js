let images = [];
let currentIndex = 0;

function preload() {
    
    images.push(loadImage('image1.png'));
    images.push(loadImage('image2.png'));
    images.push(loadImage('image3.png'));
    images.push(loadImage('image4.png'));
   
    images.push(loadImage('image5.png'));
    images.push(loadImage('image6.png'));
}

function setup() {
  let cnv = createCanvas(600, 400);
    cnv.parent("canvasContainer");
}

function draw() {
    background(220);

  
    image(images[currentIndex], 0, 0, width, height);


    fill(0);
    text(`Image ${currentIndex + 1} / ${images.length}`, 10, 20);
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }


    if (keyCode === RIGHT_ARROW) {
        currentIndex = (currentIndex + 1) % images.length;
    }
}