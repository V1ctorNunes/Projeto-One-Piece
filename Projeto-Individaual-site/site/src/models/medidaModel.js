var database = require("../database/config")

function buscarUltimasMedidas(idUsuario) {

  instrucaoSql = 
      `select usuario.nickname  AS Nickname,
      ranking.tentativas AS Tentativas,
      ranking.score AS Pontos
      from ranking join usuario 
      on ranking.fkUsuario = usuario.idUsuario
      where usuario.idUsuario = ${idUsuario}
      `;
    
    


  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidas
}