function setup() {
createCanvas(500,500)
mic = new p5.AudioIn()
mic.start()
}

function draw() {
  background(0,0,255)
  micLevel = mic.getLevel()
  adjustedMicLevel = micLevel * 700
  fill(255,0,0)
  ellipse(250,130,adjustedMicLevel)
  ellipse(250,30,adjustedMicLevel)
  ellipse(250,230,adjustedMicLevel)  
    ellipse(250,330,adjustedMicLevel)
      ellipse(250,430,adjustedMicLevel)
        ellipse(150,230,adjustedMicLevel)
          ellipse(350,230,adjustedMicLevel)
          ellipse(50,230,adjustedMicLevel)
            ellipse(450,230,adjustedMicLevel)
}