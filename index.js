const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
const homeRoutes = require('./routes/home')
const cardRoutes = require('./routes/card')
const addRoutes = require('./routes/add')
const addCourses = require('./routes/courses')


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: false
}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', addCourses)
app.use('/card', cardRoutes)

// app.get('/', (req, res) => {
//     // res.status(200)
//     // res.sendFile(path.join(__dirname, 'views', 'index.html'))


// })

// app.get('/add', (req, res) => {
//     // res.status(200)
//     // res.sendFile(path.join(__dirname, 'views', 'about.html'))

// })

// app.get('/courses', (req, res) => {
//     res.render('courses', {
//         title: 'Курсы',
//         isCourses: true
//     })
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server id running on ${PORT}`)
})