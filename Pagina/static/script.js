    let paginaActual = 0;
    const idsPaginas = ["Portada", "indice", "pagina2","pagina3"]; // Puedes modificar esto

    function mostrarPaginaPorNumero(numero) {
      const paginas = document.querySelectorAll(".pagina");
      paginas.forEach((pagina, index) => {
        pagina.classList.remove("actual", "volteada");
        if (index < numero) pagina.classList.add("volteada");
      });

      const nueva = document.getElementById(idsPaginas[numero]);
      if (nueva) {
        nueva.classList.add("actual");
        paginaActual = numero;
      }
    }

    function paginaSiguiente() {
      if (paginaActual < idsPaginas.length - 1) {
        mostrarPaginaPorNumero(paginaActual + 1);
      }
    }

    function paginaAnterior() {
      if (paginaActual > 0) {
        mostrarPaginaPorNumero(paginaActual - 1);
      }
    }

    function abrirMenu() {
      document.getElementById("menuLateral").style.width = "250px";
    }

    function cerrarMenu() {
      document.getElementById("menuLateral").style.width = "0";
    }


   document.addEventListener("DOMContentLoaded", () => {
      mostrarPaginaPorNumero(paginaActual);
    });

   document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") paginaAnterior(-1);
      if (e.key === "ArrowRight") paginaSiguiente(1);
    });



