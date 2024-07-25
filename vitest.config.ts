// vitest.config.ts
import path from "path"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/

// estamos usando as importações globais para os tests
/* 
 adicionando  test: {
   globals: true,
 }, 
 e adiocionando  "types": ["vitest/globals"] no tsconfig.app.json
*/
/*  podemos usar test('1+1 equals 2',() => {
    expect(1 + 1).toEqual(2)
  }) */
// sem precisar importar test, expect etc.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    //geralmento o vite usa o jsdom que é o mais famoso
    // ele é capaz de simular um codigo html para que possamos testar os componentes como se
    // estivessem sendo exibidos em um navegador, mas usaremos o happy-dom por se mais rapido:indicação do curso
    environment: 'happy-dom'
  },
})