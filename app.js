const express = require("express")
const app = express()
const port = 8000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (requestAnimationFrame, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))

})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
