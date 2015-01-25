#pragma strict

var goodTexts: GameObject[];
var badTexts: GameObject[];
var flavorTexts: GameObject[];
var refillText: GameObject;

// SINGLETON START

static var theInstance : ColorTextManager;

static function Instance () : ColorTextManager {
	return theInstance;
}

function Awake () {
	theInstance = this;
}

// SINGLETON END

function AnnounceRandom(good: boolean) {

	var textsArray = good ? goodTexts : badTexts;
	var i = Random.Range(0, (textsArray.length - 1));
	var theText = textsArray[i].GetComponent(ColorText);
	Announce(theText);
}

function AnnounceFlavor(ingredient: Ingredient) {
	Announce(ingredient.colorText);
}

function AnnounceRefill() {
	Announce(refillText.GetComponent(ColorText));
}

function Announce (text: ColorText) {
	text.Slide();
}
