#pragma strict

var soundOnSprite: Sprite;
var soundOffSprite: Sprite;



function OnMouseDown () {
	
	
	var on = ToggleAudio();
	GetComponent(SpriteRenderer).sprite = on ? soundOnSprite : soundOffSprite;
	
//	DontDestroyOnLoad();
}

function ToggleAudio (): boolean {
	var al: AudioListener = Camera.main.gameObject.GetComponent(AudioListener);
	al.enabled = !al.enabled;
	return al.enabled;
}