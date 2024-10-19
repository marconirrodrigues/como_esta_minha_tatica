import React, { useState } from 'react';

const TaticaForm = () => {
    const [formacao, setFormacao] = useState('');
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/taticas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formacao }),
            });

            if (!response.ok) {
                throw new Error('Erro na requisição');
            }

            const data = await response.json();
            setResultado(data);  // Atualiza o estado com a resposta da API
            setError(null);  // Remove qualquer erro anterior, se houver

        } catch (err) {
            console.error('Erro ao enviar a tática:', err);
            setError('Erro ao conectar com o backend');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Formação Tática:
                    <input 
                        type="text" 
                        value={formacao} 
                        onChange={(e) => setFormacao(e.target.value)} 
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>

            {resultado && (
                <div>
                    <h3>Análise da Tática</h3>
                    <p><strong>Formação:</strong> {resultado.formacao}</p>
                    <p><strong>Pontos Fortes:</strong> {resultado.pontosFortes.join(', ')}</p>
                    <p><strong>Fraquezas:</strong> {resultado.fraquezas.join(', ')}</p>
                </div>
            )}

            {error && (
                <div style={{ color: 'red' }}>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default TaticaForm;
