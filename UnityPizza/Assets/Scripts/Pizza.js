#pragma strict

var ingredients: Array = new Array();

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
	
	ingredients = new Array();
	
	OrderManager.Instance().DiscardOrder();
	OrderManager.Instance().GenerateOrder();
}

function Send () {

	var flavor = OrderManager.Instance().CurrentOrder().flavor;
	
	var ok = flavor.Check(ingredients);
	
	
	
//	ESTO ESTA MUY MAL NO SIRVE
	Game.Instance().SetText2(ok ? "BIEN!!" : "MALLLLL");
	
	// hacer algo con el ok
	
	

	ResetIngredients();
}

function AddIngredient (ingredient: Ingredient) {
	ingredients.Push(ingredient);
}
