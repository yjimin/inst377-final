const http = require('http')
const port = 3000

const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

// Supabase
const supabaseClient = require('@supabase/supabase-js')
const supabaseUrl = 'https://ijzmjgvfotgiyyyeqdqc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqem1qZ3Zmb3RnaXl5eWVxZHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMjg4MTcsImV4cCI6MjAzMTcwNDgxN30.ctyi1fXqVrVkWFOx1RBDPKT-Mxb4qEKnhDxqs8-Tz5M'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/food.html', { root: __dirname })
})

app.get('/plans', async(req, res) => {
    console.log('Attempting get recipes')
    
    const { data, error } = await supabase
        .from('Plans')
        .select();

    if (error) {
        console.log(error)
        res.send(error)
    } else if (data) {
        res.send(data)
    }
})

app.post('/plans', async(req, res) => {
    console.log('Attempting post recipe')

    var recipes = req.body.recipes
    const { data, error } = await supabase
        .from('Plans')
        .insert([
            { 
                'recipes': recipes
            }
        ])

    if (error) {
        console.log(error)
        res.send(error)
    } else if (data) {
        res.send(data)
    }
    return;
})


app.listen(port, () => {
    console.log(`Server running`)
})
