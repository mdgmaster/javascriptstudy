const express = require('express')
const morgan = require('morgan')
const { response } = require('express')
const app = express() 
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body),
    ].join(' ')
  }))
 
// Funcion para generar IDs 
const generateId = () => {
    const maxId = persons.length > 0 
    ? Math.max(...persons.map(n => n.id))
    : 0

    return maxId + 1
}

const checkName = (name) => {
    return(persons.filter(person => person.name === name).length>0) 
}

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace", 
        number: "39-44-532352",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234324",
        id: 3
    },
    {
        name: "Mary Poppendie",
        number: "39-23-64231",
        id: 4
    },
]


app.get('/', (req,res) => {
    res.send('<h1>Phonebook Excercise</h1>')
})


app.get('/api/persons', (req,res) => {
    res.json(persons)

})

app.get('/api/persons/:id',(req,res)=>{
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if(person){ res.json(person)
    }else{
        res.status(404).end()
    }
})

app.get('/info', (req,res)=>{
    const total = persons.length
    const fecha = Date();
    res.send(`<p>Phonebook has info for ${total} people</p><p>${fecha}</p>`)
})

app.delete('/api/persons/:id',(req,res)=>{
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()

})

app.post('/api/persons', (req,res)=>{
    const body = req.body

    if(!body.name || !body.number){
        return res.status(400).json({
            error: 'name or number missing'
        }) } 
        
    if(checkName(body.name)){
        return res.status(400).json({
            error: 'name must be uniqe'
        })
    }

    const person = {
            name: body.name,
            number: body.number,
            id: Math.floor(Math.random() * Math.floor(2500)),
        }
        persons = persons.concat(person)
        res.json(person)
        
    })

const PORT = 3001

app.listen(PORT, ()=> {
    console.log(`Server running on port: ${PORT}`)
})