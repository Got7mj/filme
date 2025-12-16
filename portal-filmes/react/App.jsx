import { useState } from 'react';

function App() {
  const [filmes, setFilmes] = useState([]);

  // exemplo: buscar do OMDB (substitua SUA_CHAVE)
  async function buscar() {
    try {
      const res = await fetch('https://www.omdbapi.com/?apikey=SUA_CHAVE&s=matrix');
      const data = await res.json();
      setFilmes(data.Search || []);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Portal de Filmes — React</h1>
      <button onClick={buscar}>Buscar Matrix (OMDB)</button>
      <div>
        {filmes.map(f => (
          <p key={f.imdbID}>{f.Title} ({f.Year})</p>
        ))}
      </div>
    </div>
  );
}

export default App;
