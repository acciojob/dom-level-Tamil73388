//your JS code here. If required.
let start=document.querySelector("#level")
let crnt=start

let alert=0;
while(crnt.parentElement){
	alert++
	crnt=crnt.parentElement	
}
alert(`The Level of the Element is: ${alert}`)