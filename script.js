menu.onclick = function function_name() {
	var x = document.getElementById('myTopnav');

	if(x.className === "topnav"){
		x.className += " responsive";
	}else{
		x.className = "topnav";
	}
}