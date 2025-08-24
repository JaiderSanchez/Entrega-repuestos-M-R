/* =========================
   DATOS BASE
   ========================= */

// Si ya guardaste tus técnicos reales en localStorage, se cargarán de ahí.
// Si no, van estos de ejemplo (IDs NO secuenciales para simular tu caso real).
const TECNICOS_DEFAULT = [
  { id: 1, nombre: "Darío", piso: 2 },
  { id: 2, nombre: "Ányelo", piso: 2 },
  { id: 3, nombre: "Jairo", piso: 2 },
  { id: 4, nombre: "Henry Tumay", piso: 2 },
  { id: 6, nombre: "Andrés Palláres", piso: 2 },
  { id: 7, nombre: "Freddy Franco", piso: 2 },
  { id: 100, nombre: "Fransisco", piso: 1 },
  { id: 200, nombre: "Miguel", piso: 1 },
  { id: 300, nombre: "Freddy Montaña", piso: 1 },
  { id: 400, nombre: "Sebastián", piso: 1 },
];

// Puedes reemplazar por tu lista real de asesoras cuando quieras
const ASESORAS_DEFAULT = [
  "Zharon","Yaqueline","Mairen","Fraimel","Katherine","Leidy","Sandra"
];

// Inventario de ejemplo (estructura simple). Más adelante lo conectamos a DB.
const INVENTARIO_DEFAULT = {
  Repuestos: [
    { id: "REP-001", nombre: "Pastillas de freno del.", stock: 25 },
    { id: "REP-002", nombre: "Filtro de aire", stock: 40 },
    { id: "REP-003", nombre: "Cadena 428H", stock: 10 },
  ],
  Accesorios: [
    { id: "ACCE-004", nombre: "Manigueta", stock: 15},
    { id: "ACCE-005", nombre: "Motor de arranque", stock: 20},
    { id: "ACCE-006", nombre: "Válvulas", stock: 7},
  ],
  Aceites: [
    { id: "ACE-010", nombre: "Aceite 20W-50 mineral 1L", stock: 30 },
    { id: "ACE-020", nombre: "Aceite 10W-40 semisintético 1L", stock: 18 },
  ],
  Llantas: [
    { id: "LLA-090", nombre: "Llanta 90/90-17 del.", stock: 5 },
    { id: "LLA-100", nombre: "Llanta 100/90-17 tras.", stock: 3 },
  ],
  Neumáticos: [
    { id: "NEU-200", nombre: "Michellín", stock: 16},
    { id: "NEU-207", nombre: "Pirelli", stock: 6},
    { id: "NEU-211", nombre: "IRC-TIRE", stock: 30},
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const modalPin = document.getElementById("modal-pin");
  const inputPin = document.getElementById("input-pin");
  const btnDesbloquear = document.getElementById("btn-desbloquear");

  const PIN_CORRECTO = "2025";

  // Activa blur y abre modal
  document.body.classList.add("blur");
  if (typeof modalPin.showModal === "function") {
    modalPin.showModal();
  } else {
    // fallback si el navegador no soporta showModal
    modalPin.setAttribute("open", "");
  }

  btnDesbloquear.addEventListener("click", () => {
    if (inputPin.value === PIN_CORRECTO) {
      // Cerrar modal
      if (typeof modalPin.close === "function") {
        modalPin.close();
      } else {
        modalPin.removeAttribute("open");
      }

      // Quitar blur
      document.body.classList.remove("blur");
    } else {
      alert("PIN incorrecto. Intenta de nuevo.");
      inputPin.value = "";
      inputPin.focus();
    }
  });
});

/* =========================
   Utilidades de storage
   ========================= */
const LS_KEYS = {
  TECNICOS: "tecnicos",
  ASESORAS: "asesoras",
  INVENTARIO: "inventario",
  ENTREGAS: "entregas",
};

function getLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* Inicialización de datos si no existen */
(function bootstrapDefaults(){
  if(!localStorage.getItem(LS_KEYS.TECNICOS)) setLS(LS_KEYS.TECNICOS, TECNICOS_DEFAULT);
  if(!localStorage.getItem(LS_KEYS.ASESORAS)) setLS(LS_KEYS.ASESORAS, ASESORAS_DEFAULT);
  if(!localStorage.getItem(LS_KEYS.INVENTARIO)) setLS(LS_KEYS.INVENTARIO, INVENTARIO_DEFAULT);
  if(!localStorage.getItem(LS_KEYS.ENTREGAS)) setLS(LS_KEYS.ENTREGAS, []);
})();

/* =========================
   Renderizado de Asesoras
   ========================= */
const $asesoras = document.getElementById("asesoras");
const tplAsesora = document.getElementById("tpl-asesora");

function renderAsesoras(){
  const asesoras = getLS(LS_KEYS.ASESORAS, []);
  $asesoras.innerHTML = "";
  asesoras.forEach(nombre => {
    const node = tplAsesora.content.cloneNode(true);
    const $card = node.querySelector(".contenedor-asesora");
    const $img  = node.querySelector(".asesora__foto");
    const $name = node.querySelector(".asesora__nombre");
    const $btn  = node.querySelector(".btn-recibir");

    $img.alt = `Foto de ${nombre}`;
    $name.textContent = `Asesora: ${nombre}`;
    $btn.dataset.asesora = nombre;

    $btn.addEventListener("click", () => abrirModal(nombre));
    $asesoras.appendChild(node);
  });
}

/* =========================
   Modal de Recepción
   ========================= */
const $modal = document.getElementById("modal-recepcion");
const $form  = document.getElementById("form-recepcion");
const $asesoraSel = document.getElementById("asesora-seleccionada");
const $selTecnico = document.getElementById("select-tecnico");
const $selCategoria = document.getElementById("select-categoria");
const $inputItem = document.getElementById("input-item");
const $listaItems = document.getElementById("lista-items");
const $inputCantidad = document.getElementById("input-cantidad");
const $inputNotas = document.getElementById("input-notas");
const $btnCancelar = document.getElementById("btn-cancelar");
const $inputNumeroProductos = document.getElementById("input-numero-productos");
const inputCantidad = document.getElementById("input-cantidad");
const btnRegistrar = document.getElementById("btn-registrar");
const $btnAgregarProducto = document.getElementById("btn-agregar-producto");


$btnAgregarProducto.addEventListener("click", agregarProductoEntrega);

// Estado temporal de entrega múltiple
let entregaActual = [];

// Abrir modal
function abrirModal(asesora){
  $asesoraSel.value = asesora;
  poblarTecnicos();
  actualizarListaItems($selCategoria.value);
  $inputItem.value = "";
  $inputCantidad.value = "";
  $inputNotas.value = "";
  if(typeof $modal.showModal === "function"){
    $modal.showModal();
  } else {
    $modal.setAttribute("open","");
  }
}

// Cerrar modal
$btnCancelar.addEventListener("click", cerrarModal);
function cerrarModal(){
  if(typeof $modal.close === "function") $modal.close();
  else $modal.removeAttribute("open");
}

// Poblar select de técnicos por piso
function poblarTecnicos(){
  const tecnicos = getLS(LS_KEYS.TECNICOS, []);
  $selTecnico.innerHTML = "";

  const pisos = [...new Set(tecnicos.map(t => t.piso))].sort();
  pisos.forEach(piso => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = `Piso ${piso}`;
    tecnicos.filter(t => t.piso === piso).forEach(t => {
      const opt = document.createElement("option");
      opt.value = String(t.id);
      opt.textContent = `${t.nombre} (ID ${t.id})`;
      optgroup.appendChild(opt);
    });
    $selTecnico.appendChild(optgroup);
  });
}



$inputNumeroProductos.addEventListener("input", () => {
  const num = parseInt($inputNumeroProductos.value, 10);

  if (!isNaN(num) && num > 0) {
    // Habilitar campos
    $selCategoria.disabled = true;
    $inputItem.disabled = true;
    $inputCantidad.disabled = true;

    // Limpiar campos previos
    $selCategoria.value = "";
    $inputItem.value = "";
    $inputCantidad.value = "";
  } else {
    // Si el número es inválido, deshabilitar campos
    $selCategoria.disabled = true;
    $inputItem.disabled = true;
    $inputCantidad.disabled = true;

    // Limpiar campos
    $selCategoria.value = "";
    $inputItem.value = "";
    $inputCantidad.value = "";
  }
});



/* =========================
   Datalist de productos por categoría
   ========================= */
function actualizarListaItems(categoria){
  $listaItems.innerHTML = ""; // limpiar opciones
  const productos = INVENTARIO_DEFAULT[categoria] || [];
  productos.forEach(prod => {
    const option = document.createElement("option");
    option.value = prod.nombre; // lo que aparece en el input
    option.dataset.id = prod.id;
    option.dataset.stock = prod.stock;
    $listaItems.appendChild(option);
  });
}

// Escuchar cambios de categoría
$selCategoria.addEventListener("change", e => actualizarListaItems(e.target.value));

/* =========================
   Validar item ingresado
   ========================= */
function validarItemSeleccionado(itemNombre){
  const opciones = [...$listaItems.options].map(opt => opt.value);
  return opciones.includes(itemNombre);
}


// Manejo de la entrega múltiple: En vez de registrar directamente un solo ítem, se guardará temporalmente los productos que se van seleccionando en un array y se mostrará una pequeña lista antes de enviar al historial.

// let entregaActual = []; // Array temporal


// Nueva función: agregar producto a la entrega actual
function agregarProductoEntrega() {
  const categoria = $selCategoria.value;
  const nombre = $inputItem.value.trim();
  const cantidad = parseInt(inputCantidad.value, 10);

  if (!nombre || isNaN(cantidad) || cantidad < 1) {
    alert("Selecciona un producto válido y cantidad mayor a 0");
    return;
  }

  // Validar que el producto pertenezca a la categoría seleccionada
  const producto = INVENTARIO_DEFAULT[categoria].find(
    p => p.nombre.toLowerCase() === nombre.toLowerCase()
  );
  if (!producto) {
    alert(`El producto "${nombre}" no existe en la categoría "${categoria}"`);
    return;
  }

  // Buscar el producto en el inventario por nombre
  // const producto = INVENTARIO_DEFAULT[categoria].find(p => p.nombre === nombre);
  // if (!producto) {
  //   alert("El producto no existe en esta categoría");
  //   return;
  // }

  if (cantidad > producto.stock) {
    alert(`Stock insuficiente. Disponible: ${producto.stock}`);
    return;
  }

  // Agregar al array temporal
  entregaActual.push({
    id: producto.id,
    nombre: producto.nombre,
    categoria,
    cantidad
  });

  // Limpiar campos
  inputItem.value = "";
  inputCantidad.value = "";

  mostrarListaEntrega(); // actualizar preview
}

// Mostrar lista previa de productos
function mostrarListaEntrega() {
  let preview = document.getElementById("preview-entrega");
  if (!preview) {
    preview = document.createElement("div");
    preview.id = "preview-entrega";
    preview.classList.add("preview-entrega");
    btnRegistrar.parentNode.insertBefore(preview, btnRegistrar);
  }

  preview.innerHTML = "<h4>Productos en esta entrega:</h4>";
  const ul = document.createElement("ul");

  entregaActual.forEach((p, i) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} (${p.categoria}) - Cantidad: ${p.cantidad}`;
    // botón para eliminar
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "❌";
    btnQuitar.type = "button";
    btnQuitar.onclick = () => {
      entregaActual.splice(i, 1);
      mostrarListaEntrega();
    };
    li.appendChild(btnQuitar);
    ul.appendChild(li);
  });

  preview.appendChild(ul);
}

/* ========================= */



// Escucha del submit (finalizar registro en historial)
$form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (entregaActual.length === 0) {
    alert("Debes agregar al menos un producto a la entrega");
    return;
  }

  const asesora = document.getElementById("asesora-seleccionada").value;
  const tecnico = document.getElementById("select-tecnico").value;
  const notas = document.getElementById("input-notas").value;
  const fecha = new Date().toLocaleString();

  const tbodyHistorial = document.getElementById("tbody-historial");

  entregaActual.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${fecha}</td>
      <td>${asesora}</td>
      <td>${tecnico}</td>
      <td>${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>${p.cantidad}</td>
      <td>${notas}</td>
    `;
    tbodyHistorial.appendChild(fila);

    // Actualizar stock
    const prodInventario = INVENTARIO_DEFAULT[p.categoria].find(x => x.id === p.id);
    if (prodInventario) prodInventario.stock -= p.cantidad;
  });

  // Limpiar estado
  entregaActual = [];
  // document.getElementById("preview-entrega").innerHTML = "";
  const preview = document.getElementById("preview-entrega");
  if (preview) preview.innerHTML = "";
  e.target.reset();
});







function poblarItems() {
  const inventario = getLS(LS_KEYS.INVENTARIO, {});
  const categoria = $selCategoria.value;
  const items = inventario[categoria] || [];
  $listaItems.innerHTML = ""; // 👈 limpiar datalist

  items.forEach(it => {
    const opt = document.createElement("option");
    opt.value = it.id;

    if (it.stock <= 0) {
      opt.label = `${it.nombre} — Sin stock ❌`;
      opt.disabled = true; // 👈 no seleccionable
    } else {
      opt.label = `${it.nombre} — Stock: ${it.stock}`;
    }

    $listaItems.appendChild(opt);
  });
}

$selCategoria.addEventListener("change", poblarItems);

// Guardar entrega
$form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const asesora = $asesoraSel.value.trim();
  const tecnicoId = parseInt($selTecnico.value,10);
  const tecnicos = getLS(LS_KEYS.TECNICOS, []);
  const tecnico = tecnicos.find(t=>t.id===tecnicoId);

  const categoria = $selCategoria.value;
  const itemId = $selItem.value;
  const cantidad = parseInt($inputCantidad.value,10) || 0;
  const notas = $inputNotas.value.trim();

  if(!asesora || !tecnico || !itemId || cantidad < 1){
    alert("Por favor completa todos los campos con valores válidos.");
    return;
  }

  // Validar stock y existencia del item
  const inventario = getLS(LS_KEYS.INVENTARIO, {});
  const arr = inventario[categoria] || [];
  const item = arr.find(x=>x.id===itemId);

  if (!item) {
    alert("El producto seleccionado no pertenece a la categoría indicada.");
    return;
  }

  if(typeof item.stock === "number"){
    if(item.stock < cantidad){
      alert(`Stock insuficiente. Stock actual de "${item.nombre}": ${item.stock}.`);
      return;
    }
    item.stock -= cantidad; // descontamos
    setLS(LS_KEYS.INVENTARIO, inventario);
  }

  const entrega = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    asesora,
    tecnicoId,
    tecnicoNombre: tecnico.nombre,
    categoria,
    itemId,
    itemNombre: item.nombre,
    cantidad,
    notas
  };

  const entregas = getLS(LS_KEYS.ENTREGAS, []);
  entregas.push(entrega);
  setLS(LS_KEYS.ENTREGAS, entregas);

  // Refrescar UI
  renderHistorial();
  poblarItems(); // para actualizar stock mostrado
  cerrarModal();

  // Mensaje corto
  console.log("Entrega registrada:", entrega);
});


// Historial + filtros
const $tbodyHistorial = document.getElementById("tbody-historial");
const $filtro = document.getElementById("filtro-historial");

function renderHistorial(){
  const entregas = getLS(LS_KEYS.ENTREGAS, []).slice().reverse(); // recientes primero
  const q = ($filtro.value || "").toLowerCase();
  $tbodyHistorial.innerHTML = "";

  entregas
    .filter(e => {
      if (!q) return true;
      return (
        e.asesora.toLowerCase().includes(q) ||
        e.tecnicoNombre.toLowerCase().includes(q) ||
        e.itemNombre.toLowerCase().includes(q) ||
        e.categoria.toLowerCase().includes(q)
      );
    })
    .forEach(e => {
      const tr = document.createElement("tr");

      // Verificar stock actual del producto
      const inventario = getLS(LS_KEYS.INVENTARIO, {});
      const prodActual = (inventario[e.categoria] || []).find(p => p.id === e.itemId);
      let stockClass = "";
      if (!prodActual || prodActual.stock <= 0) stockClass = "sin-stock";
      else stockClass = "con-stock";

      tr.innerHTML = `
        <td>${formatFechaHora(e.timestamp)}</td>
        <td>${e.asesora}</td>
        <td>${e.tecnicoNombre} (ID ${e.tecnicoId})</td>
        <td class="${stockClass}">${e.itemNombre}</td>
        <td>${e.categoria}</td>
        <td>${e.cantidad}</td>
        <td>${e.notas || ""}</td>
      `;
      $tbodyHistorial.appendChild(tr);
    });
}
$filtro.addEventListener("input", renderHistorial);

function formatFechaHora(iso){
  const d = new Date(iso);
  // Hora local de Colombia. Si el equipo está en otra zona, mostrará su local.
  return d.toLocaleString("es-CO", { dateStyle:"short", timeStyle:"short" });
}


// Exportaciones

document.getElementById("btn-exportar-pdf").addEventListener("click", ()=>{
  const entregas = getLS(LS_KEYS.ENTREGAS, []);
  if(!entregas.length){ alert("No hay entregas para exportar."); return; }

  const html = `
  <html lang="es"><head>
    <meta charset="utf-8"/>
    <title>Entregas - Exportación</title>
    <style>
      body{ font-family: Arial, sans-serif; padding:16px; }
      h1{ font-size:18px; margin:0 0 10px; }
      table{ width:100%; border-collapse:collapse; }
      th,td{ border:1px solid #999; padding:6px 8px; font-size:12px; }
      thead th{ background:#f0f0f0; }
    </style>
  </head><body>
    <h1>Historial de entregas</h1>
    <table>
      <thead><tr>
        <th>Fecha y hora</th><th>Asesora</th><th>Técnico</th>
        <th>Categoría</th><th>Ítem</th><th>Cantidad</th><th>Notas</th>
      </tr></thead>
      <tbody>
        ${entregas.map(e=>`
          <tr>
            <td>${formatFechaHora(e.timestamp)}</td>
            <td>${e.asesora}</td>
            <td>${e.tecnicoNombre} (ID ${e.tecnicoId})</td>
            <td>${e.categoria}</td>
            <td>${e.itemNombre}</td>
            <td>${e.cantidad}</td>
            <td>${(e.notas || "").replace(/[<>]/g, c => c === "<" ? "&lt;" : "&gt;")}</td>
          </tr>`).join("")}
      </tbody>
    </table>
    <script>window.print();<\/script>
  </body></html>`;

  const w = window.open("", "_blank");
  if (!w) { alert("Habilita ventanas emergentes para exportar."); return; }
  w.document.open();
  w.document.write(html);
  w.document.close();
});

// Inicio

document.addEventListener("DOMContentLoaded", ()=>{
  renderAsesoras();
  renderHistorial();
});
