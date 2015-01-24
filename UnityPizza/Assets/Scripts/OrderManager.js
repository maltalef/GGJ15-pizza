#pragma strict

var orders: Array = new Array();

// SINGLETON START

static var theInstance : OrderManager;

static function Instance () : OrderManager {
	return theInstance;
}

function Start () {
	theInstance = this;
	
	
	GenerateOrder();
	GenerateOrder();
	GenerateOrder();
	
	UpdateTextCualquiera();
}

// SINGLETON END


function GenerateOrder () {
	var flavors = FindObjectsOfType(Flavor);
	var i = Random.Range(0, (flavors.length - 1));
	var flavor = flavors[i];
	var order = new Order(flavor);
	orders.Push(order);
}

function CurrentOrder () : Order {

	return orders[0] as Order;
}

function DiscardOrder () {
	orders.RemoveAt(0);
	UpdateTextCualquiera();
}


function UpdateTextCualquiera() {
	Game.Instance().SetText((orders[0] as Order).flavor.flavorName+" => "+(orders[1] as Order).flavor.flavorName);
}

