# Inglês com Claudio

App pessoal de estudo de inglês (trilha B1 → B2). Funciona no navegador, sem instalar nada.

## Como publicar (GitHub Pages)
1. No GitHub, abra o repositório e envie estes arquivos para a **raiz** dele (não dentro de uma subpasta): `index.html`, a pasta `units` e este `README.md`.
2. Vá em **Settings → Pages**. Em **Source**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e salve.
3. Depois de 1 a 3 minutos, o endereço aparece nessa mesma tela: `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Abrir o `index.html` com duplo clique no computador não funciona: o navegador bloqueia o carregamento das aulas. Use o endereço do GitHub Pages.

## Professor IA (chave gratuita)
Na tela **Início**, em **Ajustes**, escolha o **Serviço de IA**, cole a chave, toque em **Salvar** e depois em **Testar conexão**.

- **Gemini (Google):** chave em https://aistudio.google.com/apikey
- **Groq:** chave em https://console.groq.com/keys

Cada serviço guarda a própria chave, então dá para alternar sem perder a outra. A chave fica só no navegador desse aparelho: cada aparelho precisa da sua. Nunca coloque a chave dentro dos arquivos do repositório nem a envie para outras pessoas.

Os nomes dos modelos mudam com o tempo. Se o teste disser que o modelo não existe, troque o nome nos campos de modelo (Gemini: https://ai.google.dev/gemini-api/docs/models; Groq: https://console.groq.com/docs/models). Se uma resposta demorar mais de 40 segundos, o app avisa e você pode tentar de novo.

## Voz
- **Conversa por voz:** dentro da conversa com o professor, toque em **Falar**, diga a frase em inglês e pare de falar: o app envia sozinho. Ligue **Ouvir as respostas** para o professor falar em voz alta, e **Modo voz** para o professor falar e o app ouvir você de novo, sem tocar na tela.
- **Microfone ao lado de cada alto-falante:** nos vocabulários, nas frases de exemplo e no banco de palavras, toque no microfone para ouvir, repetir em voz alta e ver se a IA entendeu.
- **Repetir frases:** na aba **Treino**, o cartão **Repetir frases** toca uma frase, você repete e vê quais palavras foram entendidas.
- O microfone precisa de permissão do navegador (cadeado ao lado do endereço). A fala é transformada em texto pela IA da sua chave: se houver chave do Groq, usa o Whisper do Groq (mais rápido); senão usa o Gemini. O áudio não fica guardado.
- A nota de "Repetir frases" mostra se você foi entendido palavra por palavra. Ela não mede o sotaque.

## Vocabulário
- Cada lista de palavras é separada em **Verbos** (inclui phrasal verbs), **Substantivos**, **Adjetivos** e **Outros** (advérbios e expressões), com filtro por classe.
- Em **Treino → Palavras → Por classe** estão todas as unidades juntas, por classe, e dá para praticar 10 palavras só daquela classe.
- A **aula de vocabulário** de cada unidade vem em 2 a 3 partes, por tema. Depois de cada parte há um mini-treino (até 6 perguntas) só com as palavras dela, e os exercícios da unidade ficam no fim. A parte em que você parou fica salva.
- As palavras concretas têm emoji ao lado, nas aulas de vocabulário, na lista e no quiz. O áudio e a comparação de voz ignoram o emoji.

## Progresso
O progresso fica salvo no navegador. Em **Ajustes**, use **Exportar progresso** para baixar um backup e **Importar progresso** para restaurar em outro aparelho. Limpar os dados do navegador apaga o progresso, por isso exporte de vez em quando.
