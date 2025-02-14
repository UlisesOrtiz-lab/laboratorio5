
function cambiarColor(element) {
    element.style.backgroundColor = colores[element.classList[1]];
}

function restaurarColor(element) {
    element.style.backgroundColor = "";
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function cambiarTexto(element) {
    element.innerHTML = "<h2>Interestelar</h2>";
}

function reproducirAudio() {
    let audio = new Audio('song.mp3');
    audio.play();
}

function mostrarAlerta(event) {
    event.preventDefault();
    alert("Admiro a Nikola Tesla");
}

function cambiarFondo() {
    document.body.style.backgroundColor = 'lightyellow';
}
