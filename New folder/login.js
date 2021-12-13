	function checkFormEntry()
	{
		document.getElementById("errorMessage").innerHTML="";
		document.getElementById("successMessage").innerHTML="";
	
		var errors="";
	
	
		if(document.getElementById("password").value.length<8)
		{
			alert("Please Type Correct 8 digit Password");
		}
	

		else if(errors!="")
		{
			document.getElementById("errorMessage").innerHTML=errors;
			
		}
		else{
			window.location.href="homepage.html";
			
		}
		return false; 
	}

document.getElementById("loginpage").onsubmit=checkFormEntry;