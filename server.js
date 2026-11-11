// TRUQUE PARA BURLAR O BLOQUEIO DE DNS DA ESCOLA:
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); 

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Sua URL de conexão normal
const uri = "mongodb+srv://Maria:10062009MG@cluster0.qdyir3n.mongodb.net/MG?retryWrites=true&w=majority";

console.log("⏳ Tentando conectar ao MongoDB...");

mongoose.connect(uri)
    .then(() => {
        console.log("✅ CONEXÃO COM MONGODB REALIZADA COM SUCESSO!");
    })
    .catch((err) => {
        console.error("❌ ERRO GRAVE NO MONGODB:", err.message);
    });

app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000"));