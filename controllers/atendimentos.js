module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota atendimentos e está realizando um GET'))
}