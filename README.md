
# 🍕 Bella Massa - Pizzaria Artesanal

Este projeto é um site moderno e responsivo para uma pizzaria artesanal, desenvolvido com React, Tailwind CSS e TypeScript.

## 🚀 Como fazer o Deploy no GitHub Pages

Para hospedar este site no seu GitHub gratuitamente, siga estes passos:

1.  **Crie um repositório** no seu GitHub.
2.  **Envie os arquivos** do projeto para o repositório:
    ```bash
    git init
    git add .
    git commit -m "First commit"
    git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    git push -u origin main
    ```
3.  **Instale as dependências** localmente:
    ```bash
    npm install
    ```
4.  **Execute o deploy**:
    ```bash
    npm run deploy
    ```

O script `deploy` irá construir o projeto e enviar a pasta `dist` para o branch `gh-pages`, ativando o site automaticamente em `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`.

## 🛠️ Tecnologias
- **React 19**
- **Tailwind CSS** (via CDN no index.html)
- **Vite** (para build ultra-rápido)
- **TypeScript**

## 📱 Funcionalidades
- **Responsivo**: Adaptado para celulares, tablets e desktops.
- **Menu Dinâmico**: Filtros por categorias (Tradicional, Especial, Doce).
- **SEO**: Meta tags configuradas para compartilhamento em redes sociais.
- **WhatsApp**: Botão de contato direto em destaque.
