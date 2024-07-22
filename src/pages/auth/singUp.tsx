import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'

const singUpForm = z.object({
    restaurantName:z.string(),
    managerName:z.string(),
    phone:z.string(),
    email: z.string().email(),

})


type SingUpForm = z.infer<typeof singUpForm>
export function SingUp() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SingUpForm>()
    const navigate = useNavigate()
    async function handleSingUp(data: SingUpForm) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        toast.success("Restaurante Cadastrado com sucesso.", {
            action: {
                label: "Login",
                onClick: () => navigate('/sing-in')
            }
        })
    }
    return (
        <>
            <Helmet title='Cadastro' />
            <div className='p-8 '>
                <Button variant="ghost" asChild className='absolute right-4 top-8'>
                    <Link to="/sing-in" >
                       Fazer Login
                    </Link>
                </Button>
                <div className='w-[350px] flex flex-col justify-center gap-6'>
                    <div className=' flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>
                            Criar Conta Grátis
                        </h1>
                        <p className='text-sm text-muted-foreground'>
                            Seja um parceiro para começar suas Vendinhas
                        </p>
                    </div>
                    <form className='space-y-4' onSubmit={handleSubmit(handleSingUp)}>
                        <div className='space-y-2'>
                            <Label htmlFor='restaurantName'>
                                Nome do Estabelecimento
                            </Label>
                            <Input id='text' type='restaurantName' {...register('restaurantName')} />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='managerName'>
                                Seu Nome
                            </Label>
                            <Input id='managerName' type='text' {...register('managerName')} />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='phone'>
                                Seu Numero
                            </Label>
                            <Input id='phone' type='tel' {...register('phone')} />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor='email'>
                                Seu e-mail
                            </Label>
                            <Input id='email' type='email' {...register('email')} />
                        </div>
                        <Button disabled={isSubmitting} className='w-full' type="submit">Finalizar Cadastro</Button>
                        <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
                            Ao se cadastrar, você concorda com nossos <a className='underline underline-offset-4' href="#">termos de serviço</a> e <a  className='underline underline-offset-4' href="#">políticas de privacidade</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}