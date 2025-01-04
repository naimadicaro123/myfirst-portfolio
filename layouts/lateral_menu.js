// Função para abrir o modal
function openModal(element) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  
  // Definir a imagem do modal com a imagem clicada
  modal.style.display = "block";
  modalImg.src = element.src;
  captionText.innerHTML = element.alt; // Exibe a legenda da imagem, que é o atributo alt

  // Alternativamente, você pode usar 'title' ou outros atributos para a legenda.
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
// Toggle para abrir e fechar o menu lateral
    // Função para abrir o Modal
    function openModal(img) {
      var modal = document.getElementById("imageModal");
      var modalImg = document.getElementById("modalImage");
      var caption = document.getElementById("caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      caption.innerHTML = img.alt;
  }

  // Função para fechar o Modal
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

