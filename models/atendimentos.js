const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {
    adiciona(atendimento, res) {
        const sql = "INSERT INTO atendimentos (cliente, pet, servico, status, observacoes, data_agendamento, data_criacao) " +
            " VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id; "
        let {cliente, pet, servico, status, observacoes, dataAgenamento} = atendimento
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        dataAgenamento = moment(atendimento.data_agendamento, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss')

        const parametros = [cliente, pet, servico, status, observacoes, dataAgenamento, dataCriacao]

        conexao.query(sql, parametros, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else {                
                res.status(201).json(resultados)
            }            
        })
    }
}

module.exports = new Atendimento