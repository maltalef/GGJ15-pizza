#pragma strict

public var ingredient: GameObject;
public var amount = 10;

function Awake () {
	
}

function Start () {
	
}

function Update () {
	
}

function OnMouseDown() {

//	Debug.Log(Pizza.Instance());
//	Debug.Log(ingredient);
	Pizza.Instance().AddIngredient(ingredient);
}