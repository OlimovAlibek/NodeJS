const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

const dbURL = 'mongodb+srv://ali:Rg4h9SpEayGy4waJ@firstnodecluster.wbcyf.mongodb.net/FirstDatabase?retryWrites=true&w=majority&appName=FirstNodeCluster'
mongoose.connect(dbURL)
.then((result) => app.listen(3000)
).catch((err) => console.log(err))



app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    // res.send('<p>It is Express</p>')
    // res.sendFile('./views/index.html', {root: __dirname})
    res.redirect('/blogs')
})

app.use(blogRoutes)

app.get('/about', (req,res) => {
    // res.send('<p>It is Express About page</p>')
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('about', {title: 'About'})
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})