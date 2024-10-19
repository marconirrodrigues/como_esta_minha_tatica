# Usar a imagem oficial do Node.js
FROM node:14

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e instalar as dependências
COPY package*.json ./

# Instalar as dependências principais e a dependência específica do Babel
RUN npm install
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

# Copiar o restante do código para o container
COPY . .

# Expor a porta 3000 para o React
EXPOSE 3000

# Iniciar a aplicação React
CMD ["npm", "start"]