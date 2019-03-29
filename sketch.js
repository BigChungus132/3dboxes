let can;let bar=[];
let b1;let lenChg;

function setup() {
start();lenChg=10;
can=createCanvas(750,500,WEBGL);can.position(40,35);
can.class('bdd');
b1=new boxes(5);
frameRate(5);
for(let j=0;j<10;j++){
bar.push(new boxes(5));}}
let ang=0;



function draw() {
//clear();
background(200,160,120);
//b1.rX(20);
translate(50,50,50);
//bar[3].rX(30);
for(let j=0;j<10;j++){
push();
rotateY(ang+26*j);
translate(90,-180,0);
bar[j].rX();
pop();
}
/*/for(let j=0;j<10;j++){
push();
rotateZ(-ang+36*j);
translate(-90,0,20);
bar[j].rX();
pop();
}*/

ang+=5;
}