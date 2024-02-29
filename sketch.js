let a_t = 0.4, a_l = 0.8;

let video;
let poseNet;
let poses=[];
let skeletons=[];
let keypointX = [];
let keypointY = [];
let env, osc;


function setup(){
  createCanvas(400, 200);
  background(100);
  video = createCapture(VIDEO);
  video.size(400, 200);

  poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', function(results) {
    poses = results;
  });
  
  env = new p5.Envelope(a_t, a_l);
  osc = new p5.Oscillator('square');
}
function modelReady(){
  console.log('model OK');
}


function draw(){
  image(video, 0, 0, width, height);
  noFill();
  fill(0, 0, 0)
  square(0, 0, 100);
  square(200, 0, 100);
  square(100, 100, 100);
  square(300, 100, 100);

  fill(255, 255, 255)
  square(100, 0, 100);
  square(300, 0, 100);
  square(200, 100, 100);
  square(0, 100, 100);
  

  drawKeypoints();
  drawSkeleton();
}

function mousePressed(){
  osc.start();
  if(mouseX>0 && mouseX<100 && mouseY>0 && mouseY<100){
    osc.freq(130);
    env.play(osc);
  }else if(mouseX>100 && mouseX<200 && mouseY>0 && mouseY<100){
    osc.freq(149);
    env.play(osc);    
  }else if(mouseX>200 && mouseX<300 && mouseY>0 && mouseY<100){
    osc.freq(167);
    env.play(osc);    
  }else if(mouseX>300 && mouseX<400 && mouseY>0 && mouseY<100){
    osc.freq(179);
    env.play(osc);    
  }else if(mouseX>0 && mouseX<100 && mouseY>100 && mouseY<200){
    osc.freq(197);
    env.play(osc);    
  }else if(mouseX>100 && mouseX<200 && mouseY>100 && mouseY<200){
    osc.freq(223);
    env.play(osc);    
  }else if(mouseX>200 && mouseX<300 && mouseY>100 && mouseY<200){
    osc.freq(249);
    env.play(osc);    
  }else if(mouseX>300 && mouseX<400 && mouseY>100 && mouseY<200){
    osc.freq(264);
    env.play(osc);    
  }
}
function drawKeypoints()  {

  for (let i = 0; i < poses.length; i++) {
   
      let pose = poses[i].pose;
      let keypoint = pose.keypoints[9];
    
      if (keypoint.score > 0.2) {
        
    ellipse(keypoint.position.x, keypoint.position.y, 5, 5);
          osc.start();
    if(keypoint.position.x>0 && keypoint.position.x<100 && keypoint.position.y>0 && keypoint.position.y<100){
    osc.freq(130);
    env.play(osc);}
        else if(keypoint.position.x>100 && keypoint.position.x<200 && keypoint.position.y>0 && keypoint.position.y<100){
    osc.freq(149);
    env.play(osc);    
  }else if(keypoint.position.x>200 && keypoint.position.x<300 && keypoint.position.y>0 && keypoint.position.y<100){
    osc.freq(167);
    env.play(osc);    
  }else if(keypoint.position.x>300 && keypoint.position.x<400 && keypoint.position.y>0 && keypoint.position.y<100){
    osc.freq(179);
    env.play(osc);    
  }else if(keypoint.position.x>0 && keypoint.position.x<100 && keypoint.position.y>100 && keypoint.position.y<200){
    osc.freq(197);
    env.play(osc);    
  }else if(keypoint.position.x>100 && keypoint.position.x<200 && keypoint.position.y>100 && keypoint.position.y<200){
    osc.freq(223);
    env.play(osc);    
  }else if(keypoint.position.x>200 && keypoint.position.x<300 && keypoint.position.y>100 && keypoint.position.y<200){
    osc.freq(249);
    env.play(osc);    
  }else if(keypoint.position.x>300 && keypoint.position.x<400 && keypoint.position.y>100 && keypoint.position.y<200){
    osc.freq(264);
    env.play(osc);    
  }

      }
  }
}

function drawSkeleton() {

  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}