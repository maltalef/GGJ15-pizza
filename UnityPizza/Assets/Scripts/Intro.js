#pragma strict
var level: String;
var contador: float=0;
var isPossible:boolean=false;
var clicked = false;
function OnMouseDown () {
	clicked = true;
	if (isPossible){
		Application.LoadLevel (level);
	}
}
function Update() {
	if(contador < 3){
		contador+= Time.deltaTime;
	}
	else {
		isPossible=true;
		if (clicked)
			Application.LoadLevel (level);
	}

}