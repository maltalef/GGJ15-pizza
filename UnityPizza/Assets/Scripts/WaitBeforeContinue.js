#pragma strict

var sceneName: String = "Level";

var elapsedTime = 0f;
var isPossible = false;
var clicked = false;


function OnMouseUp () {
	Continue();
}

function Continue () {
	clicked = true;
	if (isPossible) {
		Application.LoadLevel (sceneName);
	}
}

function Update() {
	if (elapsedTime < 3f){
		elapsedTime += Time.deltaTime;
	}
	else {
		isPossible = true;
		if (clicked)
			Application.LoadLevel (sceneName);
	}

}