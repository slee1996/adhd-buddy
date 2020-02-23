require('dotenv').config()

const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      gradient = require('gradient-string'),
      ac = require('./controllers/authController'),
      mc = require('./controllers/medsController'),
      {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env,
      cors = require('cors')
      app = express()

app.use(cors())
app.use(express.json())

app.use(
    session({
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60,
            sameSite: 'none'
        },
        secret: SESSION_SECRET
    })
)

const port = SERVER_PORT

app.listen(port, () => console.log(gradient.instagram(`Server blazing on ${port}`)))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(gradient.instagram(`DB connected`))
})

// Auth/User Endpoints
app.post('/api/register', ac.register)
app.post('/api/login', ac.login)
app.post('/api/logout', ac.logout)
app.put('/api/update', ac.update)

// Meds Endpoints
app.get('/api/meds', mc.get)