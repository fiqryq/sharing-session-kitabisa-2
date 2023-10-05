import zod, { string } from 'zod'

const envSchema = zod.object({
    NEXT_PUBLIC_THIS_ENV: string().min(1)
})

export const env = envSchema.parse(process.env)
