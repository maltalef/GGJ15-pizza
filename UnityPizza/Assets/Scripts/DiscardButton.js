#pragma strict

function OnMouseDown () {
	Pizza.Instance().ResetIngredients();
	Game.Instance().SetText2("discarded :(");
}