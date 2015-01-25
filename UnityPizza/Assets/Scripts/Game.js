#pragma strict

var currentPizzaText: UI.Text;
var nextPizzaText: UI.Text;
var timerText: UI.Text;
var pizzasDoneText: UI.Text;
var nextRefillText: UI.Text;

var timeLeft: float = 55.55f; // set in inspector

var level = 0; // basically, it's just the current index for the checkpoints and refills arrays
var checkpoints = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 36, 42, 48, 54, 60, 69, 78, 87, 100];
var refills = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 9, 9, 9, 9];
var completedPizzas: int = 0;

var ingredientContainers: Object[];

// SINGLETON START

static var theInstance : Game;

static function Instance () : Game {
	return theInstance;
}

function Awake () {
	theInstance = this;
}

// SINGLETON END

function Start () {
	ingredientContainers = FindObjectsOfType(IngredientContainer);
}

function Update () {
	timeLeft -= Time.deltaTime;
	
	if (timeLeft <= 0)
		TimeRanOut();
	else {
		UpdateTexts();
	}
}

function TimeRanOut () {
	
}

function PizzaDone (correct: boolean, usingDirty: boolean) {
	completedPizzas++;
	
	if (completedPizzas >= checkpoints[level]) {
		if (level == checkpoints.Length - 1)
			WinGame();
		else {
			DoRefills(false);
			completedPizzas = 0;
			level++;
		}
	}
}

function DoRefills(desperateRefill: boolean) {
	if (desperateRefill) {
		// what?
	} else {
		for (var i = 0; i < ingredientContainers.length; i++) {
			var theContainer = ingredientContainers[i] as IngredientContainer;
			theContainer.Refill(refills[level]);
		}
	}

}

function WinGame() {
	// WIN THE GAME? haha oh wow
}

function UpdateTexts () {

	// TIMER TEXT
	var totalSeconds : int = Mathf.Floor(timeLeft); // NEEDS to be int
	var seconds = totalSeconds % 60;
	var minutes = totalSeconds / 60;
	var strTime = minutes.ToString("00")+":"+seconds.ToString("00");
	timerText.text = "time left: "+strTime;
	
	// PIZZAS DONE TEXT
	pizzasDoneText.text = "pizzas done: "+completedPizzas;
	
	// NEXT REFILL TEXT
	nextRefillText.text = "next refill: "+(checkpoints[level] - completedPizzas);
	
	// ORDERS
	currentPizzaText.text = "current pizza: "+OrderManager.Instance().CurrentOrder().flavor.flavorName;
	   nextPizzaText.text =    "next pizza: "+OrderManager.Instance().NextOrder()   .flavor.flavorName;
}

