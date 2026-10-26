const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.send(`Olá mundo ${req.query.nome}`);
});

app.get("/usuarios",(req,res) =>{
    res.send(`buscar usuario`);
});

app.post("/usuarios",(req,res) =>{
    res.send(`criar usuario`);
});

app.put("/usuarios", (req, res) => {
     res.send(`edita o usuario`);
})

app.delete("/usuarios", (req, res) => {
     res.send(`edita o usuario`);
})

app.use((req, res) => {
    res.status(404).send("Deletar usuario");
});

app.listen(3000, () => {
    console.log("Servidor on: http://localhost:3000");
});