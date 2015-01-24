﻿#pragma strict

var normal : GameObject;
var extra : GameObject;
var replacement : GameObject;
var extraReplacement : GameObject;


var amountUsed = 0;

var container: IngredientContainer;

function CanUse () : boolean {
	return amountUsed < 2;
}

function Use (useReplacement: boolean) {
	amountUsed++;
	var theGameObject: GameObject;
	if (!useReplacement) {
		if (amountUsed == 1)
			theGameObject = normal;
		else if (amountUsed == 2)
			theGameObject = extra;
	} else {
		if (amountUsed == 1)
			theGameObject = replacement;
		else if (amountUsed == 2)
			theGameObject = extraReplacement;
	}
	
	theGameObject.renderer.enabled = true;
}

function Reset () {
	amountUsed = 0;
	
	normal.renderer.enabled = false;
	extra.renderer.enabled = false;
	replacement.renderer.enabled = false;
	extraReplacement.renderer.enabled = false;
}

