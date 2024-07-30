import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  // asssim so navegamos para a pagina
  /* await page.goto('/sign-in'); */
  //agora navegamos e esperamos a tela carregar
  await page.goto('/sign-in', { waitUntil: 'networkidle' });
  //aqui pegamos o campo e preenchemos com o email
  await page.getByLabel('Seu e-mail').fill('brenookra@gmail.com')
  // aqui pegamos o button e damos um click
  await page.getByRole('button', { name: 'Acessar painel' }).click()
  //aqui verificamos se deu certo, no caso é para aparecer o toast de sucesso
  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail',
  )

  await expect(toast).toBeVisible()

  // aqui pedimos para esperar 2s depois que realizar tudo
  // pois o app da playwright esta com um bug e não mostra o final do test
  /* await page.waitForTimeout(2000) */

});
//verificando o erro
test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Seu e-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('credenciais erradas')

  await expect(toast).toBeVisible()
})
//navegando para novo estabelecimento
test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  await expect(page.url()).toContain('/sign-up')
})

