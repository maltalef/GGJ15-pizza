using UnityEngine;
using System.Collections;

public class Disclaimer : MonoBehaviour {

	public string level;
	private float conTimer = 0f;
	
	// Update is called once per frame
	void Update () 
	{
		conTimer += Time.deltaTime ;

		if( conTimer >= 5.0f )
		{
			Application.LoadLevel(level);
		}

	}

}
