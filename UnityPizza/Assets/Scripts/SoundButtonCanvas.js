#pragma strict

class SoundButtonCanvas extends SoundButton {

	function UpdateSprite () {
		GetComponent(UI.Button).image.sprite = CorrectSprite();
	}

}