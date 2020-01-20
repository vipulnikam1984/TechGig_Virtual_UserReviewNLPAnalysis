function (e)
{
	var allElements = document.getElementsByClassName("CamDho");
	var array = [];
	var output;
	

		for (var i=0; i<allElements.length; i++) 
		{
			array.push(allElements[i].innerHTML);
		}
	output = array[0]+'|'+array[1]+'|'+array[2]+'|'+array[3]+'|'+array[4];
	return output;
	
}