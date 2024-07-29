import * as z from 'zod'

// aqui criamos o MODE do ambiente de desenvolvimento
export const envSchema = z.object({
    MODE: z.enum(['production', 'development', 'test']),
    VITE_API_URL:z.string().url(),
    VITE_ENABLE_API_DELAY:z.string().transform(value => value === 'true')
})
export const env = envSchema.parse(import.meta.env)