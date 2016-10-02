var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var n= new Date(); 
var dh= n.getHours();
var dm= n.getMinutes();
var ds= n.getSeconds();
ctx.strokeStyle = '#22c5e2';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#10e3d3'; //#52dead

function degToRad(degree) {
  var factor = Math.PI/180;
  return degree*factor;
}


function renderTime() {
 
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds+ (milliseconds/1000);
  var fh=10;
  var fm=1;
  var fs=5;
  // Background
  var grd = ctx.createRadialGradient(250,250,5,250,250, 300);
  grd.addColorStop(0, '#a2f0d7');
  grd.addColorStop(1, 'white');
  ctx.fillStyle = grd;
  //ctx.fillStyle = '333333';
  ctx.fillRect(0,0,500,500);
  
 
 // Hours
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad(((fh-(hours-dh))*30)-90));
  ctx.stroke();
   // Minutes
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad(((fm-(minutes-dm))*6)-90));
  ctx.stroke();
  
  
  // Seconds
  ctx.beginPath();
  ctx.arc(250, 250, 140, degToRad(270), degToRad(((fs-(newSeconds-ds))*6)-90));
  ctx.stroke();
  
  // Date
  ctx.font = "25px Arial MT";
  ctx.fillStyle = '#538284';
  ctx.fillText(today, 175, 250);
  
  // Time
  ctx.font = "18px Arial";
  ctx.fillStyle = '#5c7278';
  ctx.fillText(time, 175, 280);
  

}
setInterval(renderTime,40);
