const botonToast = document.getElementById("ostrarBtnToast");

botonToast.onclick = mostrarToast;
function mostrarToast() {
  Toastify({
    text: "Mostrar toast",
    duration: 3000,
    close: true,
  }).showToast();
}