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
      <img class="story-img" src="./assets/imagem-historia/luffy.jpg" alt=""> <br>
      Quando criou a tripulação: Saga East Blue / Arco Romance Dawn / Episódios 1 e 2 <br>
      Akuma no Mi: Gomu Gomu no Mi (Fruta da Borracha) <br>
      Função no grupo: capitão <br>
      <br><br>
      Luffy é neto de Monkey D. Garp, Vice-Almirante da Marinha e arqui-inimigo de Gol D. Roger, que fez história no mundo como o Rei dos Piratas e o dono original do tesouro One Piece. Ainda assim, desde jovem Luffy quis seguir os passos dos piratas que admirava, como Shanks e o próprio Roger. Ainda criança, ingeriu acidentalmente a Gomu Gomu no Mi, fruta que lhe proporcionou poderes de borracha, habilidades que ele desenvolve consideravelmente no decorrer do anime, desenvolvendo diferentes golpes.
      <br><br>
      Já mais adulto, "Luffy do Chapéu de Palha", como ficou conhecido, fundou sua própria tripulação, os Piratas do Chapéu de Palha. Como capitão da equipe, Luffy percorre a Grand Line recrutando novos membros e enfrentando diferentes inimigos. Tudo isso em busca de alcançar seu sonho de se tornar o novo Rei dos Piratas e encontrar o tesouro One Piece. Neste caminho, o jovem pirata conquistou uma reputação mundial de ser quase insano por já ter atacado as três instalações governamentais mais importantes e escapado com vida.
      <br><br>
      Atualmente, Luffy faz parte do grupo conhecido como "Pior Geração", que reconhece os 12 piratas cujas ousadas ações contra o Governo Mundial lhe renderam uma recompensa acima de $100.000.000. A do Luffy é $3.000.000.000.
      <br><br>
      <h3>Poderes</h3>
      Capacidades físicas sobre-humanas: além de velocidade, agilidade e reflexos aprimorados, Luffy tem uma força inacreditável, sendo capaz quebrar materiais resistentes como aço e concreto.
      Capacidade de cura: além da resistência que suas habilidades de borracha lhe proporcionam, Luffy pode se curar de intensos ataques.
      Haki: por ser capaz de usar as três formas de Haki (uma das poucas pessoas conhecidas com essa capacidade), Luffy pode aumentar seus poderes e habilidades e prever ataques.
      Akuma no Mi: no decorrer de sua trajetória e de seus treinamentos, Luffy desenvolveu diferentes técnicas unindo suas habilidades de luta com seus poderes de borracha, geralmente usando recursos como esticar partes de seu corpo para que possa atingir inimigos à distância ou com maior potência. 
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
    <img class="story-img" src="./assets/imagem-historia/zoro.jpg" alt=""><br>
    Quando entrou para a tripulação: Saga East Blue / Arco Romance Dawn / Episódio 3 <br>
    Akuma no Mi: não possui <br>
    Função no grupo: espadachim <br>
    <br><br>
    Primeiro pirata a ser recrutado por Luffy para os Chapéus de Palha - convite feito no episódio 2 e oficialmente aceito no 3 - Zoro também está entre os quatro integrantes mais poderosos do grupo, além de, assim como seu capitão, fazer parte da Pior Geração, com uma recompensa de $1.111.000.000. Enquanto Luffy sonha em se tornar o Rei dos Piratas, o sonho de Zoro é um dia ser o melhor espadachim do mundo.
    <br><br>
    Embora tenha uma personalidade que misture uma seriedade quase constante com um humor desajeitado, Zoro conquistou os fãs do anime e acabou se tornando, por vezes, alívio cômico dos episódios, devido a sua completa falta de direção. Além disso, sua amizade com Luffy é icônica. O pirata, inclusive, aceitou o convite para integrar os Chapéus de Palha após o capitão salvar sua vida.
    <br><br>
    É comumente visto com suas três espadas. Um dos mistérios em torno de Zoro surgiu após o salto temporal que ocorre depois da Saga Guerra de Marineford, quando o pirata apareceu com uma cicatriz que mantém seu olho esquerdo permanentemente fechado. A falta de explicações sobre o ferimento já provocou teorias diversas entre os fãs.
    <br><br>
    <h3>Poderes</h3>
    Ittoryu, Nitoryu e Santoryu: Zoro domina o Ittoryu (Estilo Uma Espada), o Nitoryu (Estilo Duas Espadas), e desenvolveu por conta própria o Santoryu (Estilo Três Espadas). Neste último, ele usa uma espada em cada mão enquanto leva outra na boca. Os três estilos são usados para ataques de alta velocidade e ataques de projeção de ar comprimido. O Santoryu permite que ele combine os dois tipos de ataques em uma mesma técnica.
    Flying Slash Attack: Ataque à distância no qual Zoro atinge seu inimigo a pressão do ar que provoca com seus golpes de espada.
    Kyutoryu (forma Ashura): Zoro é capaz de contactar a entidade Ashura, ligação a partir da qual ele despertou um estilo de espada no qual adquire a aparência temporária de ter seis braços e três cabeças, sendo assim capaz de usar nove espadas ao mesmo tempo. 
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
    <img class="story-img" src="./assets/imagem-historia/nami.jpg" alt=""><br>
    Quando entrou para a tripulação: Saga East Blue / Arco Orange Town / Episódio 6 <br>
    Akuma no Mi: não possui <br> 
    Função no grupo: cartógrafa e tesoureira<br>
    <br><br>
    Antes de se tornar a terceira integrante dos Chapéus de Palha, Nami chegou a se infiltrar no grupo com a intenção de roubá-los. Vamos com calma! A jovem perdeu seus pais na guerra ainda bem criança e foi adotada por Bell-mère, uma mulher da Marinha. Tudo ia bem até que o pirata Arlong chegou ao vilarejo em que elas moravam, matou a mãe adotiva de Nami e sequestrou a garota para que ela pudesse fazer mapas para ele, ofício para o qual sempre mostrou aptidão.
    <br><br>
    Nami passou oito anos sob o domínio de Arlong, até que recebeu a missão de tentar roubar os Chapéus de Palha. Para sua surpresa, a tripulação de Luffy conseguiu se rebelar e vencer Arlong. Desde então, por volta do episódio 6, ela se uniu a Luffy e Zoro e passou a atuar como cartógrafa e tesoureira da equipe, tendo ainda como motivação seu sonho de fazer um mapa do mundo inteiro.
    <br><br>
    Junte a isso as habilidades de Nami como navegadora e seus poderes de mudar o clima, e podemos concluir que a adição da jovem à tripulação foi de fato de grande peso. Sua recompensa é de $366.000.000.
    <br><br>
    <h3>Poderes</h3>
    Arte do Tempo: a sensibilidade que Nami já possuía em pressentir o clima foi canalizada no artefato Clima-Tact, uma espécie de bastão criado por Usopp (falamos dele mais a seguir) com o qual ela consegue controlar as condições climáticas próximas a sua localização. A partir dessa nova habilidade, a pirata desenvolveu diferentes técnicas de combate.
    Perfect Clima-Tact: Nami pode criar duplicatas de si mesma usando névoa (após um aperfeiçoamento do Clima-Tact).
    Sorcery Clima-Tact: Nami usa o Clima-Tact para controlar raios e usá-los como arma (depois do salto temporal).
    Fourth Clima-Tact: Com o novo Clima-Tact acriado por por Usopp e Franky, Nami intensifica o poder de todas as suas técnicas.
    `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}
  
function usopp() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Usopp`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/usopp.jpeg" alt=""><br>
    Quando entrou para a tripulação: <br>

    Entra na Saga East Blue / Arco Vila Syrup (episódios 9 ao 18)<br>
    Sai na na Saga Water 7 / Arco Water 7 (Episódios 227 ao 265)<br>
    Retorna na Saga Water 7 / Arco Pós-Enies Lobby (episódios 313 ao 325)<br>
    Akuma no Mi: não possui<br>
    Função no grupo: atirador<br>
    <br><br>
    A origem de seu nome ("Uso", em japonês, quer dizer "mentira" ou "falsidade"), seu nariz comprido e suas constantes histórias fantásticas fizeram com que Usopp ganhasse fama de mentiroso. Contudo, o pirata é um homem sensível, e suas narrativas incríveis, inclusive, surgiram como mecanismo de defesa. São uma forma que ele encontrou, ainda criança, de lidar com a morte da mãe e o abandono do pai.
    <br><br>
    Usopp passa a integrar os Chapéus de Palha durante no Arco Vila Syrup. Contudo, ele é sensível e inseguro por conta de seu passado. E isso faz com que ele abande os Chapéus de Palhapor um tempo. Após entrar para o grupo com o sonho de se tornar um grande pirata, ele entra em conflito com Luffy e não se sente bom o suficiente para fazer parte da equipe. Usopp, contudo, não só retorna à equipe, no Arco Pós-Enies Lobby, como mostra grande desenvolvimento no decorrer do anime.
    <br><br>
    Após o salto temporal, o pirata demonstrou dominar nossas habilidades de combate. Além disso, ele conta com seu talento nato como atirador e com sua criatividade para desenvolver diferentes inventos, incluindo o Clima-Tact, artefato com o qual Nami controla o clima. Não à toa, a recompensa de Usopp, que já foi de $500.000.000, atualmente é de $200.000.000.
    <br><br>
    <h3>Poderes</h3>
    Tiro: Usopp é um habilidoso atirador que usa sua incrível mira e seus conhecimento de engenharia para acertar alvos a grandes distâncias, seja com sua baladeira/estilingue, seja com canhões.
    Inventos: Além do Clima-Tact, Usopp criou sua arma Kabuto, uma espécie de estilingue com cinco elásticos conectados, o que faz com que a força e a precisão do tiro seja ainda maior.
    `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}
  

function sanji() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Sanji`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/sanji.jpeg" alt=""><br>
    Quando entrou para a tripulação: Saga East Blue / Arco Baratie / Episódio 30 <br>
    Akuma no Mi: não possui<br>
    Função no grupo: cozinheiro<br>
    <br><br>
    Sanji é o terceiro filho da família nobre Vinsmoke, e cresceu em meio a maus tratos de seus parentes próximos. Seus irmãos faziam bullying com ele na infância menosprezando sua atitude de alimentar aqueles que seu pai julgava inferiores e a quem não dava atenção. O patriarca via o filho como a vergonha da família. Sanji renunciou seu título de príncipe do Reino Germa e cortasse os laços com todos quando tinha apenas oito anos de idade.
    <br><br>
    O menino atravessou a Red Line em direção ao East Blue, onde trabalhou como cozinheiro em um navio, até ser salvo de um naufrágio pelo sous-chef Zeff. Sanji acabou se tornando aprendiz de Zeff por anos, no restaurante em que, um dia, conhece Luffy. Após Sanji entrar em uma briga com um tenente da Marinha por desperdiçar comida, ele acaba alimentando um fugitivo que tinha fome às escondidas. O capitão dos Chapéus de Palha vê o ato gentil e o convida para integrar a tripulação.
    <br><br>
    Após diversos conflitos com diferentes inimigos, Sanji aceita o convite de Luffy apenas no final do Arco Baratie, no episódio 30. Sua motivação é seu sonho de encontrar o suposto paraíso dos chefs, All Blue. Esse lendário mar místico seria o ponto de encontro de East Blue, West Blue, North Blue e South Blue, e contaria com com vida selvagem dos quatro oceanos. Quinto integrante do grupo, no qual passou a atuar como cozinheiro, Sanji se destacou rapidamente. Atualmente figura como um dos quatro melhores lutadores da tripulação - junto a Luffy, Zoro e Jinbe - e detentor da terceira maior recompensa da equipe, no valor de $1.032.000.000.
    <br><br>
    <h3>Poderes>/h3>
    Capacidades físicas sobre-humanas: seu treinamento lhe proporcionaram força, velocidade e resistência inacreditáveis Sanji pe capaz de destruir até mesmo metal apenas com sua força física.
    Estilo de luta único: unindo técnicas de lutas como capoeira, Taekwondo e savate, Sanji desenvolveu seu próprio estilo de luta, criando técnicas com as quais consegue, por exemplo: correr embaixo da água, saltar de grandes alturas e se locomover criando barreiras sonoras no ar com sua velocidade.
    Diable Jambe: nesta técnica, Sanji eleva a temperatura de suas pernas até que elas ganhem a aparência e o poder de fogo vivo.
    Haki: o pirata é capaz de usar Kenbunshoku Haki, com o qual pode sentir a presença de outras pessoas mesmo a grandes distâncias, e Busoshoku Haki. Com este último, consegue criar uma espécie de armadura invisível em torno de si mesmo.
    `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}

function chopper() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Chopper`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/chopper.jpeg" alt=""><br>
    Quando entrou para a tripulação: Saga Alabasta / Arco Ilha Drum / Episódio 91 <br>
    Akuma no Mi: Hito Hito no Mi (Fruta Humano-Humano)<br>
    Função no grupo: médico<br>
    <br><br>
    Sexto integrante dos Chapéus de Palha e um dos poucos que nasceram na Grand Line, Tony Tony Chopper era uma rena comum até ingerir a fruta Hito Hito no Mi, que lhe deu não apenas características humanoides, como também grande inteligência e a capacidade de alterar a forma física de seu corpo. Após desastrosas primeiras interações com os humanos, Chopper foi resgatado pelo Dr Hiriluk, que ajudou a jovem rena a se tornar um médico, sendo ensinado ainda por seis anos pela Dra. Kureha.
    Descontraído, é um dos primeiros a se juntar às brincadeiras de Luffy e Usopp. Seu primeiro contato com o grupo, contudo, não foi exatamente positivo. Sua desconfiança com humanos foi apenas acentuada pelas brincadeiras de Luffy e Sanji sobre cozinhá-lo. As habilidades médicas de Chopper, porém, fizeram Luffy convidá-lo para integrar a tripulação, convite que ele aceita no final do arco Ilha Drum, no episódio 91, motivado também pela lembrança do desejo do Dr. Hiruluk de que ele navegasse pelo mundo e ampliasse seus horizontes médicos.
    <br><br>
    Conforme controlou cada vez mais os poderes que a Hito Hito no Mi lhe proporcionou, ele já conseguiu assumir sete formas diferentes. Crescer seus pelos, aumentar seus músculos, diminuir seu peso e aprimorar sua velocidade são alguns dos recursos que consegue alcançar a partir dessas transformações. Sua recompensa é de $1000, por ele ser confundido com um mascote frequentemente.
    <br><br>
    <h3>Poderes<h3>
    Horn Point: provoca o crescimento de seus chifres.
    Jumping Point: assume uma forma mais humana, bípede, e aumenta o tamanho de suas pernas para ganhar velocidade e dar grandes saltos.
    Arm Point: amplia seus músculos, numa forma humanoide que deixa seus cascos dianteiros extremamente fortes.
    Monster Point: Chopper fica com mais de 6 metros de altura, ganhando uma força monstruosa, ganha três chifres.
    Guard Point: Seu pelo cresce impedir ataques externos como uma armadura.
    `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}


function robin() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Robin`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/robin.jpg" alt="">  <br> 
    Quando entrou para a tripulação: <br>

    Entra no final da Saga Alabasta / Arco Alabasta (Episódios 92 ao 130);  <br>
    Sai na Saga Water 7 / Arco Water 7 (Episódio 227 ao 265)  <br>
    Retorna ainda na Saga Water 7 / Arco Enies Lobby (episódios 266 ao 312)  <br>
    Akuma no Mi: Hana Hana no Mi (Fruta da Flor)  <br>
    Função no grupo: arqueóloga e historiadora  <br>
    <br> <br>
    Embora tenha sido apresentada antes de Chopper, Nico Robin inicialmente era uma antagonista secundária da Saga Alabasta, período em que era conhecida como Miss All Sunday. Ela só passou a integrar a tripulação de Luffy já depois da entrada do médico rena, chegando a sair do grupo uma vez e reintegrando a equipe oficialmente apenas no final do Arco Enies Lobby.
    <br> <br>
    Sétima integrante dos Chapéus de Palha, Nico Robin atua como a arqueóloga e historiadora do grupo. Única sobrevivente da ilha de Ohara, a jovem é atualmente a única pessoa capaz de ler Poneglyphs, ato considerado um risco para o Governo Mundial. Considera que seus colegas de tripulação não apenas a salvaram, mas também reviveram seu sonho de alcançar a liberdade para viajar o mundo estudando seus mistérios. Sua recompensa é de $930.000.000.
    <br> <br>
    Nico alcançou um incrível preparo físico durante sua vida de batalhas e fugas. Além disso, ela comeu a fruta Hana Hana no Mi, que lhe concedeu a habilidade de replicar partes de seu corpo em qualquer superfície, sejam objetos, outros seres vivos ou em seu próprio corpo.
    <br> <br>
    >h3>Poderes</h3>
    Clutch: com essa técnica, ela replica suas mãos nas costas do oponente e as usa para atacá-lo sem que ela possa revidar.
    Cuerpo Fleur: Doble Clutch: Nico cria um clone seu e replica quatro braços a mais para si mesma e para seu clone, aumentando seu poder de ataque.
    Ojos Fleur: com essa técnica de espionagem, ela é capaz de replicar seus olhos em um objeto ou no corpo de outra pessoa, mesmo a longas distâncias.
    Oreja Fleur: também útil para conseguir informações sigilosas, ela replica suas orelhas onde desejar.
    `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}
  
function franky() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `franky`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/franky.jpg" alt=""> <br>
    Quando entrou para a tripulação: Saga Water 7 / Arco Pós-Enies Lobby / Episódio 322 <br>
    Akuma no Mi:  não possui <br>
    Função no grupo: </b> carpinteiro <br>

    <br> <br>
    Na Saga Water 7, conhecemos aquele que se tornaria o oitavo pirata a fazer parte da tripulação de Luffy, Franky. Contudo, assim como Nico Robin, o personagem começa sua trajetória como um antagonista. Um ciborgue de 36 anos, Franky é o líder da Família Franky, que trabalhava com o desmantelamento de navios.
    <br><br>
    No decorrer do arco Water 7, o grupo e os Chapéus de Palha se tornam aliados. Depois disso, a Família Franky permite que Franky se una à tripulação, para um dia realizar seu sonho de construir e dirigir um navio poderoso o suficiente para dar a volta ao mundo.
    <br><br>
    No grupo, Franky se tornou um dos integrantes mais atenciosos e maduros, embora seu jeito meio excêntrico passe a ideia errada inicialmente. Sempre preocupado com seus companheiros, ele arrisca sua vida para proteger a equipe e quaisquer pessoas que são perseguidas, uma vez que, para ele, ninguém deve ser julgado por ser quem é. Sua recompensa é de $394.000.000.

    <h3>Poderes</h3>
    Força sobre-humana: mesmo quando perigosamente ferido, Franky ainda se destaca como um dos integrantes mais fortes da tripulação.
    Habilidades com armas: Franky consegue usar qualquer tipo de arma que chegue a suas mãos com grande destreza. Além disso, inclui armas em seu próprio corpo ciborgue.
    Audição aprimorada: o pirata é capaz de ouvir informações ditas e outros sons mesmo a grandes distâncias.
    Inteligência: Franky é um gênio da construção naval, com conhecimentos de engenharia e carpintaria, sendo capaz de criar importantes itens incrivelmente tecnológicos com facilidade
    `
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}
  
function brook() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Brook`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/brook.jpeg" alt=""> <br>
    Quando entrou para a tripulação: Saga Thriller Bark / Arco Thriller Bark / Episódio 381 <br>
    Akuma no Mi: Yomi Yomi no Mi (Fruta Revive-Revive) <br>
    Função no grupo: espadachim e músico <br>
    <br><br>
    Nono pirata a integrar a tripulação dos Chapéus de Palha, Brook foi encontrado por Luffy e sua equipe em uma ilha fantasma conhecida como Thriller Bark, no Triângulo Florian. O pirata viveu lá por quase 50 anos após a morte de sua tripulação. Sua antiga equipe foi vítima de doenças e diferentes inimigos. Brook sobreviveu apenas graças à fruta Yomi Yomi no Mi, que lhe proporcionou uma segunda vida como um esqueleto imortal.
    <br><br>
    Brook acaba ajudando Luffy e sua equipe a lutar contra o perigoso Warlord do mar Gecko Moria, e ao final do arco Thriller Bark, episódio 381 mais especificamente, o músico pede a Luffy para entrar na tripulação, pedido aceito de imediato pelo capitão. Na tripulação, além de músico, ele é o segundo espadachim - com Zoro sendo o primeiro. Sua recompensa de $383.000.000.
    <br><br>
    Por baixo de sua personalidade excêntrica e cômica, Brook é extremamente sensível. A vontade de entrar para a tripulação se justifica tanto na sua paixão por navegar quanto pelo seu sonho de um dia reencontrar o filhote de baleia Laboon, adotado como mascote de sua antiga tripulação.

    <h3>Poderes</h3>
    Música: além de entreter com sua arte, Brook é capaz de usar sua música para influenciar as pessoas, e até fazer os oponentes adormecerem. Ele consegue tocar qualquer instrumento.
    Esgrima: extremamente habilidoso com a espada, é uma forte presença em batalha.
    Capacidades físicas aprimoradas: seu novo corpo esquelético lhe proporcionou grande velocidade, até da capacidade de saltar extraordinariamente alto e correr sobre a água.
    Projeção astral: Brook aprendeu a projetar seu espírito, conseguindo deixar seu esqueleto para trás enquanto se locomove como uma alma desencarnada.`
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}
  
function jinbe() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Jinbe`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/jinbe.jpg" alt=""> <br>
    Quando entrou para a tripulação: Saga Yonkou / Arco Whole Cake / Episódio 833 <br>
    Akuma no Mi: não possui <br>
    Função no grupo:  timoneiro <br>
    <br> <br>
    Décimo integrante dos Piratas do Chapéu de Palha, Jinbei (ou Jinbe) é um homem-peixe da espécie tubarão-baleia. Durante a aclamada Saga Guerra de Marineford, no episódio 430, ele conhece Luffy e sua equipe e acaba os ajudando no mortal confronto.
    <br> <br>
    O capitão dos Chapéu de Palha convida Jinbei para integrar a tripulação no episódio 568, no final da Saga Ilha dos Homens-Peixe. Apenas algum tempo depois do salto temporal de dois anos, ele aceita o convite. No Arco Whole Cake, episódio 833, Jinbei se alia à tripulação para impedir o plano dos Novos Piratas Homens-Peixe de fazerem um golpe de estado contra o Reino Ryugu. A partir daí, acaba integrando o grupo.
    <br> <br>
    Seu grande sonho é, um dia, alcançar a coexistência pacífica e igualitária entre homens-peixe e humanos, como era o sonho de seu ex-capitão Fisher Tiger. Sua recompensa é de incríveis $1.100.000.000e ele atua como timoneiro da tripulação.

    <h3>Poderes</h3>
    Capacidades físicas sobre-humanas: além de possuir uma força inacreditável e uma grande velocidade, Jinbei tem grande tolerância a dor.
    Karatê Homem-Peixe: Jinbei é mestre em Karatê Homem-Peixe, um estilo de arte marcial que faz com que o pirata seja capaz de atingir inimigos a longas distâncias usando as partículas de água no ar para levar seus golpes; permite que ele controle a água (até mesmo a que existe dentro das pessoas) e se comunique com outras criaturas marinhas.`
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}


function yamato() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Yamato`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/yamato.jpg" alt=""><br>

    Quando entrou para a tripulação: Saga Yonkou / Arco Wano Country / Episódio 972 (episódio em que foi apresentada) <br>
    Akuma no Mi: Inu Inu no Mi <br>
    Função no grupo: ------ <br>
    <br><br>
    Originalmente filha de Kaidou, um dos Quatro Imperadores, Yamato foi contra sua criação para se tornar a herdeira que seu pai esperava. Em vez disso, ela se guiou por sua admiração pelo samurai Kozuki Oden, e após a morte de Oden, passou a imitá-lo e a se identificar como filho de Kaidou. Amigo de Ace desde a visita do pirata ao País Wano, ele aguardou a vinda de Luffy ao local, após saber da morte do amigo e irmão do líder dos Chapéu de Palha.
    <br><br>
    Yamato se uniu a Luffy e à Aliança Ninja-Pirata-Mink-Samurai e pediu para o capitão ajudá-lo a realizar o sonho de Oden de abrir as fronteiras de Wano. Ele foi um dos responsáveis por derrotar Kaidou e os Piratas Beasts, e confiou a Luffy seu sonho de acompanhar sua tripulação e viajar pelo mundo.
    <br><br>
    Como luta ao lado de Luffy já há alguns episódios, muitos fãs já consideram Yamato parte da tripulação do pirata. Contudo, nem mesmo os mangás oficializaram ainda sua entrada para a equipe. Nos mangás, Yamato já conheceu o restante da tripulação de Luffy e pediu para ingressar no grupo, mas aguarda a confirmação do capitão. No anime, essa parte da história ainda não foi transmitida.
    <br><br>
    <h3>Poderes</h3>
    Capacidades físicas sobre-humanas: além de grandes velocidade e resistência, Yamato possui a incrível força de seu pai, Kaidou. Sua força, inclusive, foi pário para os poderes de Luffy.
    Haki: Uma das poucas pessoas capazes de usar as três formas de Haki, Yamato amplia ainda mais suas habilidades físicas.
    Akuma no Mi: após comer a Inu Inu no Mi apenas por fome, Yamato adquiriu a capacidade de se transformar em um lobo divino ou em um híbrido de humano-lobo divino. Além de ter suas capacidades físicas ampliadas, Yamato ganha caninos, garras e instintos predatórios. Mas tem mais. Essa fruta mítica zoan lhe dá a habilidade de usar o elemento do gelo como arma ou proteção.`
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}
  
function vivi() {
  var display = document.getElementById("historia_person").style.display
  var cards1 = document.getElementById("cards1").style.display
  var cards2 = document.getElementById("cards2").style.display
  var cards3 = document.getElementById("cards3").style.display

  
  if (display == 'none') {
    document.getElementById("historia_person").style.display = 'flex'
    document.getElementById('conteudo').style.display = 'flex'
    
    personagem_nome.innerHTML = `Vivi`

    conteudo.innerHTML = `
    <img class="story-img" src="./assets/imagem-historia/vivi.jpg" alt=""><br>
    Quando entrou para a tripulação: Saga Alabasta / Arco Whisky Peak / Episódios 64 ao 67 <br>
    Akuma no Mi: não possui <br>
    Função no grupo: -----<br>
    <br><br>
    Vivi foi apresentada em One Piece como uma das principais antagonistas do Arco Reverse Mountain. Ela era uma caçadora de recompensas conhecida como Miss Wednesday e trabalhava para o grupo criminoso Baroque Works. Em uma reviravolta, durante os eventos do Arco Whisky Peak, Vivi revela ser a princesa de seu país, conta que estava trabalhando como espiã contra o Baroque Works, e se une aos Piratas do Chapéu de Palha.
    <br><br>
    Vivi deixou a tripulação após eles conseguirem vencer o Baroque Works, decidida a ficar em seu país e reconstrui-lo. Contudo, durante quase toda a Saga Alabasta, ela viajou com os Chapéus de Palha e lutou ao seu lado. Por este motivo, ela e seu pet Karoo são considerados membros honorários da tripulação. A personagem ganha espaço novamente no Arco Levely (ou Reverie), entre os episódios 879 e 889, mas apareceu em vários outros no decorrer do anime, sempre como aliada da equipe de Luffy.
    <br><br>
    <h3>Poderes</h3>
    Habilidades de combate: embora Vivi não tenha o treinamento de combate dos Chapéus de Palha, ela já se mostrou muito competente em lutas, com uma agilidade natural. Durante seu tempo como espiã no Baroque Works, ela também desenvolveu talentos para ataques surpresas.
    Diplomacia e liderança: como princesa, Vivi tem habilidades naturais para diplomacia, além de ter grande liderança em seu país.`
  
      document.getElementById("cards1").style.display = 'none'
      document.getElementById("cards2").style.display = 'none'
      document.getElementById("cards3").style.display = 'none'
  
  } else {
    document.getElementById("historia_person").style.display = 'none'
  }
}
  