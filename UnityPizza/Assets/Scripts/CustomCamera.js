#pragma strict

var screenLimits: BoxCollider2D;
var lastAspect: float;

function Update () {
	if (camera.aspect != lastAspect)
		AdjustCamera();
}

function Start () {
	AdjustCamera();
}

function AdjustCamera () {
	lastAspect = camera.aspect;
	
	var extents = screenLimits.bounds.extents;
	
	var halfWidth = extents.x;
	var halfHeight = extents.y;
	
	var ortho = halfWidth / camera.aspect;
	if (ortho < halfHeight)
		ortho = halfHeight;
	camera.orthographicSize = ortho;
}