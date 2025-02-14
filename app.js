const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

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

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1}).then((result) => {
        res.render('index', {title: 'All blogs', blogs: result})
    }).catch(err => console.log(err)
    )
})

app.post('/blogs', ((req, res) => {
    const blog = new Blog(req.body)

    blog.save().then((result) => {
        res.redirect('/blogs')
    }).catch(err => console.log(err)
    )
}))

app.get('/blogs/:id', ((req, res) => {
    const id = req.params.id
    Blog.findById(id).then((result) => {
        res.render('details', {blog: result, title: 'Blog Details'})
    })
}))

app.delete('/blogs/:id', ((req, res) => {
    const id = req.params.id

    Blog.findByIdAndDelete(id).then(result => {
        res.json({redirect: '/blogs'})
    }).catch(err => console.log(err)
    )
}))

app.get('/about', (req,res) => {
    // res.send('<p>It is Express About page</p>')
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('about', {title: 'About'})
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'})
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})