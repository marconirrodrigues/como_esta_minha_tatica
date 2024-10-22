const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload'); // Para lidar com uploads de arquivos
const { processHtmlFile } = require('./engine'); // Importar a engine que será responsável pela análise

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload()); // Middleware para lidar com uploads de arquivos

// Rota de teste
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Rota para upload de arquivo HTML
app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }

    // Pegar o arquivo HTML enviado
    let htmlFile = req.files.file;
    
    // Processar o arquivo HTML
    const resultado = processHtmlFile(htmlFile.data);  // Função que processa o HTML e sugere táticas

    // Retornar resultado (sugestão de táticas)
    res.json(resultado);
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});