# 🏎️ CountDown F1
Um dashboard interativo para fãs de Fórmula 1, focado em praticar conceitos fundamentais do React. Chega de ficar caçando o horário do TL3 em 10 sites diferentes: aqui você seleciona o Grande Prêmio e a página atualiza dinamicamente o contador, a agenda do fim de semana e as informações do circuito.

# ✨ Funcionalidades Principais
Navegação Dinâmica: Selecione o GP na barra de navegação e veja todo o conteúdo da página ser atualizado instantaneamente.

Contador Regressivo: Cronômetro em tempo real para a próxima sessão de corrida.

Agenda do Fim de Semana: Tabela dinâmica que mostra os horários de todas as sessões (TL1, TL2, TL3, Quali, Corrida) e se ajusta automaticamente para fins de semana com Corrida Sprint.

Informações do Circuito: Um card com uma imagem e curiosidades sobre a pista selecionada.

Resultados da Corrida: Tabela com o pódio ou os resultados da corrida correspondente.

UI com "Scroll Snap": A interface é dividida em seções de tela cheia, criando uma experiência de navegação fluida e moderna.

Tema Escuro: Estilizado com uma paleta de cores escura e personalizada, usando fontes do Google Fonts.

# 📚 O que eu pratiquei neste projeto?
Este projeto foi um campo de treinamento para solidificar conceitos-chave do React e do desenvolvimento frontend moderno:

Gerenciamento de Estado (useState): Usado para controlar qual corrida está selecionada no momento.

Efeitos Colaterais (useEffect): Essencial para fazer o contador regressivo funcionar, atualizando o estado a cada segundo com um setInterval.

Elevação de Estado (Lifting State Up): A lógica principal de qual corrida está selecionada vive no componente App.js (o "cérebro") e é distribuída para os componentes "filhos" (Countdown, GpInfo, etc.) via props.

Renderização de Listas (.map()): Usado para criar dinamicamente a barra de navegação e as tabelas de agenda e resultados a partir de um array de dados.

Renderização Condicional: A "Agenda do Fim de Semana" exibe colunas diferentes (ex: "Sprint Shootout") se um booleano isSprintWeekend for verdadeiro.

Componentização e Props: Divisão da UI em componentes reutilizáveis (Navigation, Countdown, GpInfo, StandingsTable), cada um recebendo seus dados via props.

Estilização com CSS:

Criação de um tema escuro customizado.

Uso de scroll-snap-type para o layout de tela cheia.

Esconder barras de rolagem visualmente.

Carregamento de fontes customizadas (@import do Google Fonts).

Uso de Flexbox para centralização e layout.

# 🚀 Como Rodar o Projeto Localmente
Para clonar e rodar esta aplicação no seu computador, você precisará do Node.js (que já inclui o npm).

Bash

## 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

## 2. Entre na pasta do projeto
cd seu-repositorio

## 3. Instale as dependências
npm install

## 4. Inicie o servidor de desenvolvimento
npm start
Abra http://localhost:3000 no seu navegador para ver o projeto rodando.

# 🔮 Próximos Passos (Melhorias Futuras)
O próximo grande passo é transformar este projeto de um mockup para uma aplicação 100% real:

[ ] Consumir uma API Real: Substituir o "banco de dados" (raceData.js) por chamadas a uma API de F1 (como a Ergast API) para obter dados reais e atualizados.

[ ] Adicionar Mais Seções: Criar seções para a "Classificação de Pilotos" e "Classificação de Construtores" da temporada.

[ ] Responsividade: Melhorar o layout para funcionar perfeitamente em dispositivos móveis.
