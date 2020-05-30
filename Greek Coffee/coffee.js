$('.carousel').carousel('cycle');

function myFunction() {
	var x = document.getElementById("list").value;
	document.getElementById("mySelect").innerHTML = "You selected: " + x;
}