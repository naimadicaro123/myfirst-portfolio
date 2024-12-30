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
  
  
  