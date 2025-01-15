document.getElementById("menuHamburger").addEventListener("click", function() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
});
// Função para abrir o modal e mostrar a imagem clicada
// Função para abrir o modal e mostrar a imagem clicada
// Função para abrir o modal e mostrar a imagem clicada
function openCustomModal(imgElement) {
    // Exibe o modal
    var modal = document.getElementById("customModal");
    var modalImage = document.getElementById("customModalImage");
    var caption = document.getElementById("customModalCaption");
  
    // Definindo a imagem no modal para a imagem clicada
    modal.style.display = "block";
    modalImage.src = imgElement.src;
    caption.innerHTML = imgElement.alt; // Mostra a descrição (alt) da imagem como legenda
  }
  
  // Função para fechar o modal
  function closeCustomModal() {
    var modal = document.getElementById("customModal");
    modal.style.display = "none"; // Fecha o modal
  }
// Seleciona o botão de toggle e o menu lateral
const toggleButton = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');

// Função que alterna a classe 'collapsed' no menu
toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
});
  // Função para abrir o modal
function openProfileModal(imgElement) {
  var modal = document.getElementById("profileModal");
  var modalImg = document.getElementById("profileModalImage");
  var captionText = document.getElementById("profileModalCaption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

// Função para fechar o modal
function closeProfileModal() {
  var modal = document.getElementById("profileModal");
  modal.style.display = "none";
}

  
  