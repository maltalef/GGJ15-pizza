#pragma strict

//var ingredients = new Array();
var dough: GameObject;

var cheese: Ingredient;
var sauce: Ingredient;
var olive: Ingredient;
var onion: Ingredient;

// SINGLETON START

static var theInstance : Pizza;

static function Instance () : Pizza {
	return theInstance;
}

function Start () {
	theInstance = this;
	
	// esto no tiene sentido
	dough.renderer.enabled = true;
}

// SINGLETON END

function ResetIngredients () {
	
	cheese.Reset();
	sauce.Reset();
	olive.Reset();
	onion.Reset();
}