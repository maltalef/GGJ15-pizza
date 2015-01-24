#pragma strict

var ingredients = new Array();

// SINGLETON START

static var theInstance : Pizza;

static function Instance () : Pizza {
	return theInstance;
}

function Start () {
	theInstance = this;
}

// SINGLETON END

function AddIngredient (ingredient: GameObject) {
	ingredients.Push(ingredient);
	ingredient.renderer.enabled = true;
}

function ClearIngredients () {
	
	for(var ingredient : GameObject in ingredients) {
        ingredient.renderer.enabled = false;
    }
	ingredients = new Array();
}