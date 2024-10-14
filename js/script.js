document.addEventListener("DOMContentLoaded", function() {
  var piloto = document.getElementsByName("piloto");
  var nombre = document.getElementsByName("nombre_aficionado")[0];
  var correo = document.getElementsByName("correo_electronico")[0];

  function revisa() {
      if (nombre.value.trim() === "") {
          alert("Debe digitar su nombre, por favor");
          nombre.focus();
          return false;
      } else if (correo.value.trim() === "") {
          alert("Debe digitar su correo, por favor");
          correo.focus();
          return false;
      } else {
          var pilotoSeleccionado = false;
          for (var i = 0; i < piloto.length; i++) {
              if (piloto[i].checked) {
                  pilotoSeleccionado = true;
                  break;
              }
          }
          if (!pilotoSeleccionado) {
              alert("Debe seleccionar un piloto, por favor");
              return false;
          }

          alert("Voto guardado correctamente");
          document.getElementById("form").reset(); // Reiniciar el formulario
          window.scrollTo(0, 0); // Desplazar hacia la parte superior de la página
          return false; // Evitar que el formulario se envíe
      }
  }

  document.getElementById("form").onsubmit = revisa;
});
