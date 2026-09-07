//your JS code here. If required.
let start=document.queryselector(".level")
let crnt=start

let alert=0;
while(crnt.parentElement){
	alert++
	crnt=start.parentElement	
}
alert(`The Level of the Element is: ${alert}`)