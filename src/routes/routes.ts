import express from "express" //ESModules

export const router = express.Router()

router.get('/', (_req, res) => {
    res.send("Mi pagina principal")
})

router.post('/', (_req, res) => {
    res.send("Posteado")
})

