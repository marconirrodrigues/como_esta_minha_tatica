# Use a imagem oficial do Node.js
FROM node:14

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código da aplicação para o diretório de trabalho
COPY . .

# Expor a porta da aplicação
EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "start"]
