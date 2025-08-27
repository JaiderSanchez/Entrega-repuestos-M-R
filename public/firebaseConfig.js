import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

  // Configuración
  const firebaseConfig = {
    apiKey: "AIzaSyANsyGyP2Wi17aErd-VP-jgwCpO76N4mR8",
    authDomain: "entrega-repuestos-auxiliar.firebaseapp.com",
    projectId: "entrega-repuestos-auxiliar",
    storageBucket: "entrega-repuestos-auxiliar.firebasestorage.app",
    messagingSenderId: "979852474902",
    appId: "1:979852474902:web:3fd69b5dde0312e46bd337"
  };

  // Inicializa Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // ✅ Exporta db para que otros módulos lo usen
  export { db };

  // 🔹 Probar que funciona: traer datos de la colección registro_entregas
  async function cargarDatos() {
    const querySnapshot = await getDocs(collection(db, "registro_entregas"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  }

  cargarDatos();