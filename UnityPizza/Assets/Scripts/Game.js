#pragma strict

static var theInstance : Game;

var pizzaPlace: Transform; // ACA VA LA PIZZA (SOBRE LA MESADA)

var initialDough: GameObject;

static function Instance () : Game {
	return theInstance;
}

function Start () {
	theInstance = this;
	
	pizzaPlace = GameObject.Find("pizzaPlace").GetComponent(Transform);
	
	
//	Debug.Log(initialDough);
	
	initialDough.renderer.enabled = false;
}

function Update () {

}

function MakeSomePizza () {
//	pizzaPlace.position;
	initialDough.renderer.enabled = true;
}