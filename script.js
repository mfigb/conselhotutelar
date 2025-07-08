function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  const imagemInicial = document.getElementById('imagem-inicial');

  // Esconde todas as seções
  secoes.forEach(secao => {
    secao.classList.remove('mostrar');
  });

  // Esconde a imagem inicial
  imagemInicial.style.display = 'none';

  // Mostra a seção clicada
  const secaoSelecionada = document.getElementById(id);
  if (secaoSelecionada) {
    secaoSelecionada.classList.add('mostrar');
  }

  // Esconde o submenu (caso esteja visível)
  const submenu = document.getElementById('submenu-eca');
  if (submenu) {
    submenu.classList.add('hidden');
  }
}

function voltarParaHome() {
  const secoes = document.querySelectorAll('.secao');
  const imagemInicial = document.getElementById('imagem-inicial');

  // Esconde todas as seções
  secoes.forEach(secao => {
    secao.classList.remove('mostrar');
  });

  // Mostra a imagem inicial
  imagemInicial.style.display = 'block';

  // Esconde o submenu (caso esteja visível)
  const submenu = document.getElementById('submenu-eca');
  if (submenu) {
    submenu.classList.add('hidden');
  }
}

function toggleSubmenu() {
  const submenu = document.getElementById('submenu-eca');
  submenu.classList.toggle('hidden');

  // Exibe a seção principal do ECA ao clicar no botão "ECA"
  mostrarSecao('eca');
}
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('show');
}


