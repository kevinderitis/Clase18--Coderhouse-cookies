const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser('esteeselsecretquevaautilizarparacifrar'))

app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies.mail;
    res.send(cookie)
})

app.post('/create-cookie', (req, res) => {
    const mail = req.body.userEmail;
    res.cookie('mail', mail).send('Cookie creada correctamente')
})

// app.get('/setCookie', (req, res) => {
//     res.cookie('insegura', 'este es el valor').send('Cookie agregada')
// })

// app.get('/setCookieExp', (req, res) => {
//     res.cookie('exp', 'valor de exp', { maxAge: 10000}).send('Cookie agregada')
// })

// app.get('/setSignedCookie', (req, res) => {
//     res.cookie('firmada', 'valor de signed', { signed: true }).send('Cookie agregada')
// })

// app.get('/getCookie', (req, res) => {
//     let cookies = { normales: req.cookies, signed: req.signedCookies };
//     res.send(cookies)
// })

const server = app.listen(8080, () => console.log('Server running'))
server.on('error', error => console.log(error))