import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './test',
  // pegando arquivos que estão com extenção diferente
  // na aula usaram o final do arquivo como index.e2e-spec.ts
  // agora vamos fazer o playwrigth acha-lo
  // .*(o ponto é qualquer caracter, o * é quantas vezes for) o resto é a extenção e o $ diz que deve terminar com .e2e-spec\.ts
  testMatch:/.*\.e2e-spec\.ts$/,
  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  // aqui o teste tenta 2 vezes caso de erro
  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,
  //que formato exportar os testes
  /* reporter: 'html', */

  use: {
    //aqui é para ter mais detalhamento dos erros nos testes
    /* trace: 'on-first-retry', */
    baseURL:'http://localhost:50789'
  },
  webServer: {
    command: 'npm run dev:test',
    url: 'http://localhost:50789',
    // aqui é para não subir o servidor a cada teste e sim reaproveitar
    // mas se o ambiente for CI não iremos utlizar essa função
    reuseExistingServer: !process.env.CI,
  },


 /*  projects: [
       {
         name: 'chromium',
         use: { ...devices['Desktop Chrome'] },
       },
  
      {
        name: 'firefox',
         use: { ...devices['Desktop Firefox'] },
       },
  
       {
         name: 'webkit',
         use: { ...devices['Desktop Safari'] },
       },
  
        {
          name: 'Mobile Chrome',
          use: { ...devices['Pixel 5'] },
        },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone 12'] },
        },
  
        {
          name: 'Microsoft Edge',
          use: { ...devices['Desktop Edge'], channel: 'msedge' },
        },
        {
          name: 'Google Chrome',
          use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        },
     ], */

});
