#pragma strict

var cameraAudio : AudioSource;

var pizzaButtons: GameObject[];

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
var completedPizzasSinceStart: int = 0;


var currentPizzaTextAside = false;
var currentPizzaTextAnim: Animator;


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
	Application.LoadLevel("lose");
}

function PizzaDone (correct: boolean, usingDirty: boolean, dirtyIngredient: Ingredient) {

	if (correct) {
		completedPizzas++;
		completedPizzasSinceStart++;
	}
	
	var announcer = ColorTextManager.Instance();
	
	if (correct && !usingDirty) {
		timeLeft += 5;
		announcer.AnnounceRandom(true);
	} else if (!correct) {
		timeLeft -= 5;
		announcer.AnnounceRandom(false);
	} else { // correct but dirty
	
// slimy - salsa
// harsh - queso
// tangy - cebolla
// crunchy - cucas
		announcer.AnnounceFlavor(dirtyIngredient);
		
	}
	
	if (completedPizzas >= checkpoints[level]) {
		if (level == checkpoints.Length - 1)
			WinGame();
		else {
			DoRefills(false);
			completedPizzas = 0;
			level++;
			timeLeft += 30;
		}
	}
	
	
}

function DoRefills(desperateRefill: boolean) {
	ColorTextManager.Instance().AnnounceRefill();
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
	// i cant belive i won
	Application.LoadLevel("win");
}

function UpdateTexts () {

	// TIMER TEXT
	var totalSeconds : int = Mathf.Floor(timeLeft); // NEEDS to be int
	var seconds = totalSeconds % 60;
	var minutes = totalSeconds / 60;
	var strTime = minutes.ToString("00")+":"+seconds.ToString("00");
	timerText.text = strTime;
	
	// PIZZAS DONE TEXT
	pizzasDoneText.text = "done: "+completedPizzasSinceStart;
	
	// NEXT REFILL TEXT
	nextRefillText.text = "next refill: "+(checkpoints[level] - completedPizzas)+" pizzas";
	
	// ORDERS
	currentPizzaText.text = ""+		 OrderManager.Instance().CurrentOrder().flavor.flavorName;
	   nextPizzaText.text = "next: "+OrderManager.Instance().NextOrder()   .flavor.flavorName;
	
	var pizzaChars = currentPizzaText.text.Length + nextPizzaText.text.Length;
	
	var aside = pizzaChars > 38;
	if (currentPizzaTextAside != aside) {
		currentPizzaTextAnim.SetTrigger("Toggle");
		currentPizzaTextAside = aside;
	}
		
		
	Debug.Log(pizzaChars+" _ "+Time.time);
}

function EnablePizzaButtons() {
	SetPizzaButtonsEnabled(true);
}

function DisablePizzaButtons() {
	SetPizzaButtonsEnabled(false);
}

function SetPizzaButtonsEnabled (enabled: boolean) {
	for (var i = 0; i < pizzaButtons.length; i++) {
	
		var boxCollider = pizzaButtons[i].GetComponent(BoxCollider2D);
		if (boxCollider)
			boxCollider.enabled = enabled;
			
		var circleCollider = pizzaButtons[i].GetComponent(CircleCollider2D);
		if (circleCollider)
			circleCollider.enabled = enabled;
	}
}

function HurryUp () {
//	cameraAudio.clip = 
}
