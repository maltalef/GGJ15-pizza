#pragma strict


static var WIN = "win";
static var LOSE = "lose";
static var INTRO = "intro";

static var what: String = INTRO;

var stampIntro: UI.Image;
var stampWin: UI.Image;
var stampLose: UI.Image;

function Start () {
	stampIntro.enabled = (what == INTRO);
	stampWin.enabled = (what == WIN);
	stampLose.enabled = (what == LOSE);
}
