const express = require("express")
const { createTodo, updateTodo } = require("./types")
const app = express()
const PORT = 3000
app.use(express.json())

app.get('/todos', (req, res) => {
    
})

app.post('/todo', (req, res) => {
    const createPayload = req.body
    const parsePayload = createTodo.safeParse(createPayload)

    if(!parsePayload.success()) {
        res.status(411).json({
            msg: "you have send wrong inputs"
        })
        
    }
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success) {
        res.status(411).
    }

})






app.listen(PORT)