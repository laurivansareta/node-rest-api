const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento) {
        const {cliente, pet, servico, status, observacoes} = atendimento
        const parametros = [cliente, pet, servico, status, observacoes]

        console.log('parametros', parametros)

        const sql = "INSERT INTO atendimentos (cliente, pet, servico, status, observacoes) " +
            " VALUES($1, $2, $3, $4, $5); "

        conexao.query(sql, parametros, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else {
                console.log(resultados)
            }            
        })
    }
}

module.exports = new Atendimento