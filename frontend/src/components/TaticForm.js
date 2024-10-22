import React, { useState } from 'react';
import axios from 'axios';  // Para fazer requisições ao backend

const TaticaForm = () => {
  const [file, setFile] = useState(null);
  const [resultados, setResultados] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResultados(response.data);
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
    }
  };

  return (
    <div>
      <h2>Carregue seu arquivo</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".html" />
        <button type="submit">Enviar</button>
      </form>
      {resultados && (
        <div>
          <h3>Sugestão de Táticas:</h3>
          <p>Formação Sugerida: {resultados.formacaoSugerida}</p>
          <h4>Jogadores em Destaque:</h4>
          <ul>
            {resultados.jogadoresDestaque.map((jogador, index) => (
              <li key={index}>{jogador.nome} - Posição: {jogador.posicao}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaticaForm;