const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const CORS = require('cors');

// sets
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());


// rotas
app.get('/', (req, res, ) => {
    res.render('./index')
})


app.post('/savetemplate', async (req, res) => {
    const data = await JSON.stringify(req.body.templateJSON)

    fs.writeFile('./public/json/template_app.json', JSON.stringify(data), (error) => {
        if(error){
            console.log(`error: ${error}`)
        } else {
            console.log(data)
        }
    })
})



app.listen(444, () => console.log('Servidor iniciado com sucesso!'))