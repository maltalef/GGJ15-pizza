#pragma strict

// http://gamedev.stackexchange.com/a/89973/12103

// background is 1122 x 631 px
// in world units, it should be 11.22 x 6.31
// alas, it's something else.
// whatever :)

var background: SpriteRenderer;

function Start () {
	
	var width = background.bounds.extents.x * 2;
	var height = background.bounds.extents.y * 2;
	
	var ortho = width / camera.aspect / 2f;
	if (ortho < height / 2f)
		ortho = height / 2f;
	camera.orthographicSize = ortho;//1f / camera.aspect * width / 2f;
}