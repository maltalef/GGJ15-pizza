#pragma strict

public var ingredients: Ingredient[];

public var flavorName: String;

function Check (currentIngredients: Array) : boolean {
	
	if (ingredients.Length != currentIngredients.length)
		return false;
	
	
	// a and b are two dirty arrays I hate them. we hate them.
	
	var a = Array();
	var b = Array();
	
	for (var k = 0; k < ingredients.Length; k++) {
		a.Push((ingredients[k] as Ingredient).someNumber);
		b.Push((currentIngredients[k] as Ingredient).someNumber);
	}
	
	a.Sort();
	b.Sort();


	for (var i = 0; i < ingredients.Length; i++) {
		if (a[i] != b[i]) {
			return false;
		}
	}

	return true;
}

