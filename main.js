nosex=0
nosey=0
leftWristx=0
leftWristy=0
rightWristx=0
rightWristy=0
difference=0
function preload(){}
function setup(){
  Canvas=createCanvas(500,500)
  Video=createCapture(VIDEO)
  Video.size(500,500)
  Canvas.position(550,200)
  poseNet=ml5.poseNet(Video,modelLoaded)
  poseNet.on("pose",gotPoses)

}
function draw(){
  background("#cfffdb") 
  fill("#7200fc")
  square(nosex, nosey, difference);
}
function  modelLoaded(){
  
  console.log("ModelIsWorking")
  
}
function gotPoses(result)
{
  if(result.length  >0){
    console.log(result)
    nosex=result[0].pose.nose.x
    nosey=result[0].pose.nose.y
    leftWristx=result[0].pose.leftWrist.x
    leftWristy=result[0].pose.leftWrist.y
  rightWristx=result[0].pose.rightWrist.x
    rightWristy=result[0].pose.rightWrist.y
    difference=leftWristx-rightWristx
    difference=floor(difference) 
    document.getElementById("wh_square").innerHTML=difference;
     }}