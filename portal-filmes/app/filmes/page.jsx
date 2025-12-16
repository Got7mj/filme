'use client';
import { useState } from 'react';

export default function Filmes() {
  const [lista, setLista] = useState([]);

  async function buscar() {
    try {
      const res = await fetch('/api/filmes');
      const data = await res.json();
      setLista(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <button onClick={buscar}>Buscar Filmes (API interna)</button>
      <div style={{ marginTop: 12 }}>
        {lista.map(f => (
          <p key={f.id}>{f.titulo}</p>
        ))}
      </div>
    </div>
  );
}
