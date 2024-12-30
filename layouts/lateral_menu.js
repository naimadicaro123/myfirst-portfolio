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
