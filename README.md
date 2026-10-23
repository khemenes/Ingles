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

## Progresso
O progresso fica salvo no navegador. Em **Ajustes**, use **Exportar progresso** para baixar um backup e **Importar progresso** para restaurar em outro aparelho. Limpar os dados do navegador apaga o progresso, por isso exporte de vez em quando.
