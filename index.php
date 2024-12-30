<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="layouts/lateral-menu.css">
    <link rel="stylesheet" href="layouts/back-to-top.css">
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="layouts2/colapsar.css">
  </head>
  <body>
    <main class="content">

      <?php include('layouts/lateral-menu.php'); ?>
            <section class="introduction">
              
        <div>
          <h1>Icaro Damian</h1>
          <span>Desenvolvedor Web Junior</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore, in sunt sequi voluptate obcaecati eaque iusto qui nisi! Ab fuga enim possimus omnis corrupti magni animi culpa, deleniti quo.</p>
        </div>
        <div class="my_person">
          <img src="imagens/eu.jpeg" alt="" class="icaro">
        </div>
      </section> 
      
      <div class="developer" id="sobre-mim">
        <h2>Desenvolvo com o que?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi, veritatis cumque quibusdam quas nobis in dicta saepe voluptas repellat qui quasi ad, nesciunt rem quis molestiae? Libero, nulla recusandae! </p>
      </div>

      <!-- Skills Section with Grid -->
      <section class="my_skills row">
        <div class="">
          <div class="imagens">
          <img src="imagens/html.png" alt="">
          <img src="imagens/css.png" alt="">
        </div>
          <strong>HTML e CSS</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi, eum tempore id voluptas molestias porro dolorem, fuga maiores a ullam quisquam. Ipsa, odio velit eos aut distinctio repellat eaque.</p>
        </div>
        <div class="">
          <div class="imagens2">
          <img src="imagens/javascript.png" alt="">
        </div>
          <strong>JavaScript</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi, eum tempore id voluptas molestias porro dolorem, fuga maiores a ullam quisquam. Ipsa, odio velit eos aut distinctio repellat eaque.</p>
        </div>
        <div class="">
            <div class="imagens">
            <img src="imagens/php.png" alt="" class="php_image">
          </div>
          <strong>PHP</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi, eum tempore id voluptas molestias porro dolorem, fuga maiores a ullam quisquam. Ipsa, odio velit eos aut distinctio repellat eaque.</p>
        </div>
        <div class="">
          <div class="imagens">
            <img src="imagens/github.png" alt="">
            <img src="imagens/git.png" alt="">
          </div>
          <strong>Git e Github</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi, eum tempore id voluptas molestias porro dolorem, fuga maiores a ullam quisquam. Ipsa, odio velit eos aut distinctio repellat eaque.</p>
        </div>
        <div class="">
          <div class="imagens">
            <img src="imagens/chatgpt.png" alt="">
          </div>
          <strong>Inteligência Artificial</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi, eum tempore id voluptas molestias porro dolorem, fuga maiores a ullam quisquam. Ipsa, odio velit eos aut distinctio repellat eaque.</p>
        </div>
        <div class="">
          <div class="imagens">
            <img src="imagens/bootstrap.png" alt="">
          </div>
          <strong>Bootstrap</strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi, eum tempore id voluptas molestias porro dolorem, fuga maiores a ullam quisquam. Ipsa, odio velit eos aut distinctio repellat eaque.</p>
        </div>
      </section>
      <section class="my_projects" id="projetos">
  <div class="developer">
    <h2>Meus Projetos</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi, veritatis cumque quibusdam quas nobis in dicta saepe voluptas repellat qui quasi ad, nesciunt rem quis molestiae? Libero, nulla recusandae! </p>
  </div>
  
  <div class="great_works">
    <h3>CRUD PHP</h3>
    <img src="imagens/crud-1.png" alt="Projeto CRUD PHP" class="works" onclick="openCustomModal(this)">
    <a href="https://seuamigo.netlify.app/"><button>Ir Ver</button></a>
  </div>
  
  <div class="great_works">
    <h3>Seu Amigo</h3>
    <img src="imagens/amigo.png" alt="Projeto Seu Amigo" class="works" onclick="openCustomModal(this)">
    <a href="https://seuamigo.netlify.app/"><button>Ir Ver</button></a>
  </div>
  
  <div class="great_works">
    <h3>CRUD PHP</h3>
    <img src="imagens/crud-1.png" alt="Projeto CRUD PHP" class="works" onclick="openCustomModal(this)">
    <a href="https://seuamigo.netlify.app/"><button>Ir Ver</button></a>
  </div>

  <!-- Modal de Imagem -->
  <div id="customModal" class="custom_modal">
    <span class="close_modal" onclick="closeCustomModal()">&times;</span>
    <img class="custom_modal_content" id="customModalImage">
    <div id="customModalCaption" class="custom_modal_caption"></div>
  </div>
</section>

      <div class="developer" id="experiencias">
        <h2>Formações e Experiências</h2>
<ul>
        <li>Curso de Nuvem AWS – Curse Clound AWS.</li>
        <li>Curso de 5G – Curse 5G  Huawei.</li>
        <li>Curso de Suporte Google – Coursera.</li>	
        <li>Certificação de Informática – EEEP José de Barcelos.</li>
        <li>Estágio de 5 meses na EGPCE.</li>
</ul>
      </div>
      <div class="developer" id="experiencias">
        <h2>Contato</h2>
      </div>
    </main>
    <?php include('layouts/footer.php'); ?>
    <script src="script.js"></script>
    <script src="layouts/lateral_menu.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
