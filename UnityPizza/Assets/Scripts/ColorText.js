#pragma strict

var anim: Animator;

function Slide () {
	anim.SetTrigger("SlideTrigger");
	GetComponent(AudioSource).audio.Play();
}