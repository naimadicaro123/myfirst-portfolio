
document.addEventListener("DOMContentLoaded", function() {
    let content = document.querySelector(".content");
    let scrollProgress = document.getElementById("back_to_top");
  
    const calcScrollValue = () => {
        let calcHeight = content.scrollHeight - content.clientHeight;
        let pos = content.scrollTop; // Posição de rolagem no contêiner
        let scrollValue = Math.round((pos * 100) / calcHeight);
  
        // Exibir ou ocultar o botão de rolagem apenas se houver conteúdo suficiente para rolar
        if (calcHeight > 0 && pos > 100) {
            scrollProgress.style.display = "grid"; 
        } else {
            scrollProgress.style.display = "none";
        }
  
        // Atualizar o estilo de fundo com o progresso da rolagem
        scrollProgress.style.background = `conic-gradient(#56a7b2 ${scrollValue}%, #87d1e6 ${scrollValue}%)`;
    };
  
    // Executa a função inicialmente para garantir que o botão só apareça se houver conteúdo suficiente
    calcScrollValue();
    
    content.onscroll = calcScrollValue;
  
    scrollProgress.addEventListener("click", () => {
        content.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  