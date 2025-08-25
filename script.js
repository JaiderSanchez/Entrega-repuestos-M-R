/* =========================
   DATOS BASE
   ========================= */

// Asesoras
const asesoras = [
  { id: 1, nombre: "Zharon" },
  { id: 2, nombre: "Yaqueline" },
  { id: 3, nombre: "Mairen" },
  { id: 4, nombre: "Fraimel" },
  { id: 5, nombre: "Katherine" },
  { id: 6, nombre: "Leidy" },
  { id: 7, nombre: "Sandra" }
];

// Técnicos
const tecnicos = [
  { id: 100, nombre: "Fransisco", piso: 1 },
  { id: 200, nombre: "Miguel", piso: 1 },
  { id: 300, nombre: "Freddy Montaña", piso: 1 },
  { id: 400, nombre: "Sebastián", piso: 1 },
  { id: 1, nombre: "Darío", piso: 2 },
  { id: 2, nombre: "Ányelo", piso: 2 },
  { id: 3, nombre: "Jairo", piso: 2 },
  { id: 4, nombre: "Henry Tumay", piso: 2 },
  { id: 6, nombre: "Andrés Palláres", piso: 2 },
  { id: 7, nombre: "Freddy Franco", piso: 2 }
];

// Inventario (20 productos iniciales)
const inventario = [
  { codigo: "011133", descripcion: "0.89 LUJO DE BARRA UNIVERSAL VERDE" },
  { codigo: "01310KSP912", descripcion: "0.28 KIT PISTON 0.50 CBF 150 HONDA FANALCA" },
  { codigo: "0315", descripcion: "KIT CUNAS REF SURTIDAS" },
  { codigo: "044254", descripcion: "0.05 GATO LATERAL NXR 125 BROSS S&K ATMOPEL" },
  { codigo: "054233", descripcion: "0.05 BUJE PORTA SPROCKET PULSAR 200" },
  { codigo: "10007552", descripcion: "VALVULA ESCAPE DER KMX;" },
  { codigo: "10030738", descripcion: "0.4 BUJIA DUKE 200-390" },
  { codigo: "10081479", descripcion: "PATA LATERAL ORIGINAL DE TVS 100" },
  { codigo: "1853", descripcion: "COPA 11MM HERRAMIENTA" },
  { codigo: "19055", descripcion: "0.44 GUAYA ACELERADOR BWS 100" },
  { codigo: "19817", descripcion: "0.47 BUJES TIJERA GS 125" },
  { codigo: "2146", descripcion: "VARILLA FRENO VIVA" },
  { codigo: "216072", descripcion: "0.17 FILTRO DE AIRE PULSAR 135-BOXER BM150-XCXD 125" },
  { codigo: "23T07SE", descripcion: "0.13 KIT COMPLETO KL/KLT/KLX 250" },
  { codigo: "2459", descripcion: "0.47 CABLE FRENO DEL. BOXER CT 100" },
  { codigo: "27AC002", descripcion: "0.13 BASE CARBURADOR SUZUKI AX100" },
  { codigo: "27T32SE-D", descripcion: "0.13 KIT COMPLETO DISCOVER 135 SUPR CULATA DARROWFLEX" },
  { codigo: "28JT020", descripcion: "0.13 JUEGO TAPA LATERALGN-H NEGRA" },
  { codigo: "34910-02900", descripcion: "0.81 GUAYA VELOCIMETRO FR80/100" },
  { codigo: "4001059", descripcion: "0.36 KIT BIELA HONDA XR 250 TORNADO" }
];

// const pisos = [1, 2]; // pisos donde hay técnicos


/* =========================
   LLENAR SELECT DE TÉCNICOS
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  const selectTecnico = document.getElementById("select-tecnico");
  if (!selectTecnico) return; // seguridad

  // Limpiar select antes de llenar
  selectTecnico.innerHTML = "";

  // 👇 Placeholder inicial
  const placeholder = document.createElement("option");
  placeholder.textContent = "Selecciona un técnico";
  placeholder.disabled = true;
  placeholder.selected = true;
  selectTecnico.appendChild(placeholder);

  // Sacar pisos únicos de los técnicos
  const pisosUnicos = [...new Set(tecnicos.map(t => t.piso))].sort();

  // Agrupar por piso
  pisosUnicos.forEach((piso) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = `Piso ${piso}`;

    tecnicos
      .filter((t) => t.piso === piso)
      .forEach((t) => {
        const option = document.createElement("option");
        option.value = t.id;
        option.textContent = `${t.nombre} (ID: ${t.id})`;
        optgroup.appendChild(option);
      });

    selectTecnico.appendChild(optgroup);
  });
});


// MANEJO PIN


// document.addEventListener("DOMContentLoaded", () => {
//   const modalPin = document.getElementById("modal-pin");
//   const inputPin = document.getElementById("input-pin");
//   const btnDesbloquear = document.getElementById("btn-desbloquear");

//   const PIN_CORRECTO = "2025";

//   // Activa blur y abre modal
//   document.body.classList.add("blur");
//   if (typeof modalPin.showModal === "function") {
//     modalPin.showModal();
//   } else {
//     // fallback si el navegador no soporta showModal
//     modalPin.setAttribute("open", "");
//   }

//   btnDesbloquear.addEventListener("click", () => {
//     if (inputPin.value === PIN_CORRECTO) {
//       // Cerrar modal
//       if (typeof modalPin.close === "function") {
//         modalPin.close();
//       } else {
//         modalPin.removeAttribute("open");
//       }

//       // Quitar blur
//       document.body.classList.remove("blur");
//     } else {
//       alert("PIN incorrecto. Intenta de nuevo.");
//       inputPin.value = "";
//       inputPin.focus();
//     }
//   });
// });


/* =========================
   MANEJO DEL MODAL
   ========================= */

// Referencias al DOM
const modal = document.getElementById("modalEntrega");
const inputAsesora = document.getElementById("input-asesora");
const btnCancelar = document.getElementById("btn-cancelar");

// Seleccionar todos los botones "Recibir repuesto"
const botonesAsesoras = document.querySelectorAll(".card-asesora button");

// Abrir modal al hacer clic en una asesora
botonesAsesoras.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const asesoraSeleccionada = asesoras[index];
    inputAsesora.value = asesoraSeleccionada.nombre; // mostrar nombre fijo
    modal.style.display = "flex"; // mostrar modal
  });
});

// Cerrar modal con botón Cancelar
btnCancelar.addEventListener("click", () => {
  modal.style.display = "none";
  document.getElementById("formEntrega").reset(); // limpia el formulario
});

// Cerrar modal si hacen clic fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.getElementById("formEntrega").reset();
  }
});




const inputNumProductos = document.getElementById("input-num-productos");
const contenedorProductos = document.getElementById("contenedor-productos");

// Escuchar cambios en el número de productos
inputNumProductos.addEventListener("input", () => {
  contenedorProductos.innerHTML = ""; // limpiar antes de generar nuevos

  const num = parseInt(inputNumProductos.value) || 0;

  for (let i = 1; i <= num; i++) {
    // Crear contenedor de producto
    const div = document.createElement("div");
    div.classList.add("producto-item");

    // Plantilla de un producto dinámico
    div.innerHTML = `
      <h4>Producto ${i}</h4>
      <label>Código:</label>
      <input type="text" name="codigo_${i}" required>
      
      <label>Descripción:</label>
      <input type="text" name="descripcion_${i}" required>
      
      <label>Cantidad:</label>
      <input type="number" name="cantidad_${i}" min="1" value="1" required>
    `;

    contenedorProductos.appendChild(div);
  }
});
