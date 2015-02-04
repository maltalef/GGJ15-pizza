#pragma strict

var anim: Animator;

function Slide () {
	anim.SetTrigger("SlideTrigger");
	GetComponent(AudioSource).audio.Play();
}


// for the SOUNDTEST scene only
//function OnMouseDown(){
//	GetComponent(AudioSource).audio.Play();
//}