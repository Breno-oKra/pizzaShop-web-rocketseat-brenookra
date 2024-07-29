<img src="https://reffect.co.jp/wp-content/uploads/2023/03/mocking_service_worker.png" height="150px" style="padding-inline:40%"/>

## 🚀 Agora vamos usar o msw que nos retorna respostas ficticias para simular o backend

```bash
 npm install msw@latest --save-dev
```
Podemos iniciar com
```bash
 npx msw init <PUBLIC_DIR> [options]
```
exemplo, referencie a pasta public
```bash
 npx msw init ./public
```
<p>começamos criando um arquivo que contem a função de inicialização do msw que esta em  </p>

```bash
 /api/mocks/intex.ts
```
<p>depois criamos um MODE para lidarmos com o ambiente da aplicação no package.json</p>

iniciamos o vite, mudamos a port setamos o mode e nomeamos como test

```JSON
 "dev:test": "vite --port 50789 --mode test"
```
<p>depois mudamos a inicialização da aplicação no main.tsx para que se inicie conforme configurado</p>

```bash
 /main.tsx
```
## ❗ antes de começar a utilizar, LEMBRE de rodar o codigo run correto ❗

```bash
 npm run dev:test
```

<p>Não esquecer de mudar algumas informações ja que não teremos o backend oficial</p>
<p>crie um arquivo chamado .env.test, o nome o arquivo tem que ter o mesmo nome do ambiente que voce nomeou em: </p>

```JSON
 "dev:test": "vite --port 50789 --mode test"
```
<p>depois mude as informações que seriam as mesmas de .env.local</p>
<p>agora nossa api referencia o / da nossa aplicação e retiramos o delay que simulava uma api lenta</p>

```ts
    VITE_API_URL="/"
    VITE_ENABLE_API_DELAY=false
```


