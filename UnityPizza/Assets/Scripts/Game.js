#pragma strict

var text: UI.Text;
var text2: UI.Text;

// SINGLETON START

static var theInstance : Game;

static function Instance () : Game {
	return theInstance;
}

function Awake () {
	theInstance = this;
}

// SINGLETON END


function SetText(theText: String) {
	text.text = theText;
}

function SetText2(theText: String) {
	text2.text = theText;
}

function AppendText(theText: String) {
	text.text += theText;
}
