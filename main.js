song1="";
song2="";
leftx="";
lefty="";
righty="";
rightx="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    poseNet=ml5.poseNet(video,all_is_well);
    poseNet.on("pose",gotans);
}
function all_is_well(){
    console.log("all is well");
}
function gotans(result){
    if(result.length>0){
        console.log(result);
          leftx=result[0].pose.leftWrist.x;
          lefty=result[0].pose.leftWrist.y;
          rightx=result[0].pose.rightWrist.x;
          console.log("l.x "+leftx+"left.y "+lefty);
          console.log("right.x "+rightx+"right.y "+righty);    
        }
}
function play(){
 song1.play();
}
function play2(){
    song2.play();
   }
function preload(){
    song1=loadSound("My_fav.mp3");
    song2=loadSound("music2.mp3");

}
