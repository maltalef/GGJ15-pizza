﻿#pragma strict

var anim: Animator;

var usingDirty: boolean;

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
	

	
	ingredients = new Array();
	
	usingDirty = false;
	
	OrderManager.Instance().DiscardOrder();
	OrderManager.Instance().GenerateOrder();
}

function ClearIngredientSprites () {
	cheese.Reset();
	sauce.Reset();
	olive.Reset();
	onion.Reset();
}

function Send () {

	anim.SetTrigger("PizzaInOutTrigger");

	var flavor = OrderManager.Instance().CurrentOrder().flavor;
	
	var ok = flavor.Check(ingredients);
	
	Game.Instance().PizzaDone(ok, usingDirty);
	
	ResetIngredients();
}

function AddIngredient (ingredient: Ingredient, isDirty: boolean) {
	ingredients.Push(ingredient);
	if (isDirty)
		usingDirty = true;
}
