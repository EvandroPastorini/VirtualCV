
// Obtém todos os botões e seções
const buttons = document.querySelectorAll('.custom-button');
const sections = document.querySelectorAll('section');

// Adiciona um ouvinte de eventos de clique a cada botão
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Oculta todas as seções
    sections.forEach((section) => {
      section.classList.add('hidden');
    });

    // Mostra a seção correspondente ao botão clicado
    sections[index].classList.remove('hidden');
  });
});
