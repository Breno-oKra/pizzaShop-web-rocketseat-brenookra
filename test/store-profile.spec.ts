import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    await page.getByRole('button', { name: 'Pizza Shop' }).click()
    await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

    await page.getByLabel('Nome').fill('Breno Pizza')
    await page.getByLabel('Descrição').fill('Another Description')

    await page.getByRole('button', { name: 'Salvar' }).click()

    //aqui esperamos todas as requisições http serem realizadas
    await page.waitForLoadState('networkidle')


    const toast = page.getByText('Perfil atualizado')

    await expect(toast).toBeVisible()

    await page.getByRole('button', { name: 'Close' }).click()

    // await page.waitForTimeout(250)
    //estava dando erro pois carregava muito rapido, então colocamos await page.waitForTimeout(250)
    // mas como expect retorna uma promisse, se colocarmos await, ele vai ficar rodando ate passar
    await expect(page.getByRole('button', { name: 'Breno Pizza' })).toBeVisible()
})