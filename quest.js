const perguntas = [
    {
      texto: "1 - Você está aprendendo a usar um novo aplicativo no celular. O que ajuda mais?",
      opcoes: [
        {texto: "Ver tutoriais em vídeo ou imagens", tipo: "Visual"},
        {texto: "Alguém explicar em voz alta", tipo: "Auditivo"},
        {texto: "Ler o manual ou instruções", tipo: "Leitura"},
        {texto: "Mexer no aplicativo até entender", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "2 - Você precisa ir até um endereço desconhecido. Como prefere?",
      opcoes: [
        {texto: "Olhar um mapa", tipo: "Visual"},
        {texto: "Perguntar a alguém o caminho", tipo: "Auditivo"},
        {texto: "Ler instruções passo a passo", tipo: "Leitura"},
        {texto: "Ir explorando o local", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "3 - Quando você está aprendendo algo na escola/faculdade, prefere:",
      opcoes: [
        {texto: "Diagramas, gráficos e esquemas", tipo: "Visual"},
        {texto: "Debates e explicações orais", tipo: "Auditivo"},
        {texto: "Textos e apostilas escritas", tipo: "Leitura"},
        {texto: "Experimentos e atividades práticas", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "4 - Você está aprendendo a cozinhar uma receita. O que prefere?",
      opcoes: [
        {texto: "Ver fotos ou vídeos da receita", tipo: "Visual"},
        {texto: "Ouvir alguém explicando", tipo: "Auditivo"},
        {texto: "Ler a receita escrita", tipo: "Leitura"},
        {texto: "Ir fazendo direto e testando", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "5 - Você está em uma palestra. O que mais ajuda a lembrar?",
      opcoes: [
        {texto: "Slides com imagens", tipo: "Visual"},
        {texto: "Ouvir a fala do palestrante", tipo: "Auditivo"},
        {texto: "Receber um resumo escrito", tipo: "Leitura"},
        {texto: "Atividades práticas durante a palestra", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "6 - Se você precisa decorar algo, o que funciona melhor?",
      opcoes: [
        {texto: "Fazer desenhos ou mapas mentais", tipo: "Visual"},
        {texto: "Ler em voz alta ou ouvir gravações", tipo: "Auditivo"},
        {texto: "Escrever várias vezes", tipo: "Leitura"},
        {texto: "Fazer atividades que usem o conteúdo", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "7 - Você precisa escolher um novo celular. O que considera mais útil?",
      opcoes: [
        {texto: "Ver fotos do celular", tipo: "Visual"},
        {texto: "Ouvir a opinião de amigos", tipo: "Auditivo"},
        {texto: "Ler especificações técnicas", tipo: "Leitura"},
        {texto: "Mexer no aparelho na loja", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "8 - Você está aprendendo um esporte novo. O que prefere?",
      opcoes: [
        {texto: "Ver vídeos demonstrativos", tipo: "Visual"},
        {texto: "Ouvir instruções do treinador", tipo: "Auditivo"},
        {texto: "Ler regras e técnicas", tipo: "Leitura"},
        {texto: "Praticar direto", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "9 - Você vai montar um móvel. Como prefere?",
      opcoes: [
        {texto: "Seguir figuras do manual", tipo: "Visual"},
        {texto: "Alguém explicar em voz alta", tipo: "Auditivo"},
        {texto: "Ler instruções escritas", tipo: "Leitura"},
        {texto: "Montar sem ler, testando", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "10 - Se precisa aprender uma nova palavra em inglês, prefere:",
      opcoes: [
        {texto: "Associar com imagens", tipo: "Visual"},
        {texto: "Ouvir a pronúncia", tipo: "Auditivo"},
        {texto: "Ler a tradução", tipo: "Leitura"},
        {texto: "Usar a palavra em frases", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "11 - Você está aprendendo um novo jogo de tabuleiro. Como prefere?",
      opcoes: [
        {texto: "Ver alguém jogar primeiro", tipo: "Visual"},
        {texto: "Ouvir as regras explicadas", tipo: "Auditivo"},
        {texto: "Ler as instruções", tipo: "Leitura"},
        {texto: "Aprender jogando direto", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "12 - Quando você lembra de algo, é mais fácil lembrar:",
      opcoes: [
        {texto: "De imagens ou cenas", tipo: "Visual"},
        {texto: "De sons ou falas", tipo: "Auditivo"},
        {texto: "De palavras escritas", tipo: "Leitura"},
        {texto: "De ações que fez", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "13 - Você vai assistir a uma aula online. O que prefere?",
      opcoes: [
        {texto: "Vídeos com animações", tipo: "Visual"},
        {texto: "Aulas explicadas em áudio", tipo: "Auditivo"},
        {texto: "Slides escritos e PDFs", tipo: "Leitura"},
        {texto: "Atividades práticas junto à aula", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "14 - Você precisa aprender a usar uma nova máquina no trabalho. O que ajuda mais?",
      opcoes: [
        {texto: "Diagramas e rótulos visuais", tipo: "Visual"},
        {texto: "Instruções orais de um colega", tipo: "Auditivo"},
        {texto: "Manual escrito", tipo: "Leitura"},
        {texto: "Experimentar direto na máquina", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "15 - Você está em um museu. O que chama mais sua atenção?",
      opcoes: [
        {texto: "Imagens, quadros, exposições visuais", tipo: "Visual"},
        {texto: "Áudios e explicações de guias", tipo: "Auditivo"},
        {texto: "Textos explicativos", tipo: "Leitura"},
        {texto: "Interagir com objetos e maquetes", tipo: "Cinestésico"}
      ]
    },
    {
      texto: "16 - Quando precisa se lembrar de algo importante, você:",
      opcoes: [
        {texto: "Faz um desenho/esquema", tipo: "Visual"},
        {texto: "Repete em voz alta", tipo: "Auditivo"},
        {texto: "Anota em um papel", tipo: "Leitura"},
        {texto: "Faz algo prático para lembrar", tipo: "Cinestésico"}
      ]
    }
  ];

  let indice = 0;
let pontuacao = { Visual: 0, Auditivo: 0, Leitura: 0, Cinestésico: 0 };
let respostas = Array(perguntas.length).fill(null);

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const btnAvancar = document.getElementById("btnAvancar");
const btnVoltar = document.getElementById("btnVoltar");
const resultadoEl = document.getElementById("resultado");
const tituloEl = document.getElementById("titulo");

function mostrarPergunta() {
  let p = perguntas[indice];
  perguntaEl.textContent = p.texto;
  opcoesEl.innerHTML = "";

  p.opcoes.forEach((op, i) => {
    let btn = document.createElement("button");
    btn.textContent = op.texto;

    btn.onclick = () => {
      respostas[indice] = op.tipo;

      // Remove seleção anterior
      [...opcoesEl.children].forEach(b => b.classList.remove("selecionado"));

      // Marca o botão clicado
      btn.classList.add("selecionado");

      btnAvancar.classList.remove("hidden");
    };

    // Se já tinha resposta salva, marca a opção
    if (respostas[indice] === op.tipo) {
      btn.classList.add("selecionado");
    }

    opcoesEl.appendChild(btn);
  });

  // Botão voltar aparece apenas se não for a primeira
  if (indice > 0) {
    btnVoltar.classList.remove("hidden");
  } else {
    btnVoltar.classList.add("hidden");
  }

  // Ajusta texto do avançar
  if (indice === perguntas.length - 1) {
    btnAvancar.textContent = "Ver Resultado";
  } else {
    btnAvancar.textContent = "Avançar";
  }

  // Se já respondeu antes, deixa avançar liberado
  if (respostas[indice]) {
    btnAvancar.classList.remove("hidden");
  } else {
    btnAvancar.classList.add("hidden");
  }
}

btnAvancar.onclick = () => {
  if (indice === perguntas.length - 1) {
    calcularResultado();
  } else {
    indice++;
    mostrarPergunta();
  }
};

btnVoltar.onclick = () => {
  if (indice > 0) {
    indice--;
    mostrarPergunta();
  }
};

function calcularResultado() {
  // Zera pontuação e recalcula
  pontuacao = { Visual: 0, Auditivo: 0, Leitura: 0, Cinestésico: 0 };
  respostas.forEach(r => {
    if (r) pontuacao[r]++;
  });

  perguntaEl.style.display = "none";
  opcoesEl.style.display = "none";
  btnAvancar.style.display = "none";
  btnVoltar.style.display = "none";
  tituloEl.textContent = "Resultado";
  resultadoEl.classList.remove("hidden");

  // Identifica maior(es)
  let max = Math.max(...Object.values(pontuacao));
  let estilos = Object.keys(pontuacao).filter(est => pontuacao[est] === max);

  let feedback = "";
  estilos.forEach(estilo => {
    if (estilo === "Visual") {
      feedback += `
        <h4 style="color: #007bff; font-weight: bolder;">Visual</h4>
        <p>Você aprende melhor através de recursos visuais como diagramas, mapas e gráficos.</p>
        <p>Utilizar organizadores gráficos pode ajudar na retenção, compreensão e desenvolvimento do pensamento crítico. </p>`;

    } else if (estilo === "Auditivo") {
      feedback += `
        <h4 style="color: #007bff; font-weight: bolder;">Auditivo</h4>
        <p>Você aprende bem ouvindo explicações e discutindo ideias em voz alta.</p>
        <p>Práticas como leituras em voz alta, gravações ou discussões em grupo são altamente benéficas.`;

    } else if (estilo === "Leitura") {
      feedback += `
        <h4 style="color: #007bff; font-weight: bolder;">Leitura/Escrita</h4>
        <p>Você aprende melhor lendo e escrevendo— texto é sua maneira favorita de absorver informações.</p>
        <p>Fazer resumos escritos, anotações detalhadas e ler textos explicativos pode ser útil.</p>`;
    } else if (estilo === "Cinestésico") {
      feedback += `
        <h4 style="color: #007bff; font-weight: bolder;">Cinestésico</h4>
        <p>Você aprende melhor com experiências práticas e movimento corporal.</p>
        <p>A aprendizagem prática, simulações e experimentação ajudam a fixar conceitos.</p>`;
    }
  });

  resultadoEl.innerHTML = `
    <p><strong>Sua pontuação:</strong></p>
    <p>Visual: ${pontuacao.Visual}</p>
    <p>Auditivo: ${pontuacao.Auditivo}</p>
    <p>Leitura: ${pontuacao.Leitura}</p>
    <p>Cinestésico: ${pontuacao.Cinestésico}</p>
    <h3>Seu(s) estilo(s) predominante(s): <strong>${estilos.join(", ")}</strong></h3>
    <div class="feedback">
      ${feedback}
    </div>
    <div class="nota">
      <p style="text-align: justify;"><em>Observação:</em> embora os estilos de aprendizagem sejam amplamente usados para entender tendências individuais, não há consenso científico de que <strong>ensinar exatamente de acordo com eles melhora o desempenho acadêmico</strong>. Porém, conhecer suas preferências pode ajudar na motivação e no planejamento de estudos personalizados.</p>
    </div>
  `;
}

mostrarPergunta();
