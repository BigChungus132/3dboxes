let rad;
let c;
function start(){
c=color(250,0,250);

rad=createRadio();rad.class('bdd');
rad.position(850,100);
rad.option('Piss Color',1);
rad.option('Restart',2);
rad.option('Chradius',3);
rad.changed(addColor);

}
function addColor(){
if(rad.value()){
	if(rad.value()=='1'){//c=color(250,250,0);
	fill(250,250,0);
	}
	if(rad.value()=='2'){setup();}
	if(rad.value()=='3'){len=30;c=color(0,250,250);}
}}