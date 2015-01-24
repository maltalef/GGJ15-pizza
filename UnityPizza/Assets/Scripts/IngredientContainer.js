#pragma strict

public var ingredient: Ingredient;
public var amount = 10;
var replacement = false;


var states: Sprite[];

function OnMouseDown () {

	if (amount == 0)
		return;
	
	if (ingredient.CanUse()) {
		amount--;
		ingredient.Use(replacement);
		UpdateSprite();
	}
}

function UpdateSprite () {
	
	// depending on the amount, choose a different sprite (from the 'states' array)
	var i = ((amount == 0) ? 0 : (amount > 5 ? 2 : 1));
	GetComponent(SpriteRenderer).sprite = states[i];
	
}
