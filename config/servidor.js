//importar o pacote express
const express = require('express')

//executar o express
const app = express()

//definir a porta para o servidor 
const porta = process.env.port || 8


// criar uma rota do tipo send
// app.get("/",(req,res)=>{
//     res.send(" <marquee style=color:blue;> era uma casa muito engraçada <br> Não tinha teto Não tinha nada <br> Ninguém podia Entrar nela, não <br> Porque na casa Não tinha chão </marquee> " )
// })
// app.listen(porta)

//definir a pasta dos arquivos de css e imagens
app.use(express.static('./assets'))

//definir o express como body parse
app.use(express.urlencoded({extended:false}))

module.exports = {app,porta}
