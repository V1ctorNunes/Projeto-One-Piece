function luffy() {

  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards1 = document.getElementById("cards2").style.display
  var cards1 = document.getElementById("cards3").style.display
  
  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
  

    personagem_nome.innerHTML += `Monkey D. Luffy`

    conteudo.innerHTML += `
      <img class="story-img" src="./assets/imagem-historia/luffy.jpg" alt="">
      <p class="story">
      <h3>História de Luffy</h3>
      Protagonista da aventura criada por Eiichiro Oda, Monkey D. Luffy nasceu na Vila Foosha, parte do Reino Goa e local no qual a história começa. Ele é filho do revolucionário Monkey D. Dragon e neto do Vice-Almirante Monkey D. Garp, fazendo parte da Família dos D.; seus membros são considerados Inimigos Naturais de Deus, mas o real motivo por inicial é um mistério para todos.
      <br> <br>
      Sabemos que, ainda criança, seu desejo de se tornar o maior pirata do mundo era real e intenso — e o jovem tinha como inspiração o pirata Shanks, o Ruivo, que conheceu na mesma época que comeu a Gomu Gomu no Mi responsável por transformar seu corpo. Desde os 7 anos de idade, portanto, o corpo do futuro Rei dos Piratas é de borracha.
      <br> <br>
      Sua capacidade de liderar grupos logo o fez virar capitão dos Piratas do Chapéu de Palha, nome que é uma referência direta para o item que herdou de Shanks. Luffy acumula inimigos por todo local que passa e, especialmente, do Governo Mundial ao seguir com seu sonho de se tornar o maior pirata do mundo e encontrar o tesouro deixado pelo lendário Gold Roger.

      <h3>Roupas de Luffy</h3>
      Ao todo, Luffy possui mais de 30 trajes diferentes ao longo da história principal do anime de One Piece. Você pode conferir todas as roupas do personagem na galeria abaixo.

      <h3>Poderes de Luffy</h3>
      Ele é extremamente ágil e consegue improvisar com facilidade, o que é ótimo para quem tem corpo de borracha. Foi assim que ele conseguiu aprimorar o Gear 2, 3 e 4: com lógica. Quando amadureceu, o pirata que estica também aprendeu a lidar com a dureza dos Soldados Biscoitos de Cracker.
      <br> <br>
      Após anos de treinamento, o protagonista agora consegue unir seus poderes elásticos com as características que já possuía, como força e imprevisibilidade, mas ainda é muito vulnerável a itens cortantes e temperaturas extremas.
      </p> 
      `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }

  }

function zoro() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards1 = document.getElementById("cards2").style.display
  var cards1 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Roronoa Zoro`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/zoro.jpg" alt="">
    <h3>História de Zoro</h3>
    Um guerreirinho desde criança, Zoro cresceu e treinou na vila Shimotsuki. O pequeno espadachim era talentoso, capaz de derrotar a maioria dos oponentes, com exceção de Kuina, a filha do mestre do dojo onde treinava. Zoro, que desejava se tornar o maior espadachim do mundo, então desafiou Kuina após duas mil lutas, mas perdeu o combate contra a colega.
    <br> <br> 
    Após o confronto, Zoro e Kuina conversam, onde ele revela o sonho dele para ela, e ela diz que tem o mesmo sonho; no entanto, ela diz que sabia que nunca o alcançaria -- o próprio pai dela havia dito que meninas não podiam ser mestres de espada. Zoro prometeu a Kuina que a derrotaria futuramente, mas por ser melhor, e não por ela ser uma garota.
    <br> <br> 
    Infelizmente, no dia seguinte, Kuina cai das escadas do dojo e morre. Zoro, entristecido pelo fato de nunca poder enfrentá-la, leva adiante o sonho dos dois e começa a treinar para desenvolver o estilo próprio, em que carrega as espadas em ambas as mãos, e a de Kuina entre os dentes -- estilo que é conhecido como Santoryu.

    <h3>Roupas de Zoro</h3>
    Ao todo, Zoro ostenta mais de 20 trajes diferentes ao longo do anime de One Piece. Você pode conferir todas as roupas do personagem na galeria abaixo.

    <h3>Poderes de Zoro</h3>
    Como um espadachim treinado desde criança, Zoro desenvolveu atributos físicos, como força, agilidade e resistência de maneira excepcional e tem o corpo de um super-guerreiro.
    <br> <br> 
    Junto à maestria física, Zoro também domina a arte das espadas, independente de carregar três ou apenas uma. Para auxiliar na concentração dele (o que pode ser um problema, ocasionalmente), ele também é experiente em meditação, técnica que direciona o foco dele para o que é necessário.
    <br> <br>
    Zoro também tem domínio sobre o Haki, a energia vital do universo de Eiichiro Oda. O espadachim consegue até desenvolver técnicas utilizando essa misteriosa força. 
    `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}

function nami() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Nami`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/nami.jpg" alt="">
    <h3>História de Nami</h3>
    Assim como outros integrantes dos Chapéus de Palha, Nami é uma órfã de guerra. Encontrada em uma batalha quando ainda era bebê, ela foi adotada -- junto de Nojiko, outra órfã -- por Bell-mère, uma integrante da marinha. Juntas, as três se tornaram tão próximas quanto uma família pode ser.
    <br> <br>
    Ainda quando criança, Nami desenvolveu uma paixão enorme por desenhar mapas e aprender sobre navegação. Seu maior objetivo é bastante grandioso: criar um mapa completo do mundo todo. Infelizmente, as finanças da família não permitiam que a jovem comprasse livros para estudar, levando-a a roubar da livraria da vila -- o primeiro passo para uma carreira bem sucedida de gatuna.
    <br> <br>
    Como nada que está ruim não pode piorar, o infame pirata homem-peixe Arlong entrou na Vila Cocoyasi e impôs uma taxa a cada adulto e criança da vila para "viver". Como Bell-mère não tinha condições de pagar tal imposto, ela foi usada de exemplo para todos os habitantes da cidade e brutalmente assassinada na frente de Nami e Nojiko.
    <br> <br>
    Nami então foi sequestrada e forçada a se tornar cartógrafa para Arlong. No entanto, o pirata fez um acordo com a jovem: se ela o trouxesse 100 milhões de belly, ele libertaria sua vila.
    <br> <br>
    Oito anos e muitos roubos depois, Nami conquistou o valor do pagamento. Entretanto, em um plano arquitetado por Arlong e a marinha, tudo é roubado, levando Nami a um colapso nervoso que gerou automutilações em seu braço. Luffy, assistindo à cena, prontamente impede Nami de prosseguir com os machucados, prometendo que iria vingar a garota.
    <br> <br>
    Após uma batalha recheada de carga dramática, Luffy consegue derrotar Arlong e seus piratas, libertando Nami da divida e também os habitantes da Vila Cocoyasi, levando a navegadora a tomar a decisão de entrar para a tripulação permanente dos Chapéus de Palha.

    <h3>Roupas de Nami</h3>
    Ao todo, Nami ostenta mais de 50 trajes diferentes ao longo do anime de One Piece. Você pode conferir todas as roupas de Nami na galeria abaixo.

    <h3>Habiliades da Nami</h3>
    Nami não tem poderes, especificamente, porque nunca comeu uma Fruta do Diabo. No entanto, ela exibe múltiplas habilidades distintas. A primeira e mais notória é o fato dela ser uma exímia navegadora com experiência de sobra em cartografia.
    <br> <br>
    A pirata também é conhecida pela furtividade, conveniente porque ela é uma ladra. Para o combate, Nami costuma usar um bastão Bo, que fica melhor e mais versátil quando se torna o Clima-Tact e as consequentes evoluções dessa prestativa e poderosa ferramenta, capaz de manipular o clima próximo.
    `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}
  

