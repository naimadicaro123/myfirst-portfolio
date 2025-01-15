// Função para abrir o modal
function openModal(img) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  // Torna o modal visível
  modal.style.display = "block";

  // Define a imagem no modal e a legenda
  modalImg.src = img.src;
  captionText.innerHTML = img.alt; // A legenda pode ser obtida do atributo alt
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
      closeModal();
  }
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}


  // Função para Toggle do Menu Lateral
  const toggleBtn = document.getElementById("toggleBtn");
  const sidebar = document.getElementById("sidebar");
  toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
  });

