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
- **Conversa por voz:** dentro da conversa com o professor, toque em **Falar** e diga a frase em inglês. A gravação **não para sozinha**, nem se você demorar: ela só termina quando você toca em **Parar e enviar**. Ligue **Ouvir as respostas** para o professor falar em voz alta, e **Modo voz** para o professor falar e o app ouvir você de novo, sem tocar na tela.
- **Microfone ao lado de cada alto-falante:** nos vocabulários, nas frases de exemplo e no banco de palavras, toque no microfone para ouvir, repetir em voz alta e ver se a IA entendeu.
- **Repetir frases:** na aba **Treino**, o cartão **Repetir frases** toca uma frase, você repete e vê quais palavras foram entendidas.
- O microfone precisa de permissão do navegador (cadeado ao lado do endereço). A fala é transformada em texto pela IA da sua chave: se houver chave do Groq, usa o Whisper do Groq (mais rápido); senão usa o Gemini. O áudio não fica guardado.
- A nota de "Repetir frases" mostra se você foi entendido palavra por palavra. Ela não mede o sotaque.

## Vocabulário
- Cada lista de palavras é separada em **Verbos** (inclui phrasal verbs), **Substantivos**, **Adjetivos** e **Outros** (advérbios e expressões), com filtro por classe.
- Em **Treino → Palavras → Por classe** estão todas as unidades juntas, por classe, e dá para praticar 10 palavras só daquela classe.
- A **aula de vocabulário** de cada unidade vem em 2 a 3 partes, por tema. Depois de cada parte há um mini-treino (até 6 perguntas) só com as palavras dela, e os exercícios da unidade ficam no fim. A parte em que você parou fica salva.
- Todas as palavras que aparecem nas aulas de vocabulário também estão no banco de Palavras (lista, quiz e revisão), com tradução, classe e exemplo.
- As palavras concretas têm emoji ao lado, nas aulas de vocabulário, na lista e no quiz. O áudio e a comparação de voz ignoram o emoji.
- **Traduções nas aulas e nos exercícios:** os exemplos e as frases em inglês das aulas (colunas "Exemplo", tabelas de frases, listas e exemplos em itálico) têm a tradução em português ao lado ou embaixo. Nos exercícios e nos testes há o botão **Ver tradução** em cada frase, e a tradução aparece de novo depois que você confere a resposta. As traduções ficam dentro de cada arquivo de unidade, no campo `tr`. **Som, pronúncia e tradução em todo o inglês das aulas:** toda frase ou expressão em inglês nas aulas (tabelas, listas, dicas, exemplos em itálico ou negrito) tem botão de som, microfone, a pronúncia em português (toque na palavra sublinhada) e a tradução. Frases erradas entre aspas (os erros comuns) ficam só com a explicação, para você não ouvir inglês incorreto.

## Tempo de estudo
- O app conta o tempo que você estuda em cada unidade e no Treino. Na **Trilha** e na tela de cada unidade aparece o tempo gasto, e no **Início** há o total, o tempo de hoje e uma previsão para fechar as unidades 1 a 20.
- O relógio só roda com o app aberto e na tela. Ele pausa se a tela ficar escondida ou se você ficar 2 minutos sem tocar (música ou áudio tocando contam por até 10 minutos).
- O tempo fica guardado no aparelho (`ic_time`) e não é sincronizado entre aparelhos.

## Músicas
Em **Treino → Músicas** há 10 músicas em inglês. O vídeo oficial do YouTube toca dentro do app, a letra sincronizada (do LRCLIB, um banco aberto da comunidade) acompanha o vídeo, e cada linha tem tradução, pronúncia das palavras difíceis, som e microfone. A tradução usa a sua chave de IA, e cada linha mostra também a pronúncia em português, no mesmo estilo das palavras (sílaba tônica em maiúsculas). As letras não fazem parte do app: são buscadas na hora e guardadas só no aparelho. Precisa de internet.

## Progresso
O progresso fica salvo no navegador. Em **Ajustes**, use **Exportar progresso** para baixar um backup e **Importar progresso** para restaurar em outro aparelho. Limpar os dados do navegador apaga o progresso, por isso exporte de vez em quando.
