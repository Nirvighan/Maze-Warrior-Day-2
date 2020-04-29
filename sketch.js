function setup() {

  //create the canvas
  createCanvas(displayWidth, displayHeight - 170);
  //createSprite(400, 200, 50, 50);

  //create the maze boundary
  object1 = createSprite(50, 100, 30, 1200);
  object2 = createSprite(685, 700, 1300, 30);
  object3 = createSprite(1350, 115, 30, 1200);
  object4 = createSprite(685, 10, 1300, 30);
  object5 = createSprite(125, 400, 150, 10);
  object6 = createSprite(550, 120, 10, 220);
  object7 = createSprite(510, 300, 500, 10);
  object8 = createSprite(190, 190, 10, 225);
  object9 = createSprite(240, 80, 100, 10);
  object10 = createSprite(295, 150, 10, 150);
  object11 = createSprite(365, 225, 150, 10);
  object12 = createSprite(440, 150, 10, 150);
  object13 = createSprite(375, 125, 10, 100);
  object14 = createSprite(240, 125, 10, 100);
  object15 = createSprite(265, 340, 10, 75);
  object16 = createSprite(120, 125, 30, 10);
  object17 = createSprite(120, 200, 30, 10);
  object18 = createSprite(120, 275, 30, 10);
  object19 = createSprite(690, 395, 10, 200);
  object20 = createSprite(620, 380, 150, 10);
  object21 = createSprite(550, 420, 10, 75);
  object22 = createSprite(500, 455, 100, 10);
  object23 = createSprite(295, 125, 10, 100);
  object24 = createSprite(445, 500, 10, 100);
  object25 = createSprite(365, 260, 100, 10);
  object26 = createSprite(500, 180, 10, 100);
  object27 = createSprite(230, 550, 150, 10);
  object28 = createSprite(250, 525, 10, 150);
  object29 = createSprite(350, 400, 100, 10);
  object30 = createSprite(300, 635, 150, 10);
  object31 = createSprite(1100, 80, 150, 10);
  object32 = createSprite(1025, 130, 10, 150);
  object33 = createSprite(950, 200, 150, 10);
  object34 = createSprite(880, 270, 10, 150);
  object35 = createSprite(880, 350, 150, 10);
  object36 = createSprite(750, 150, 250, 10);
  object37 = createSprite(750, 80, 150, 10);
  object38 = createSprite(900, 30, 10, 120);
  object39 = createSprite(925, 200, 10, 100);
  object40 = createSprite(1200, 300, 10, 150);
  object41 = createSprite(1200, 150, 150, 10);
  object42 = createSprite(1100, 400, 10, 200);
  object43 = createSprite(1100, 220, 100, 10);
  object44 = createSprite(1000, 300, 100, 10);
  object45 = createSprite(950, 450, 10, 100);


}

function draw() {

  //clear the background
  background(0);

  //create draw sprites
  drawSprites();
}