FROM node:20-alpine

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Definir diretório de trabalho
WORKDIR /app

# Copiar ficheiros de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install

# Copiar resto dos ficheiros do projeto
COPY . .

# Expor porta do Vite
EXPOSE 5173

# Comando para desenvolvimento
CMD ["pnpm", "dev"]

