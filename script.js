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

inputNumProductos.addEventListener("input", () => {
  contenedorProductos.innerHTML = ""; // limpiar antes de generar

  const num = parseInt(inputNumProductos.value) || 0;

  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div");
    div.classList.add("producto-item");

    // Cada input de código tendrá su propio datalist
    div.innerHTML = `
      <h4>Producto ${i}</h4>

      <label>Código:</label>
      <input type="text" name="codigo_${i}" class="input-codigo" list="datalist-codigos-${i}" required>
      <datalist id="datalist-codigos-${i}"></datalist>

      <label>Descripción:</label>
      <input type="text" name="descripcion_${i}" class="input-descripcion" required>

      <label>Cantidad:</label>
      <input type="number" name="cantidad_${i}" min="1" value="1" required>
    `;

    contenedorProductos.appendChild(div);

    // --- Autocompletado con inventario ---
    const inputCodigo = div.querySelector(".input-codigo");
    const inputDescripcion = div.querySelector(".input-descripcion");
    const datalist = div.querySelector("datalist");

    // Llenar el datalist con TODOS los códigos (una sola vez al crear)
    inventario.forEach(p => {
      const option = document.createElement("option");
      option.value = p.codigo;
      option.textContent = p.descripcion; // 👈 aunque no todos los navegadores muestran textContent
      datalist.appendChild(option);
    });

    // Cuando el usuario escribe o selecciona un código
    inputCodigo.addEventListener("input", () => {
      const codigoIngresado = inputCodigo.value.trim();

      const producto = inventario.find(p => p.codigo === codigoIngresado);

      if (producto) {
        inputDescripcion.value = producto.descripcion;
      } else {
        inputDescripcion.value = "";
      }
    });
  }
});


// =============================
// REGISTRAR ENTREGA
// =============================
document.getElementById("formEntrega").addEventListener("submit", function (e) {
  e.preventDefault();

  const asesora = document.getElementById("input-asesora").value;
  const tecnico = document.getElementById("select-tecnico").selectedOptions[0].text;
  const numProductos = parseInt(document.getElementById("input-num-productos").value, 10);
  const notas = document.getElementById("input-notas").value;

  const tbody = document.querySelector("#tablaHistorial tbody");
  const historial = JSON.parse(localStorage.getItem("historialEntregas")) || [];


  // recorrer los productos
  for (let i = 1; i <= numProductos; i++) {
    const codigo = document.querySelector(`input[name="codigo_${i}"]`)?.value || "";
    const descripcion = document.querySelector(`input[name="descripcion_${i}"]`)?.value || "";
    const cantidad = document.querySelector(`input[name="cantidad_${i}"]`)?.value || "";

    if (!codigo || !descripcion || !cantidad) continue; // no registrar si está vacío

    const entrega = {
      fecha: new Date().toLocaleString(),
      asesora,
      tecnico,
      codigo,
      descripcion,
      cantidad,
      notas: notas || "" // si no escribe nada queda vacío
    };

    // Crear fila
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${entrega.fecha}</td>
      <td>${entrega.asesora}</td>
      <td>${entrega.tecnico}</td>
      <td>${entrega.codigo}</td>
      <td>${entrega.descripcion}</td>
      <td>${entrega.cantidad}</td>
      <td>${entrega.notas}</td>
    `;
    tbody.appendChild(fila);

    // Guardar en historial local
    historial.push(entrega);
  }

  // actualizar localStorage
  localStorage.setItem("historialEntregas", JSON.stringify(historial));


  // cerrar modal y limpiar formulario
  document.getElementById("modalEntrega").style.display = "none";
  document.getElementById("formEntrega").reset();
  document.getElementById("contenedor-productos").innerHTML = "";
});


/* =========================
   LOCALSTORAGE: HISTORIAL
   ========================= */

// Guardar historial en localStorage
function guardarHistorial() {
  const filas = [];
  document.querySelectorAll("#tablaHistorial tbody tr").forEach(tr => {
    const celdas = tr.querySelectorAll("td");
    filas.push({
      fecha: celdas[0].textContent,
      asesora: celdas[1].textContent,
      tecnico: celdas[2].textContent,
      codigo: celdas[3].textContent,
      descripcion: celdas[4].textContent,
      cantidad: celdas[5].textContent
    });
  });
  localStorage.setItem("historialEntregas", JSON.stringify(filas));
}

// Cargar historial desde localStorage
function cargarHistorial() {
  const historialGuardado = localStorage.getItem("historialEntregas");
  if (!historialGuardado) return;

  const filas = JSON.parse(historialGuardado);
  const tbody = document.querySelector("#tablaHistorial tbody");

  filas.forEach(fila => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${fila.fecha}</td>
      <td>${fila.asesora}</td>
      <td>${fila.tecnico}</td>
      <td>${fila.codigo}</td>
      <td>${fila.descripcion}</td>
      <td>${fila.cantidad}</td>
      <td>${fila.notas}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarHistorial);

// Modificar tu submit de registro para que guarde después de agregar las filas:
document.getElementById("formEntrega").addEventListener("submit", function (e) {
  e.preventDefault();

  const asesora = document.getElementById("input-asesora").value;
  const tecnico = document.getElementById("select-tecnico").value;
  const tecnicoTexto = document.querySelector(`#select-tecnico option[value="${tecnico}"]`)?.textContent || "";

  const numProductos = parseInt(document.getElementById("input-num-productos").value, 10);
  const tbody = document.querySelector("#tablaHistorial tbody");

  for (let i = 1; i <= numProductos; i++) {
    const codigo = document.querySelector(`[name="codigo_${i}"]`)?.value || "";
    const descripcion = document.querySelector(`[name="descripcion_${i}"]`)?.value || "";
    const cantidad = document.querySelector(`[name="cantidad_${i}"]`)?.value || "1";

    if (!codigo || !descripcion) continue;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${new Date().toLocaleString()}</td>
      <td>${asesora}</td>
      <td>${tecnicoTexto}</td>
      <td>${codigo}</td>
      <td>${descripcion}</td>
      <td>${cantidad}</td>
    `;
    tbody.appendChild(tr);
  }

  // ✅ Guardar en localStorage después de registrar
  guardarHistorial();

  // Resetear y cerrar modal
  this.reset();
  document.getElementById("modalEntrega").style.display = "none";
});

// =============================
// BORRAR HISTORIAL
// =============================
document.getElementById("borrarHistorial").addEventListener("click", function () {
  if (confirm("¿Seguro que quieres borrar todo el historial de entregas?")) {
    localStorage.removeItem("historialEntregas"); // Limpiar localStorage
    document.querySelector("#tablaHistorial tbody").innerHTML = ""; // Limpiar tabla
  }
});

// =============================
// FILTROS DE BUSQUEDA
// =============================

const filtroAsesora = document.getElementById("filtroAsesora");
const filtroTecnico = document.getElementById("filtroTecnico");
const filtroCodigo = document.getElementById("filtroCodigo");

function aplicarFiltros() {
  const valorAsesora = filtroAsesora.value.toLowerCase();
  const valorTecnico = filtroTecnico.value.toLowerCase();
  const valorCodigo = filtroCodigo.value.toLowerCase();

  const filas = document.querySelectorAll("#tablaHistorial tbody tr");

  filas.forEach(fila => {
    const asesora = fila.cells[1]?.textContent.toLowerCase() || "";
    const tecnico = fila.cells[2]?.textContent.toLowerCase() || "";
    const codigo = fila.cells[3]?.textContent.toLowerCase() || "";

    // Mostrar solo si cumple con los filtros
    const coincide =
      asesora.includes(valorAsesora) &&
      tecnico.includes(valorTecnico) &&
      codigo.includes(valorCodigo);

    fila.style.display = coincide ? "" : "none";
  });
}

// Escuchar cambios en los inputs
[filtroAsesora, filtroTecnico, filtroCodigo].forEach(input => {
  input.addEventListener("input", aplicarFiltros);
});


// =============================
// EXPORTAR PDF
// =============================
const btnExportarPDF = document.getElementById("exportarPDF");

btnExportarPDF.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Título
  doc.setFontSize(16);
  doc.text("Moto Reyes - Sede principal", 10, 11);
  doc.text("Informe - Historial de entregas auxiliar", 19, 20);
  
  // Convertir tabla a PDF
  doc.autoTable({
    html: "#tablaHistorial",  // usa la tabla directamente
    startY: 25,               // margen desde arriba
    styles: { fontSize: 10 },
    headStyles: { fillColor: [52, 73, 94] }, // color gris oscuro
  });

  // guardar PDF
  doc.save("Historial_Entregas.pdf");
});


// ============================
// BLOQUEO POR PIN
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const modalPin = document.getElementById("modal-pin");
  const inputPin = document.getElementById("input-pin");
  const btnDesbloquear = document.getElementById("btn-desbloquear");

  const PIN_CORRECTO = "2025";

  // Activar blur en todo el body
  document.body.classList.add("blur");

  // Mostrar modal al cargar (con fallback)
  if (typeof modalPin.showModal === "function") {
    modalPin.showModal();
  } else {
    // Fallback Safari / navegadores sin <dialog>
    modalPin.style.display = "block";
    modalPin.style.position = "fixed";
    modalPin.style.top = "50%";
    modalPin.style.left = "50%";
    modalPin.style.transform = "translate(-50%, -50%)";
    modalPin.style.zIndex = "10000";
  }

  // Función de desbloqueo
  function desbloquear() {
    if (inputPin.value === PIN_CORRECTO) {
      if (typeof modalPin.close === "function") {
        modalPin.close();
      } else {
        modalPin.style.display = "none";
      }
      document.body.classList.remove("blur");
    } else {
      alert("❌ PIN incorrecto. Intenta de nuevo.");
      inputPin.value = "";
      inputPin.focus();
    }
  }

  // Evento click
  btnDesbloquear.addEventListener("click", desbloquear);

  // Permitir Enter en el input
  inputPin.addEventListener("keyup", (e) => {
    if (e.key === "Enter") desbloquear();
  });

  // Forzar foco en el input
  inputPin.focus();
});
