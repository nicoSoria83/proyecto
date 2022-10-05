const botonToast = document.getElementById("mostrarBtnToast")
botonToast.onclick = mostrarToast

function mostrarToast() {
	Toastify({
 	text: "This is a toast",
  	duration: 3000,
  	close: true,
  	gravity: "bottom", // `top` or `bottom`
  	position: "right", // `left`, `center` or `right`
  	stopOnFocus: true, // Prevents dismissing of toast on hover
  	style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  	},
  onClick: function(){} // Callback after click
}).showToast();
}