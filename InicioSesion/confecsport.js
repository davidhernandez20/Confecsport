function mostrarDiv(id) {
    // Ocultar todos los divs
    var divs = document.getElementsByClassName('divs');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove('active');
    }

    // Mostrar el div especificado
    var div = document.getElementById(id);
    div.classList.add('active');
}

        const colorSelect = document.getElementById("colorSelect");
        const customColor = document.getElementById("customColor");
        
        colorSelect.addEventListener("change", function() {
            if (colorSelect.value === "custom") {
                customColor.style.display = "block";
            } else {
                customColor.style.display = "none";
            }
        });
