#pragma strict

class SoundButton extends MonoBehaviour {

	var soundOnSprite: Sprite;
	var soundOffSprite: Sprite;

	function Start () {
		UpdateSprite();
	}

	function soundIsOn () : boolean {
		return AudioListener.volume > 0f;
	}
	
	function CorrectSprite () : Sprite {
		return soundIsOn() ? soundOnSprite : soundOffSprite;
	}

	function UpdateSprite () {
		GetComponent(SpriteRenderer).sprite = CorrectSprite();
	}

	function OnMouseDown () {
		ToggleAudio();
		UpdateSprite();
	}

	function ToggleAudio () {
		AudioListener.volume = soundIsOn() ? 0f : 1f;
	}
	
}