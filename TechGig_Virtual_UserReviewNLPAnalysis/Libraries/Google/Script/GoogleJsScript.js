function (e)
{

	var allElements = document.getElementsByClassName("hVgDpd");
	var array = [];
	var value;
	var output;
	var regex;

		for (var i=0; i<allElements.length; i++) 
		{
			value = allElements[i].getAttribute('aria-label');
			if(i<5)
			{
			regex = value.match(/(.*(?=\s+\d{1}))/i);
			array.push(regex[0]);
			//array.push(value);
			}
			else
			{
			}
			
		}
		
		output = array[0]+'|'+array[1]+'|'+array[2]+'|'+array[3]+'|'+array[4];
		//output = allElements.length;
		//return output;
		return output;

}
