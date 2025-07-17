# Calculadora com React (Padrão + Científica)

Este projeto é uma **calculadora web** feita com **React + TypeScript**, utilizando Vite para uma experiência de desenvolvimento moderna e rápida.

Atualmente, a **versão padrão** da calculadora já está totalmente funcional. A **versão científica** está em desenvolvimento e será adicionada em breve.



## 🛠️ Tecnologias Utilizadas
- React
- Vite
- TypeScript
- CSS Modules



## ✅ Funcionalidades atuais
- Interface limpa
- Operações básicas: adição, subtração, multiplicação e divisão
- Exibição separada de expressão e resultado
- Scroll automático para a direita, acompanhando a digitação
- Layout organizado com `CSS Modules`



  ## 🛠️ Em desenvolvimento

As próximas funcionalidades incluem:

- Operações científicas (raiz quadrada, potência, log, seno, cosseno, etc.)
- Alternância entre modos "Padrão" e "Científico"
- Histórico de cálculos
- Acessibilidade aprimorada
- Responsividade



## 📸 Screenshot / Captura de Tela

![Captura de tela do projeto](./docs/screenshot-calculadora-padrao.png)



## 🔗 Links

- [🔗 Visualizar Projeto](https://github.com/marianaararipe/calculadora-cientifica-react)
- [📂 Código no GitHub](https://github.com/marianaararipe/calculadora-cientifica-react)





## 👤 Autor

- GitHub: [@marianaararipe](https://github.com/marianaararipe)
- Linkedin: [Mariana Araripe](www.linkedin.com/in/marianaararipe)



## 🛠️ Como rodar localmente
1- Clone o repositório:
```bash
git clone https://github.com/marianaararipe/calculadora-cientifica-react.git
cd calculadora-cientifica-react
```

2- Instale as dependências:
```bash
npm install
```

3- Rode o projeto localmente:
```bash
npm run dev
```

1- Acesse no navegador:
```bash
http://localhost:5173
```



## 📁 Estrutura do Projeto

```plaintext
📁 pasta raiz
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
📁 src
├── App.css
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
│
├── 📁 assets
│   └── logo.png
│
└── 📁 components
    ├── BasicButtons.tsx
    ├── Button.module.css
    ├── Button.tsx
    ├── Calculator.module.css
    ├── Calculator.tsx
    ├── Display.module.css
    ├── Display.tsx
    └── ScientificButtons.tsx

