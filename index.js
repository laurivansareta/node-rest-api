const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
// const conexao = require('./infraestrutura/conexaoMysql') // CONECTANDO AO MYSQL

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conecatado com sucesso!')
        
        const app = customExpress()

        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000')
        })
    }
})

