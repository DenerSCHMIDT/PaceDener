// Dados do plano de treinamento com detalhes expandidos
const planoTreino = [
  {
    id: 'fase1',
    fase: 'Fase 1 - Adaptação',
    objetivo: 'Aumentar volume, reintroduzir tiros e ajustar passada',
    meta: 'Correr 3 km em 4:30/km de forma confortável',
    testeInfo: 'Teste final: 3 km no ritmo mais forte que conseguir manter. Meta: sub 13:30 (4:30/km)',
    semanas: [
      {
        semana: 1,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado curto',
            descricao: '6 x 200m forte com 1\' de descanso',
            detalhe: 'Aquecimento: 10 min trote leve + alongamento dinâmico. Execute 6 repetições de 200m em ritmo forte (3:40-3:50/km), com 1 minuto de descanso caminhando entre cada tiro. Foque na técnica de corrida e respiração. Desaquecimento: 5 min caminhada.',
            duracao: '35-40 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Educativo + leve',
            descricao: '3 km leve + 5x 100m educativos',
            detalhe: 'Inicie com 3 km em ritmo leve e confortável (5:30-6:00/km). Após 2 min de descanso, execute 5 repetições de 100m com exercícios educativos: skipping, calcanhada, passada ampla, elevação de joelhos. Foque na técnica e coordenação.',
            duracao: '25-30 min',
            intensidade: 'baixa'
          },
          {
            dia: 'Sábado',
            tipo: 'Ritmo contínuo',
            descricao: '3 km ritmo moderado',
            detalhe: 'Aquecimento: 5 min trote leve. Execute 3 km em ritmo moderado (4:45-5:00/km), mantendo respiração controlada. Foque em manter o ritmo constante. Desaquecimento: 5 min caminhada + alongamento.',
            duracao: '25-30 min',
            intensidade: 'media'
          }
        ]
      },
      {
        semana: 2,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado médio',
            descricao: '4 x 400m ritmo forte, descanso 90s',
            detalhe: 'Aquecimento: 10 min trote + educativos. Execute 4 repetições de 400m em ritmo forte (3:50-4:00/km), com 90 segundos de descanso ativo (trote leve). Mantenha a técnica mesmo com o cansaço. Desaquecimento: 5 min caminhada.',
            duracao: '40-45 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Subida curta',
            descricao: '8 x 100m subida leve, volta trotando',
            detalhe: 'Encontre uma subida suave (3-5% inclinação). Aquecimento: 8 min trote leve. Execute 8 repetições de 100m subida em ritmo controlado, descendo trotando leve. Foque na postura: tronco ligeiramente inclinado, braços ativos.',
            duracao: '30-35 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Rodagem leve',
            descricao: '4 km leve',
            detalhe: 'Corrida leve e relaxada em ritmo confortável (5:30-6:00/km). Foque na respiração natural e na mecânica de corrida. Este treino é para recuperação ativa e adaptação. Termine se sentindo bem.',
            duracao: '25-30 min',
            intensidade: 'baixa'
          }
        ]
      },
      {
        semana: 3,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado progressivo',
            descricao: '3 x 800m com ritmo progressivo, descanso 2\'',
            detalhe: 'Aquecimento: 12 min trote + educativos. Execute 3 repetições de 800m aumentando o ritmo: 1º em 4:20/km, 2º em 4:10/km, 3º em 4:00/km. Descanso de 2 minutos entre cada. Foque em acelerar gradualmente.',
            duracao: '45-50 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Educativo + tiros curtos',
            descricao: '2 km leve + 6 x 150m com foco na técnica',
            detalhe: 'Inicie com 2 km leve (5:30/km). Após descanso, execute 6 tiros de 150m focando na técnica: frequência de passada, postura, coordenação braços-pernas. Descanso de 90s entre tiros caminhando.',
            duracao: '30-35 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Ritmo progressivo',
            descricao: '4 km aumentando o ritmo por km',
            detalhe: 'Aquecimento: 5 min trote. Execute 4 km aumentando o ritmo a cada quilômetro: 1º km em 5:30/km, 2º em 5:00/km, 3º em 4:30/km, 4º em 4:15/km. Foque em acelerar de forma controlada.',
            duracao: '25-30 min',
            intensidade: 'media'
          }
        ]
      },
      {
        semana: 4,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado longo',
            descricao: '2 x 1 km ritmo forte, 3\' de descanso',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 2 repetições de 1 km em ritmo forte (4:00-4:10/km), com 3 minutos de descanso ativo. Foque em manter o ritmo constante durante toda a repetição.',
            duracao: '40-45 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Subida + educativo',
            descricao: '6 x 120m subida + 4 x 100m educativos',
            detalhe: 'Aquecimento: 10 min. Execute 6 repetições de 120m em subida moderada, descendo caminhando. Após 5 min de descanso, faça 4 educativos de 100m no plano. Combine força e técnica.',
            duracao: '35-40 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Rodagem média',
            descricao: '5 km ritmo moderado',
            detalhe: 'Corrida em ritmo moderado e controlado (4:45-5:00/km). Mantenha a respiração confortável e foque na eficiência da passada. Este é um treino de consolidação da base aeróbica.',
            duracao: '25-30 min',
            intensidade: 'media'
          }
        ]
      }
    ]
  },
  {
    id: 'fase2',
    fase: 'Fase 2 - Construção de Ritmo',
    objetivo: 'Consolidar ritmo em torno de 4:15/km e aumentar resistência',
    meta: 'Correr 3 km em 4:15/km de forma consistente',
    testeInfo: 'Teste final: 3 km buscando ritmo constante. Meta: sub 12:45 (4:15/km)',
    semanas: [
      {
        semana: 5,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado médio',
            descricao: '5 x 600m ritmo forte, 90s de descanso',
            detalhe: 'Aquecimento: 12 min trote + educativos. Execute 5 repetições de 600m em ritmo forte (3:55-4:05/km), com 90 segundos de descanso ativo. Mantenha a técnica e respiração controlada.',
            duracao: '45-50 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Educativo + progressivo',
            descricao: '2 km leve + 3 km progressivo (5:00 → 4:10/km)',
            detalhe: 'Inicie com 2 km leve (5:30/km). Após 2 min de descanso, execute 3 km progressivo: inicie em 5:00/km e termine em 4:10/km, acelerando gradualmente. Foque na transição suave entre ritmos.',
            duracao: '30-35 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Rodagem leve',
            descricao: '5 km regenerativo',
            detalhe: 'Corrida leve e relaxada (5:30-6:00/km). Foque na recuperação ativa, respiração natural e prazer de correr. Este treino ajuda na adaptação e recuperação.',
            duracao: '30-35 min',
            intensidade: 'baixa'
          }
        ]
      },
      {
        semana: 6,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado longo',
            descricao: '3 x 1 km ritmo alvo (4:00/km), 2\' descanso',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 3 repetições de 1 km no ritmo alvo (4:00/km), com 2 minutos de descanso ativo. Este é um treino chave para desenvolver o ritmo de prova.',
            duracao: '45-50 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Subida técnica',
            descricao: '10 x 120m subida com foco em passada e respiração',
            detalhe: 'Aquecimento: 10 min. Execute 10 repetições de 120m em subida moderada (5-7%), focando na técnica: passada eficiente, postura, coordenação respiratória. Descida caminhando.',
            duracao: '40-45 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Ritmo contínuo',
            descricao: '4 km a 4:20/km',
            detalhe: 'Aquecimento: 8 min trote. Execute 4 km em ritmo constante (4:20/km). Foque em manter o ritmo, respiração controlada e eficiência. Desaquecimento: 5 min caminhada.',
            duracao: '30-35 min',
            intensidade: 'media'
          }
        ]
      },
      {
        semana: 7,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado progressivo',
            descricao: '3 x 1 km (4:15 → 4:00 → 3:50/km), 2\' pausa',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 3 repetições de 1 km com ritmo progressivo: 1º em 4:15/km, 2º em 4:00/km, 3º em 3:50/km. Pausa de 2 minutos entre cada.',
            duracao: '45-50 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Educativo + tiros curtos',
            descricao: '5 x 150m forte após 2 km leve',
            detalhe: 'Inicie com 2 km leve (5:30/km). Após 3 min de descanso, execute 5 tiros de 150m em ritmo forte (3:45/km), com 90s de descanso. Foque na velocidade e técnica.',
            duracao: '30-35 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Rodagem média',
            descricao: '6 km ritmo confortável',
            detalhe: 'Corrida em ritmo confortável (4:45-5:00/km). Mantenha conversação possível durante toda a corrida. Foque na eficiência e no desenvolvimento da base aeróbica.',
            duracao: '30-35 min',
            intensidade: 'media'
          }
        ]
      },
      {
        semana: 8,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado forte',
            descricao: '4 x 800m a 4:00/km, pausa 2\'',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 4 repetições de 800m em ritmo forte (4:00/km), com 2 minutos de descanso ativo. Foque na consistência do ritmo.',
            duracao: '45-50 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Técnico + leve',
            descricao: '2 km leve + educativos variados',
            detalhe: 'Inicie com 2 km leve (5:30/km). Execute série de educativos: skipping, calcanhada, passada ampla, corrida lateral. Foque na técnica e coordenação. Finalize com trote leve.',
            duracao: '25-30 min',
            intensidade: 'baixa'
          },
          {
            dia: 'Sábado',
            tipo: 'Ritmo progressivo',
            descricao: '5 km (últimos 2 km abaixo de 4:15/km)',
            detalhe: 'Aquecimento: 5 min trote. Execute 5 km iniciando em ritmo moderado (4:45/km) e terminando os últimos 2 km abaixo de 4:15/km. Foque na progressão controlada.',
            duracao: '30-35 min',
            intensidade: 'media'
          }
        ]
      }
    ]
  },
  {
    id: 'fase3',
    fase: 'Fase 3 - Intensificação',
    objetivo: 'Correr treinos abaixo de 4:00/km com mais constância',
    meta: 'Correr 3 km em 4:00/km com controle',
    testeInfo: 'Teste final: 3 km em ritmo forte controlado. Meta: sub 12:00 (4:00/km)',
    semanas: [
      {
        semana: 9,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado',
            descricao: '6 x 500m a 3:55/km, pausa 90s',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 6 repetições de 500m em ritmo forte (3:55/km), com 90 segundos de descanso ativo. Foque na velocidade e técnica.',
            duracao: '45-50 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Ritmo + educativo',
            descricao: '4 km a 4:15/km + 4 educativos de técnica',
            detalhe: 'Execute 4 km em ritmo controlado (4:15/km). Após 3 min de descanso, faça 4 educativos de 100m focando na técnica de corrida. Combine resistência e coordenação.',
            duracao: '30-35 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Rodagem forte',
            descricao: '5 km progressivo até 4:00/km',
            detalhe: 'Inicie em ritmo moderado (4:30/km) e progrida até 4:00/km nos últimos 2 km. Foque na transição suave e controle do esforço.',
            duracao: '25-30 min',
            intensidade: 'media'
          }
        ]
      },
      {
        semana: 10,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado forte',
            descricao: '4 x 1 km a 3:50/km, 3\' descanso',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 4 repetições de 1 km em ritmo forte (3:50/km), com 3 minutos de descanso ativo. Treino chave para desenvolvimento de velocidade.',
            duracao: '50-55 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Subida + força',
            descricao: '10 x 100m subida + 4 tiros curtos no plano',
            detalhe: 'Aquecimento: 10 min. Execute 10 repetições de 100m em subida forte, descendo caminhando. Após 5 min de descanso, faça 4 tiros de 100m no plano. Combine força e velocidade.',
            duracao: '40-45 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Rodagem leve',
            descricao: '6 km leve',
            detalhe: 'Corrida leve e relaxada (5:30-6:00/km). Foque na recuperação ativa e na mecânica de corrida. Mantenha o prazer de correr.',
            duracao: '35-40 min',
            intensidade: 'baixa'
          }
        ]
      },
      {
        semana: 11,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Tiros variados',
            descricao: '3 x (400m + 600m + 800m) com ritmo abaixo de 4:00/km',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 3 séries de tiros variados (400m + 600m + 800m) todos abaixo de 4:00/km. Descanso: 90s entre tiros, 3 min entre séries.',
            duracao: '55-60 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Educativos + coordenação',
            descricao: '2 km leve + educativos + 3 acelerações',
            detalhe: 'Inicie com 2 km leve (5:30/km). Execute série completa de educativos + 3 acelerações progressivas de 100m. Foque na coordenação e técnica.',
            duracao: '30-35 min',
            intensidade: 'baixa'
          },
          {
            dia: 'Sábado',
            tipo: 'Ritmo longo',
            descricao: '6 km mantendo 4:10/km',
            detalhe: 'Aquecimento: 8 min trote. Execute 6 km em ritmo constante (4:10/km). Foque em manter o ritmo, respiração controlada e eficiência durante toda a distância.',
            duracao: '35-40 min',
            intensidade: 'media'
          }
        ]
      },
      {
        semana: 12,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado longo',
            descricao: '2 x 1.5 km a 3:50/km, 4\' descanso',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 2 repetições de 1.5 km em ritmo forte (3:50/km), com 4 minutos de descanso ativo. Treino de resistência à velocidade.',
            duracao: '50-55 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Técnico + rodagem',
            descricao: '2 km + educativos + 3 km leve',
            detalhe: 'Inicie com 2 km leve, execute educativos completos, finalize com 3 km leve. Treino de recuperação ativa com foco na técnica.',
            duracao: '30-35 min',
            intensidade: 'baixa'
          },
          {
            dia: 'Sábado',
            tipo: 'Rodagem média',
            descricao: '7 km confortável',
            detalhe: 'Corrida em ritmo confortável (4:30-4:45/km). Mantenha conversação possível. Foque na eficiência e no desenvolvimento da base aeróbica.',
            duracao: '35-40 min',
            intensidade: 'media'
          }
        ]
      }
    ]
  },
  {
    id: 'fase4',
    fase: 'Fase 4 - Pico de Desempenho',
    objetivo: 'Executar treinos em ritmo de prova (3:50/km) com eficiência',
    meta: 'Correr 3 km em 3:50/km de forma eficiente',
    testeInfo: 'Teste final: 3 km para tempo máximo. Meta: sub 11:30 (3:50/km)',
    semanas: [
      {
        semana: 13,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado forte',
            descricao: '5 x 1 km a 3:50/km, 2\' descanso',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 5 repetições de 1 km no ritmo alvo (3:50/km), com 2 minutos de descanso ativo. Treino específico para o ritmo de prova.',
            duracao: '50-55 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Ritmo + subida',
            descricao: '3 km a 4:10/km + 6 x 100m subida',
            detalhe: 'Execute 3 km em ritmo controlado (4:10/km). Após 3 min de descanso, faça 6 repetições de 100m em subida forte. Combine resistência e força.',
            duracao: '30-35 min',
            intensidade: 'media'
          },
          {
            dia: 'Sábado',
            tipo: 'Rodagem leve',
            descricao: '5 km leve',
            detalhe: 'Corrida leve e relaxada (5:30-6:00/km). Foque na recuperação e na preparação para os treinos mais intensos da semana.',
            duracao: '30-35 min',
            intensidade: 'baixa'
          }
        ]
      },
      {
        semana: 14,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Tiros progressivos',
            descricao: '3 x 1 km: 4:00 → 3:55 → 3:50/km',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 3 repetições de 1 km com ritmo progressivo: 1º em 4:00/km, 2º em 3:55/km, 3º em 3:50/km. Descanso de 2 min entre cada.',
            duracao: '45-50 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Educativo técnico',
            descricao: '2 km + educativos + tiros de 100m',
            detalhe: 'Inicie com 2 km leve (5:30/km). Execute educativos completos + 4 tiros de 100m em ritmo forte. Foque na técnica e coordenação.',
            duracao: '25-30 min',
            intensidade: 'baixa'
          },
          {
            dia: 'Sábado',
            tipo: 'Ritmo contínuo',
            descricao: '5 km a 4:00/km',
            detalhe: 'Aquecimento: 10 min trote. Execute 5 km em ritmo constante (4:00/km). Foque em manter o ritmo, respiração controlada e eficiência.',
            duracao: '30-35 min',
            intensidade: 'media'
          }
        ]
      },
      {
        semana: 15,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Intervalado específico',
            descricao: '2 x 1.5 km a 3:50/km, descanso 3\'',
            detalhe: 'Aquecimento: 15 min trote + educativos. Execute 2 repetições de 1.5 km no ritmo alvo (3:50/km), com 3 minutos de descanso ativo. Simulação específica da prova.',
            duracao: '45-50 min',
            intensidade: 'alta'
          },
          {
            dia: 'Quinta',
            tipo: 'Rodagem + técnica',
            descricao: '3 km leve + educativos',
            detalhe: 'Corrida leve (5:30/km) + série completa de educativos. Treino de recuperação ativa com foco na técnica e preparação para o teste.',
            duracao: '25-30 min',
            intensidade: 'baixa'
          },
          {
            dia: 'Sábado',
            tipo: 'Teste',
            descricao: '3 km para tempo, tentando ritmo 3:50/km',
            detalhe: 'Aquecimento: 15 min trote + educativos + 3 acelerações. Execute 3 km para tempo, buscando manter 3:50/km. Foque na distribuição do esforço. Desaquecimento: 10 min leve.',
            duracao: '35-40 min',
            intensidade: 'alta'
          }
        ]
      },
      {
        semana: 16,
        treinos: [
          {
            dia: 'Terça',
            tipo: 'Solto',
            descricao: '3 km regenerativo',
            detalhe: 'Corrida muito leve e relaxada (6:00-6:30/km). Foque na recuperação e na preparação mental para a prova final. Mantenha o prazer de correr.',
            duracao: '20-25 min',
            intensidade: 'baixa'
          },
          {
            dia: 'Quinta',
            tipo: 'Ajuste leve',
            descricao: '2 km + educativos suaves',
            detalhe: 'Trote leve (5:30/km) + educativos suaves. Ativação neuromuscular para a prova. Mantenha o corpo ativo sem cansar.',
            duracao: '20-25 min',
            intensidade: 'baixa'
          },
          {
            dia: 'Sábado',
            tipo: 'Prova ou simulado',
            descricao: '5 km para tempo, alvo: 3:50/km',
            detalhe: 'Aquecimento: 15 min trote + educativos + 3 acelerações progressivas. Execute 5 km para tempo, buscando manter 3:50/km. Foque na estratégia de prova e distribuição do esforço.',
            duracao: '40-45 min',
            intensidade: 'alta'
          }
        ]
      }
    ]
  }
];

// Configurações de intensidade
const intensityLabels = {
  baixa: 'Baixa Intensidade',
  media: 'Média Intensidade',
  alta: 'Alta Intensidade'
};

// Estado da aplicação
let currentTheme = 'light';
let selectedTraining = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializeNavigation();
  initializeModal();
  populateAllTables();
  
  console.log('Plano de Treinamento carregado com sucesso!');
  console.log(`Total de fases: ${planoTreino.length}`);
  console.log(`Total de semanas: ${planoTreino.reduce((total, fase) => total + fase.semanas.length, 0)}`);
});

// Gerenciamento de tema
function initializeTheme() {
  // Verificar preferência salva ou do sistema
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  currentTheme = savedTheme || systemTheme;
  applyTheme(currentTheme);
  
  // Event listener para o botão de tema
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function applyTheme(theme) {
  document.body.className = theme + '-theme';
  currentTheme = theme;
}

function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

// Navegação
function initializeNavigation() {
  // Menu mobile toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  
  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', function() {
      navMobile.classList.toggle('active');
      
      // Alternar ícones
      const hamburgerIcon = menuToggle.querySelector('.hamburger-icon');
      const closeIcon = menuToggle.querySelector('.close-icon');
      
      if (navMobile.classList.contains('active')) {
        hamburgerIcon.style.opacity = '0';
        closeIcon.style.opacity = '1';
      } else {
        hamburgerIcon.style.opacity = '1';
        closeIcon.style.opacity = '0';
      }
    });
  }
  
  // Navegação suave
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        if (navMobile && navMobile.classList.contains('active')) {
          navMobile.classList.remove('active');
          const hamburgerIcon = menuToggle.querySelector('.hamburger-icon');
          const closeIcon = menuToggle.querySelector('.close-icon');
          hamburgerIcon.style.opacity = '1';
          closeIcon.style.opacity = '0';
        }
      }
    });
  });
  
  // Destacar link ativo
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('.phase-section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Modal
function initializeModal() {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const modalOk = document.getElementById('modal-ok');
  const modalOverlay = document.querySelector('.modal-overlay');
  
  // Fechar modal
  [modalClose, modalOk, modalOverlay].forEach(element => {
    if (element) {
      element.addEventListener('click', closeModal);
    }
  });
  
  // Fechar modal com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(training) {
  selectedTraining = training;
  const modal = document.getElementById('modal');
  
  // Preencher dados do modal
  document.getElementById('modal-title').textContent = training.tipo;
  document.getElementById('modal-day').textContent = training.dia;
  document.getElementById('modal-description').textContent = training.descricao;
  document.getElementById('modal-intensity-label').textContent = intensityLabels[training.intensidade];
  document.getElementById('modal-duration').textContent = training.duracao || 'Não especificado';
  document.getElementById('modal-detail').textContent = training.detalhe;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  selectedTraining = null;
}

// População das tabelas
function populateAllTables() {
  planoTreino.forEach((fase, index) => {
    populateTable(fase, index + 1);
  });
}

function populateTable(fase, faseNumber) {
  const tableId = `table-fase${faseNumber}`;
  const table = document.getElementById(tableId);
  
  if (!table) return;
  
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';
  
  fase.semanas.forEach(semana => {
    semana.treinos.forEach((treino, index) => {
      const row = document.createElement('tr');
      
      // Adicionar classe de intensidade
      if (treino.intensidade === 'alta') {
        row.classList.add('intensity-high');
      } else if (treino.intensidade === 'media') {
        row.classList.add('intensity-medium');
      }
      
      // Criar células
      const semanaCell = document.createElement('td');
      semanaCell.textContent = index === 0 ? semana.semana : '';
      
      const diaCell = document.createElement('td');
      diaCell.textContent = treino.dia;
      
      const tipoCell = document.createElement('td');
      tipoCell.innerHTML = `
        ${treino.tipo}
        ${treino.intensidade === 'alta' ? '<span class="intensity-badge">Alta</span>' : ''}
        ${treino.intensidade === 'media' ? '<span class="intensity-badge">Média</span>' : ''}
      `;
      
      const descricaoCell = document.createElement('td');
      descricaoCell.innerHTML = `
        <div style="margin-bottom: 0.25rem;">${treino.descricao}</div>
        ${treino.duracao ? `<div style="font-size: 0.75rem; color: var(--text-secondary);">${treino.duracao}</div>` : ''}
      `;
      
      // Adicionar células à linha
      row.appendChild(semanaCell);
      row.appendChild(diaCell);
      row.appendChild(tipoCell);
      row.appendChild(descricaoCell);
      
      // Event listener para abrir modal
      row.addEventListener('click', () => openModal(treino));
      
      tbody.appendChild(row);
    });
  });
}

// Funcionalidade dos formulários de teste
document.addEventListener('DOMContentLoaded', function() {
  const testButtons = document.querySelectorAll('.test-button');
  
  testButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const form = this.closest('.test-form');
      const input = form.querySelector('.test-input');
      const time = input.value.trim();
      
      if (time) {
        // Aqui você pode implementar a lógica para salvar o tempo
        // Por enquanto, apenas mostra um alerta
        alert(`Tempo registrado: ${time}`);
        
        // Opcional: salvar no localStorage
        const phaseId = this.closest('.phase-section').id;
        const savedTimes = JSON.parse(localStorage.getItem('testTimes') || '{}');
        savedTimes[phaseId] = time;
        localStorage.setItem('testTimes', JSON.stringify(savedTimes));
        
        // Limpar campo
        input.value = '';
      } else {
        alert('Por favor, insira um tempo válido (ex: 12:30)');
      }
    });
  });
  
  // Carregar tempos salvos
  loadSavedTimes();
});

function loadSavedTimes() {
  const savedTimes = JSON.parse(localStorage.getItem('testTimes') || '{}');
  
  Object.keys(savedTimes).forEach(phaseId => {
    const section = document.getElementById(phaseId);
    if (section) {
      const input = section.querySelector('.test-input');
      if (input) {
        input.placeholder = `Último: ${savedTimes[phaseId]}`;
      }
    }
  });
} 