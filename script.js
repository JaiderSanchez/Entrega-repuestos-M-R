/* =========================
   DATOS BASE
   ========================= */

// Asesoras
const asesoras = [
  { id: 1, nombre: "Zharon" },
  { id: 2, nombre: "Patricia" },
  { id: 3, nombre: "Yaqueline" },
  { id: 4, nombre: "Mairen" },
  { id: 5, nombre: "Fraimel" },
  { id: 6, nombre: "Katherine" },
  { id: 7, nombre: "Leidy" },
  { id: 8, nombre: "Sandra" }
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
  { codigo: "4001059", descripcion: "0.36 KIT BIELA HONDA XR 250 TORNADO" },
  { codigo: "4852", descripcion: "CAUCHOS PRENSA FZ-16"},
  { codigo: "7700149093781", descripcion: "0.12 CUBIERTA VELOCIMETRO 200CR4"},
  { codigo: "7701023734271", descripcion: "0.12 Eje Abrebandas 125W Rp"},
  { codigo: "7705946273879", descripcion: "0.12 GUARD TRAS INT 110X"},
  { codigo: "7705946612289", descripcion: "0.12 Jgo x 4 Engranaje Tracción KONTROL INDIA TORITO Rp"},
  { codigo: "7705946698177", descripcion: "0.12 GUARD DELAN INTER 200TTR"},
  { codigo: "7705946921770", descripcion: "0.12 Kit Piston KONTROL 0.50 3W180 Rp"},
  { codigo: "7705946937771", descripcion: "0.12 CASC KTL M65 URBAN GR/RJL"},
  { codigo: "7707349849705", descripcion: "PITO DISCO TBAJO ROJO"},
  { codigo: "827367", descripcion: "0.14 CARENAJE COMPLETO PLATINO100"},
  { codigo: "AC2000057700", descripcion: "0,07 CANGURO YAMAHA NEON"},
  { codigo: "BB4295", descripcion: "0.25 MANIGUETA CLUTCH CB125 F/DREAM NEO"},
  { codigo: "BN359814", descripcion: "0.25 TENSORES CADENA IZQ/DER CB 160"},
  { codigo: "BU0853", descripcion: "0.25 COMANDO OZQ AKT 125 TT (2008-2011)"},
  { codigo: "CAREN0113NAL", descripcion: "0.48 CARENAJE PULSAR 135 TAPAS AZULES"},
  { codigo: "CO_2", descripcion: "INCENTIVOS GESTION TABLETS 1-957 DICIEMBRE 2023"},
  { codigo: "DF590", descripcion: "0.23 COLA SILLIN PULSAR 180 VERDE"},
  { codigo: "E214509", descripcion: "0.49 BENDIX AK125S/SL/NKD/AK150/SG150/JC125"},
  { codigo: "IMCOM58", descripcion: "0.02  COMBO FAROLA + CARENAJE VISOR  BOXER-100 CT NEGRO VERDE"},
  { codigo: "IMKTT11", descripcion: "0.02 KIT TIJERA BOXER CT-100"},
  { codigo: "IMMTR44", descripcion: "0.02 MOTOR DE ARRANQUE 200 NS"},
  { codigo: "K109044100", descripcion: "0.12 Jgo x 4 Antivibrante Acople Eje VARROC TORITO Rp"},
  { codigo: "M1040190", descripcion: "0.12 Tapa Diafrag Carburador RTR Rp"},
  { codigo: "M1200760", descripcion: "0.04 CHAVETA VOLANTE"},
  { codigo: "M7200460", descripcion: "0.12 Arandela Empuje Eje Clutch RTR Rp"},
  { codigo: "MR0.01.000322", descripcion: "0.01 ALETAS TANQUE CBF 150 INVICTA"},
  { codigo: "MR0.01.00299", descripcion: "0.01 BARRA TELESCOPICO VARIOS MR"},
  { codigo: "MR0.01.00609", descripcion: "0.01 GUAYAS SUELTAS"},
  { codigo: "MR0.01.00675", descripcion: "0.01 FILTRO MALLA SUELTOS"},
  { codigo: "MR0.01.00675", descripcion: "0.01 FILTRO MALLA SUELTOSX"},
  { codigo: "MR0.55.00072", descripcion: "0.55 CAUCHO CAMPANA ECO/C-70/C90 AKT 110 /SPLENDOR DORIKCO"},
  { codigo: "MT00276", descripcion: "0.55 TENSOR GUAYA PEQUEÑO UNIVERSAL MATSUMOTOS"},
  { codigo: "N9113990", descripcion: "0.04 BUJE PORTASPROCKET APACHE"},
  { codigo: "N9200480", descripcion: "0.12 Tornillo Piñon Arbol De Levas 200RTR Rp"},
  { codigo: "N9322000", descripcion: "0.04 AGUJA CARBURADOR RTR"},
  { codigo: "N9322920", descripcion: "0.04 BOQUEREL MINIMA APACHE 180"},
  { codigo: "R1080800", descripcion: "0.04 TVS PINON 1RA SALIDA 35D 6H RTR RP"},
  { codigo: "TAN4010R", descripcion: "0.45 TANQUE GASOLINA AKT 125 NKD"},
  { codigo: "VA0621", descripcion: "0.18 MANIGUETA AIZQ MOTOCARRO 175 RE"},
  { codigo: "VA0623", descripcion: "0.18 CDI AZUL MOTOCARRO TORITO"},
  { codigo: "VH10507", descripcion: "0.18 JUEGO DE DISCOS CLUTCH CB 190R/CB160F/XR125L/150L"},
  { codigo: "VU40002", descripcion: "0.18 JUEGO RADIOS 9*157MM BOXER100 CT CRYPTON110"},
  { codigo: "YV0158", descripcion: "KIT VALVULAS APACHE RTR MOTOCARRO TVS"},
  { codigo: "713001411576", descripcion: "0.12 KIT ORING STB ECO 100 RP"},
  { codigo: "7700149058377", descripcion: "0.12 Campana Clut Prima 125 Mawi Rp"},
  { codigo: "7700149058537", descripcion: "0.12 PORTAZAPATAS CTO 125 MAWI RP"},
  { codigo: "7700149058827", descripcion: "0.12 RESORTE TAPON DREN 125 MAWI RP"},
  { codigo: "7700149094030", descripcion: "0.12 Posapie Tra Der 200CR4 Rp"},
  { codigo: "7700149281607", descripcion: "0.12 RIN DELANTERO 125CH RP" },
  { codigo: "7700149327893", descripcion: "0.12 CASC KNTRL PIRANHA RJVD XL" },
  { codigo: "7700149327923", descripcion: "0.12 CASC KONTRL M65 PIRANHA GRMR M" },
  { codigo: "7700149327961", descripcion: "0.12 CASC KONTRL M65 AZVD L" },
  { codigo: "7700149327978", descripcion: "0.12 CASC KONTRL M65 PIRNHA RJVD L" },
  { codigo: "7700149327985", descripcion: "0.12 CASC KONTRL M65 PIRANHA AZ VD M" },
  { codigo: "7700149328005", descripcion: "0.12 CASC KONTRL M65 PIRANHA GRAM M" },
  { codigo: "7700149328012", descripcion: "0.12 CASC KONTRL M65 PIRANHA GRAM L" },
  { codigo: "7700149328029", descripcion: "0.12 CASC KNTRL M65 PIRANHA GRAM XL" },
  { codigo: "7700149328067", descripcion: "0.12 CASC KONTRL M65 PIRANHA RJVD M" },
  { codigo: "7700149328074", descripcion: "0.12 CASCO KONTROL M65 BAKMUT NGRJ M" },
  { codigo: "7700149328081", descripcion: "0.12 CASC KONTROL M65 BAKMUT NGAZ M" },
  { codigo: "7700149328098", descripcion: "0.12 CASC KONTROL M65 BAKMUT NGAZ L" },
  { codigo: "7700149328104", descripcion: "0.12 CASC KONTRL M65 BAKMUT NGAZ XL" },
  { codigo: "7700149328128", descripcion: "0.12 CASC KONTROL M65 NGMR M" },
  { codigo: "7700149328142", descripcion: "0.12 CASC KTRL M65 AZVD XL" },
  { codigo: "7700149328173", descripcion: "0.12 CASC KONTROL M65 BAKMUT NGRJ L" },
  { codigo: "7700149328180", descripcion: "0.12 CASC KONTRL M65 BAKMUT NGRJ XL" },
  { codigo: "7700149328203", descripcion: "0.12 CASC KONTROL M65 BAKMUNT NGAM M" },
  { codigo: "7700149328210", descripcion: "0.12 CASC KONTRL M65 BAKMUT NGAM L" },
  { codigo: "7700149328227", descripcion: "0.12 CASC KONTRL M5 BAKMUT NGAM XL"},
  { codigo: "7700149368537", descripcion: "0.12 SUSPEN X2 DER/IZQ KTL 125R3 Rp"},
  { codigo: "7700149406178", descripcion: "0.12 JGO HANDSAVERS 150/200 CR4 Rp"},
  { codigo: "7705946274005", descripcion: "0.12 Cubierta Tras Der 110X/E3 Rp"},
  { codigo: "7705946634328", descripcion: "0.12 JGO x6 CABLE ALTA KTL Rp"},
  { codigo: "7705946737289", descripcion: "0.12 CABLE SEGUR SILLA SCPRO CBS RP"},
  { codigo: "7705946850889", descripcion: "0.12 SOPORTE POSAPIE DEL IZQ CR5 Rp"},
  { codigo: "K353147500", descripcion: "0.12 UNIDAD CTRL LUCES NS/PLSR 35 RP"},
  { codigo: "179040", descripcion: "0.27 CUNAS DIRECCION AKT 125 NKD SL RODILLO FUJIRACER"},
  { codigo: "182660", descripcion: "0.27 CINTA AISLANTE 15M GRANDE"},
  { codigo: "187580", descripcion: "0.27 SLIDER CONICO MORADO MIROK"},
  { codigo: "18760", descripcion: "0.27 SLIDER CONICO PLATA MIROK"},
  { codigo: "1953400", descripcion: "0.27 JUEGO ORING CULATA C90-CD100BIZ-ECO-PASSION"},
  { codigo: "200310", descripcion: "0.27 IMPERMEABLE EMERGENCIA NEGRO XXL"},
  { codigo: "202320", descripcion: "0.27 IMPERMEABLE EMERGENCIA VERDE XL"},
  { codigo: "241900", descripcion: "0.27 ARAÑA CLUTCH FZ 16 JAPANAL"},
  { codigo: "7155", descripcion: "0.27 SOCKET FAROLA FS 80 CON PACHA (M)"},
  { codigo: "BNAH22001T", descripcion: "0.26 B ADM/ESC ECO DE LUXE (PAR)"},
  { codigo: "CLVK19000T", descripcion: "0.26 CLUTCH UNA VIA DE PULSAR-I-II-DISCOVER"},
  { codigo: "PRCS22000T", descripcion: "0.26 PORTA CATALINA GN-125H/GS-125"},
  { codigo: "PRCY24000T", descripcion: "0.26 PORTA CATALINA CRYPTON-110"},
  { codigo: "34340", descripcion: "0.75 PROBADOR DE CORRIENTE EN PASTA"},
  { codigo: "3555", descripcion: "0.75 MANULLAR PUNTA RIZONA ROJO"},
  { codigo: "3556", descripcion: "0.75 MANILLAR PUNTA RIZONA NEGRO"},
  { codigo: "35570", descripcion: "0.75 MANILLAR PUNTA RIZONA PLATA"},
  { codigo: "36980", descripcion: "0.75 PISTOLA SOPLADORA DE AIRE"},
  { codigo: "4222", descripcion: "0.75 LLAVE CRUCETA ESTRELLA 8-10-12 MM"},
  { codigo: "4603", descripcion: "0.75 RACHE MEDIDA 1/4"},
  { codigo: "4622", descripcion: "0.75 DESTORNILLADOR PALA/ESTRELLA 3 FUNCIONES"},
  { codigo: "4895", descripcion: "0.75 SET HERRAMIENTA HELICOIL 8MMX1.25"},
  { codigo: "4896", descripcion: "0.75 SET HERRAMIENTA HELICOIL 12 MMX 1.25"},
  { codigo: "042607", descripcion: "0.05 BOMBILLO PHILIPS W5W 12V W2, 1X9, 5D"},
  { codigo: "054106", descripcion: "0.05 PORTA BANDAS TRAS DT125/175K"},
  { codigo: "078550", descripcion: "0.05 CARBURADOR DISCOVER 100S (Choke manual)"},
  { codigo: "079216", descripcion: "0.05 TUERCA MANUBRIO DISCOVER/BOXERCT100/BM100ES/PULSAR180"},
  { codigo: "079225", descripcion: "0.05 PILA BOMBA GASOLINA FZ25 (30-53-92)"},
    { codigo: "079542", descripcion: "0.05 EJE TRASERO XTZ 125 (2013-2021)"},
  { codigo: "079909", descripcion: "0.05 PILA BOMBA GASOLINA VSTROM650/1000/GSXR600/CB500F/CB500X/CBR500R/NINJA300 Con filtro"},
  { codigo: "080658", descripcion: "0.05 AMORTIGUADOR TRASERO VIVA 110R/COOL/STYLE IXUM"},
  { codigo: "081947", descripcion: "0.05 SET ARRASTRE CR4 200 (14T-45T) S&K"},
  { codigo: "10057746", descripcion: "0.04 RADIADOR ACEITE PULSAR 160 NS TD O MANIA AUTECO BAJAJ"},
  { codigo: "10078569", descripcion: "0.04 TAPON TIEMPO TVS KING, TVS AP.RTR 200 4V, TVS AP.RTR 200 FI, TVS RTR.APA.160 4V, TVS APACHE RTR 180, TVS RTR.APA.160 2V, TVS STRYKER, TVS ZT TRAIL, TVS RAIDER 125, TVS RTR.APA.160 FI, TVS RONIN 225"},
  { codigo: "10078640", descripcion: "0.04 BUJIA TVS RR310/RTR310"},
  { codigo: "10079502", descripcion: "0.04 SOPORTE FAROLA TVS100 SPORT/LKS"},
  { codigo: "10079566", descripcion: "0.04 GATO LATERAL - TVS 100 SPORT E"},
  { codigo: "10080206", descripcion: "0.04 ARRANCADOR COMPLETO TVS AP.R"},
  { codigo: "10080872", descripcion: "0.04 AMORTIGUADOR POSTERIOR ROJO  NTORQ,TVS NTORQ DISC"},
  { codigo: "10081028", descripcion: "0.04 PIÑON ARRANQUE  NTORQ 125 FI,TVS NEO,TVS NTOR"},


  ///////////(((((((((((((((((((((((((((((((                )))))))))))))))))))))))))))))))
  //                                         (<O>      <O>)                              \\
  //                                         (*   ^^^    *)                              \\ 
  //                                         (____________)                              \\
  //                                         (|          |)                              \\  
  ///////////(((((((((((((((((((((((((((((((                )))))))))))))))))))))))))))))))

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
