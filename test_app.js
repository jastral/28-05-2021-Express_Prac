const express = require('express')
const app = express()
const path = require('path')

//body parser
app.use(express.urlencoded({ extended: false }))

//configuring port to 3000
const port = 3000;


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './test_app.html'))
})

app.get('/about', function (req, res) {
    res.send('<html><h1>About</h1><h3>This is about page</h3></html>')
})

app.post('/myaction', function(req, res) {
    res.send('Hello!!"' + req.body.name+ '".')
})
  
app.listen(port, () => {
    console.log(`App starting a http://localhost:${port}`)
})