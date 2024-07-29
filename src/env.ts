import * as z from 'zod'

// aqui criamos o MODE do ambiente de desenvolvimento
// como vamos usar o msw iremos tirar o .url() ja que somente iremos simular uma resposta
export const envSchema = z.object({
    MODE: z.enum(['production', 'development', 'test']),
    /* VITE_API_URL:z.string().url(), */
    VITE_API_URL:z.string(),
    VITE_ENABLE_API_DELAY:z.string().transform(value => value === 'true')
})
export const env = envSchema.parse(import.meta.env)