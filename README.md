# Testes Automatizados com Playwright

Este repositório contém testes automatizados utilizando o framework Playwright para o site [EasyContacts](https://easy-contacts-tan.vercel.app). Os testes foram desenvolvidos para validar o comportamento da página de login para garantir sua integridade e funcionalidade. Os testes foram configurados para rodar em 3 navegadores (Chrome, Firefox e Safari) e em 2 ambientes (Desktop e Mobile), totalizando ao todo 20 testes.

## Requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)

## Configuração

1. Clone este repositório para sua máquina local:

```
git@github.com:mariosilva81/playwright-web.git
```

2. Navegue até o diretório do projeto:

```
cd playwright-web
```

3. Instale as dependências do projeto:

```
npm install
```

## Executando os Testes

Para executar os testes, utilize os seguintes comandos:

```bash
# Testes no terminal
npx playwright test

# Testes com interface gráfica
npx playwright test --ui

# Testes com interação no navegador
npx playwright test --headed

# Testes com o inspetor de código
npx playwright test --debug

```

Observação: Antes de rodar os testes, clique neste [link](https://easy-contacts-svuu.onrender.com/doc). Talvez seja necessário aguardar alguns segundos até que a aplicação esteja disponível em produção.

## Gerando os relatórios de testes

Para visualizar o relatório detalhado em HTML, utilize o seguinte comando:

```
npx playwright show-report
```

Irá abrir uma página no seu navegador padrão. Entretanto, o relatório também estará disponível na pasta `playwright-report`.

Adicionalmente, estarão disponiveis os screenshots e os videos do resultado de cada teste na pasta `test-result`.

## Contribuindo

Sinta-se à vontade para contribuir com novos testes, melhorias ou correções de bugs. Basta fazer um fork deste repositório, fazer suas alterações e enviar um pull request.

## Recursos Adicionais

Para mais informações sobre o framework Playwright, consulte a [documentação oficial](https://playwright.dev/).