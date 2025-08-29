import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
import api from '/src/api/axios.js';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/hello") // suponiendo que tu backend tenga un endpoint simple
      .then(res => setMessage(res.data))
      .catch(err => setMessage("Error conectando al backend"));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Frontend conectado 🚀</h1>
      <p>Respuesta del backend: {message}</p>
    </div>
  );
}

export default App
