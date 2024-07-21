import { Helmet } from 'react-helmet-async'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const singInForm = z.object({
    email:z.string().email(),
})
type SinginForm = z.infer<typeof singInForm>
export function SingIn() {
    const {register,handleSubmit,formState:{isSubmitting}} = useForm<SinginForm>()
    async function handleSingin(data:SinginForm){
        await new Promise(resolve => setTimeout(resolve,2000))
        console.log(data)
    }
    return (
        <>
            <Helmet title='Login' />
            <div className='p-8 '>
            <div className='w-[350px] flex flex-col justify-center gap-6'>
                <div className=' flex flex-col gap-2 text-center'>
                    <h1 className='text-2xl font-semibold tracking-tight'>
                        Acessar Pianel
                    </h1>
                    <p className='text-sm text-muted-foreground'>
                        Acompanhe suas vendas pelo painel parceirinho!
                    </p>
                </div>
                <form className='space-y-4' onSubmit={handleSubmit(handleSingin)}>
                    <div className='space-y-2'>
                        <Label htmlFor='email'>
                            Seu e-mail
                        </Label>
                        <Input id='email' type='email' {...register('email')} />
                    </div>
                    <Button disabled={isSubmitting} className='w-full' type="submit">Acessar Painel</Button>
                </form>
            </div>
            </div>
        </>
    )
}