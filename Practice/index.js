const express = require('express')

const app = express()
const PORT = 3000;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

app.get('/Jojo', (req, res) => {
    res.status(200).send({
        Jojo: "Jotaro",
    })
})

app.post('Jojo/:stand', (req, res) => {
    const { stand } = req.params
    const { power } = req.body
    
    if (!power) {
        res.status(418).send({message: 'Your stand needs to have a power!'})
    }

    res.send({
        stand: `Your ${stand} has the power ${power}`,
    })
})