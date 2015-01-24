#pragma strict

public var ingredient: Ingredient;
public var amount = 10;
public var sprite: GameObject;

function OnMouseDown () {

	if (amount == 0)
		return;
	
	if (ingredient.CanUse()) {
		amount--;
		ingredient.Use(true);
		UpdateSprite();
	}
		
	
	
}

function UpdateSprite () {
	
	var scale = amount / 10f;
	sprite.transform.localScale = new Vector3(scale, scale, scale);
}
