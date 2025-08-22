/* =========================
   Datos base (puedes editar)
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
  Aceites: [
    { id: "ACE-010", nombre: "Aceite 20W-50 mineral 1L", stock: 30 },
    { id: "ACE-020", nombre: "Aceite 10W-40 semisintético 1L", stock: 18 },
  ],
  Llantas: [
    { id: "LLA-090", nombre: "Llanta 90/90-17 del.", stock: 5 },
    { id: "LLA-100", nombre: "Llanta 100/90-17 tras.", stock: 3 },
  ],
};

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
   Render de Asesoras
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
const $selItem = document.getElementById("select-item");
const $inputCantidad = document.getElementById("input-cantidad");
const $inputNotas = document.getElementById("input-notas");
const $btnCancelar = document.getElementById("btn-cancelar");

function abrirModal(asesora){
  $asesoraSel.value = asesora;
  poblarTecnicos();
  poblarItems();
  $inputCantidad.value = "";
  $inputNotas.value = "";
  if(typeof $modal.showModal === "function"){
    $modal.showModal();
  } else {
    // fallback muy básico
    $modal.setAttribute("open","");
  }
}
$btnCancelar.addEventListener("click", ()=> cerrarModal());
function cerrarModal(){
  if(typeof $modal.close === "function") $modal.close();
  else $modal.removeAttribute("open");
}

function poblarTecnicos(){
  const tecnicos = getLS(LS_KEYS.TECNICOS, []);
  $selTecnico.innerHTML = "";

  const pisos = [...new Set(tecnicos.map(t=>t.piso))].sort();
  pisos.forEach(piso => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = `Piso ${piso}`;
    tecnicos.filter(t=>t.piso===piso).forEach(t => {
      const opt = document.createElement("option");
      opt.value = String(t.id);
      opt.textContent = `${t.nombre} (ID ${t.id})`;
      optgroup.appendChild(opt);
    });
    $selTecnico.appendChild(optgroup);
  });
}

function poblarItems(){
  const inventario = getLS(LS_KEYS.INVENTARIO, {});
  const categoria = $selCategoria.value;
  const items = inventario[categoria] || [];
  $selItem.innerHTML = "";

  items.forEach(it => {
    const opt = document.createElement("option");
    opt.value = it.id;
    opt.textContent = `${it.nombre} — Stock: ${it.stock}`;
    $selItem.appendChild(opt);
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

  // Validar stock (demo)
  const inventario = getLS(LS_KEYS.INVENTARIO, {});
  const arr = inventario[categoria] || [];
  const item = arr.find(x=>x.id===itemId);
  if(item && typeof item.stock === "number"){
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
    itemNombre: item ? item.nombre : itemId,
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
    .filter(e=>{
      if(!q) return true;
      return (
        e.asesora.toLowerCase().includes(q) ||
        e.tecnicoNombre.toLowerCase().includes(q) ||
        e.itemNombre.toLowerCase().includes(q) ||
        e.categoria.toLowerCase().includes(q)
      );
    })
    .forEach(e=>{
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${formatFechaHora(e.timestamp)}</td>
        <td>${e.asesora}</td>
        <td>${e.tecnicoNombre} (ID ${e.tecnicoId})</td>
        <td>${e.itemNombre}</td>
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

document.getElementById("btn-exportar-csv").addEventListener("click", ()=>{
  const entregas = getLS(LS_KEYS.ENTREGAS, []);
  if(!entregas.length){ alert("No hay entregas para exportar."); return; }
  const rows = [
    ["id","fecha_hora","asesora","tecnico_id","tecnico_nombre","categoria","item_id","item_nombre","cantidad","notas"]
  ];
  entregas.forEach(e=>{
    rows.push([
      e.id,
      new Date(e.timestamp).toISOString(),
      e.asesora,
      e.tecnicoId,
      e.tecnicoNombre,
      e.categoria,
      e.itemId,
      e.itemNombre,
      e.cantidad,
      (e.notas || "").replace(/\n/g," ")
    ]);
  });
  const csv = rows.map(r=> r.map(escapeCSV).join(",")).join("\n");
  const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `entregas_${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

function escapeCSV(v){
  const s = String(v ?? "");
  if(/[",\n]/.test(s)) return `"${s.replace(/"/g,'""')}"`;
  return s;
}

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
            <td>${(e.notas || "").replace(/</g,"&lt;")}</td>
          </tr>`).join("")}
      </tbody>
    </table>
    <script>window.print();<\/script>
  </body></html>`;

  const w = window.open("", "_blank");
  w.document.open();
  w.document.write(html);
  w.document.close();
});

// Inicio

document.addEventListener("DOMContentLoaded", ()=>{
  renderAsesoras();
  renderHistorial();
});
