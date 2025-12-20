import { useState } from 'preact/hooks';
import './app.css';

export function App() {
  const [data, setData] = useState("Esperando...");

  const hacerTest = async () => {
    try {
      setData("Cargando datos desde Spring Boot...");
      
      const response = await fetch('http://localhost:8080/test-connection');
      const json = await response.json();
      
      // 2. Mostramos el resultado
      console.log(json); // Para ver en consola del navegador
      setData("¡Éxito! Se encontró: " + json.results[0].title);
      
    } catch (error) {
      console.error(error);
      setData("Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Smoke Test 🔌</h1>
      <p>Front - Back - API Externa</p>
      
      <button onClick={hacerTest}>
        Probar Conexión
      </button>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <strong>Resultado:</strong> <br/>
        {data}
      </div>
    </div>
  );
}