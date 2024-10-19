// Carregar variáveis de ambiente do .env
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

// Middleware para aceitar JSON e lidar com CORS
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Táticas!');
});

// Rota para receber as táticas e retornar análise básica
app.post('/taticas', (req, res) => {
    const tatica = req.body.formacao; // Recebendo a formação enviada pelo frontend
    console.log(`Formação recebida: ${tatica}`);

    // Exemplo básico de análise
    const resposta = {
        formacao: tatica,
        pontosFortes: ['Bom controle de posse', 'Pressão alta'],
        fraquezas: ['Vulnerável a contra-ataques rápidos']
    };

    res.json(resposta); // Retornar análise em formato JSON
});

// Definir a porta a partir do arquivo .env ou usar 3000 como fallback
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});