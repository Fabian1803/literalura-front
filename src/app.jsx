import { useState } from 'preact/hooks';
import './app.css';

export function App() {
  const [data, setData] = useState("Esperando...");

  const hacerTest = async () => {
    try {
      setData("Cargando datos desde el Backend...");

      // 1. OBTENEMOS LA URL DINÁMICA
      // En local usará lo que tengas en .env.development (o undefined)
      // En Netlify usará la variable que configuramos en el panel
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      
      console.log("Conectando a:", baseUrl); // Para depurar

      // 2. Usamos esa URL base
      const response = await fetch(`${baseUrl}/test-connection`);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const json = await response.json();
      
      // 3. Mostramos el resultado
      console.log(json);
      // Ajustamos esto según la estructura de tu JSON de prueba
      // Si tu backend devuelve { "mensaje": "..." }, usa json.mensaje
      // Si devuelve lo de Gutendex, usa json.results[0].title
      setData("Respuesta del Back: " + JSON.stringify(json)); 
      
    } catch (error) {
      console.error(error);
      setData("Error fatal: " + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Smoke Test ☁️</h1>
      <p>Front (Netlify) - Back (Render)</p>
      
      <button onClick={hacerTest}>
        Probar Conexión Nube
      </button>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', wordWrap: 'break-word' }}>
        <strong>Resultado:</strong> <br/>
        {data}
      </div>
    </div>
  );
}