const sidenav = document.getElementById('sidenav');         // Sidebar (menu lateral)
const toggleBtn = document.getElementById('toggle-btn');    // Botão para alternar o estado do menu
const arrow = document.getElementById('arrow');             // Ícone de seta que gira ao alternar o menu


// Flag para controlar o estado do menu (aberto ou fechado)
let isOpen = true;



// Adiciona o evento de clique no botão de alternância
toggleBtn.addEventListener('click', () => {
    // Inverte o estado do menu
    isOpen = !isOpen;

    // Alterna a classe 'collapsed' na sidebar, baseada no estado do menu
    sidenav.classList.toggle('collapsed', !isOpen);

    // Alterna as classes de rotação e de posicionamento da seta
    arrow.classList.toggle('rotate', !isOpen);
    arrow.classList.toggle('arrow-left', !isOpen);
    toggleBtn.classList.toggle('rotate', !isOpen);
    toggleBtn.classList.toggle('arrow-left', !isOpen);

    
});