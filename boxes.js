let len=20;
class boxes{
	
constructor(n){
this.n=n;
}

rX(){
push();
for(let j=0;j<this.n;j=j+1){
translate(0,2*len,0);box(len,len,len);
}
pop();
}

}	