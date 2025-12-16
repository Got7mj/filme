const form = document.getElementById('formBusca');
const lista = document.getElementById('lista');

const filmes = [
  { titulo: 'Matrix', ano: 1999 },
  { titulo: 'Inception', ano: 2010 }
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const termo = document.getElementById('busca').value.trim().toLowerCase();
  if (!termo) return render(filmes);
  const filtrado = filmes.filter(f => f.titulo.toLowerCase().includes(termo));
  render(filtrado);
});

const render = (dados) => {
  lista.innerHTML = dados.map(f =>
    `<li>${f.titulo} (${f.ano})</li>`
  ).join('');
};

// render inicial
render(filmes);
