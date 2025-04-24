import React, { useState } from 'react';

const Home: React.FC = () => {
  const [mensaje, setMensaje] = useState('¡Hola! Bienvenido a Gilbill');

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Gilbill</h1>
      <p>{mensaje}</p>
      <button onClick={() => setMensaje('¡Gracias por hacer clic!')}>
        Haz clic aquí
      </button>
    </div>
  );
};

export default Home;
