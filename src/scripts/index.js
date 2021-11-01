const listener = require('./eventListener')
const express = require('express')
const session = require('express-session')

const port = 30000
var path = require('path')
const app = express();

app.use(session({secret: 'a18b9d1c285964de89d'}))
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.listen(port, () => console.log("Server running at ", port));

app.post('/', (req,res) => {
    if(req.body.password == password && req.body.login == login) {
        req.session.login = login;

        res.render('logado')
    } else {
        res.render('index');
    }
})

app.get('/', (req, res) => {
    if(req.session.login) {
        res.render('logado')
    } else res.render('index')
})

window.addEventListener('load', listener())