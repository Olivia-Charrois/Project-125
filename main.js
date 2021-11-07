difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
 video = createCapture(VIDEO);
 video.size(550, 500);

 canvas = createCanvas(500, 500);
 canvas.position(560, 90);

 PoseNet = ml5.poseNet(video, modelLoaded);
 PoseNet.on('pose', gotPoses);
}

function draw() {
 background('#0000ff');
 document.getElementById("text_size").innerHTML = "Width And Height of a Text will be " + difference +"px";
 fill('#fc0d45');
 stroke('#fc0d45');
 text("OLIVIA", 100, 150);
 textSize(difference);
}

function modelLoaded() {
 console.log("PoseNet Is Initialized!");
}

function gotPoses(results)
{
 if(results.length > 0)
 {
  console.log(results);
  leftWristX = results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.rightWrist.x;
  difference = floor(leftWristX - rightWristX);
  console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference" + difference);
 }
}