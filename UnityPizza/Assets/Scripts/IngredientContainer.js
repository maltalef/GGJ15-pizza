#pragma strict

public var ingredient: Ingredient;
public var amount = 5;
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
	var i = 0;
	if (states.Length == 3) {
		i = ((amount == 0) ? 0 : (amount >= 5 ? 2 : 1));
	} else if (states.Length == 4) {
		i = ((amount == 0) ? 0 : (amount == 1 ? 1 : (amount >= 5 ? 3 : 2)));
	}
	GetComponent(SpriteRenderer).sprite = states[i];
}

function Refill (amountAdded: int) {
	amount += amountAdded;
	if (amount > 100)
		amount = 100; // ingredient max amount
	UpdateSprite();
}
