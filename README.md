# 🏃‍♂️ Plano de Treinamento 3:50/km

Um site responsivo moderno para acompanhar seu plano de treinamento progressivo de corrida, com o objetivo de atingir 3:50/km.

## ✨ Funcionalidades

- **🎨 Modo Claro/Escuro**: Toggle automático com detecção de preferência do sistema
- **📱 Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **🏃‍♂️ 4 Fases Progressivas**: Adaptação → Construção → Intensificação → Pico
- **📊 Tabelas Interativas**: Clique nos treinos para ver detalhes completos
- **🎯 Metas por Fase**: Objetivos claros e testes finais para cada etapa
- **⚡ Interface Moderna**: Design limpo com animações suaves
- **🔄 Menu Responsivo**: Navegação hambúrguer para dispositivos móveis

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com CSS Variables
- **JavaScript ES6+** - Funcionalidades interativas
- **Google Fonts** - Tipografia (Inter)
- **SVG Icons** - Ícones vetoriais otimizados

## 📦 Instalação

1. **Clone o repositório**:
```bash
git clone <url-do-repositorio>
cd plano-treinamento-corrida
```

2. **Abra o arquivo HTML**:
```bash
# Abra o index.html em qualquer navegador moderno
# Ou use um servidor local simples:
python -m http.server 8000
# ou
npx serve .
```

3. **Acesse no navegador**:
```
http://localhost:8000
# ou simplesmente abra o index.html diretamente
```

## 🏗️ Estrutura do Projeto

```
├── index.html          # Página principal
├── styles.css          # Estilos CSS com temas
├── script.js           # JavaScript com funcionalidades
├── README.md           # Documentação
└── .gitignore          # Arquivos ignorados pelo Git
```

## 🎯 Plano de Treinamento

### Fase 1 - Adaptação (Semanas 1-4)
- **Objetivo**: Aumentar volume, reintroduzir tiros e ajustar passada
- **Meta**: Correr 3 km em 4:30/km de forma confortável

### Fase 2 - Construção de Ritmo (Semanas 5-8)
- **Objetivo**: Consolidar ritmo em torno de 4:15/km e aumentar resistência
- **Meta**: Correr 3 km em 4:15/km de forma consistente

### Fase 3 - Intensificação (Semanas 9-12)
- **Objetivo**: Correr treinos abaixo de 4:00/km com mais constância
- **Meta**: Correr 3 km em 4:00/km com controle

### Fase 4 - Pico de Desempenho (Semanas 13-16)
- **Objetivo**: Executar treinos em ritmo de prova (3:50/km) com eficiência
- **Meta**: Correr 3 km em 3:50/km de forma eficiente

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `styles.css` nas variáveis CSS:
- **Primary**: Tons de cinza para base (variáveis `--bg-*` e `--text-*`)
- **Accent**: Tons de azul para destaques (variáveis `--accent-*`)

### Dados dos Treinos
Os dados podem ser modificados no arquivo `script.js` na constante `planoTreino`.

## 📱 Responsividade

- **Desktop**: Layout completo com navegação horizontal
- **Tablet**: Layout adaptado com navegação responsiva
- **Mobile**: Menu hambúrguer e tabelas com scroll horizontal

## 🔧 Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador moderno
2. **Navegue pelas fases** usando o menu superior
3. **Clique nos treinos** para ver detalhes completos
4. **Alterne entre tema claro/escuro** usando o botão no canto superior direito
5. **Registre seus tempos** nos campos de teste de cada fase

## 🚀 Deploy

O projeto está pronto para deploy em qualquer plataforma de hospedagem estática:
- **Netlify** (recomendado - arraste e solte a pasta)
- **Vercel** (suporte nativo para sites estáticos)
- **GitHub Pages** (hospedagem gratuita)
- **Surge.sh** (deploy rápido via CLI)

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

---

**Desenvolvido com ❤️ para corredores dedicados** 🏃‍♂️🏃‍♀️ 