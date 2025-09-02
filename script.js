document.querySelector("form").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;

    if (!nombre || !direccion) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); 
    }
});
