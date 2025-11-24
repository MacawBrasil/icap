'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { useMask } from '@react-input/mask'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nome é obrigatório',
  }),
  email: z.email({ message: 'Email é obrigatório' }),
  phone: z.string().refine(
    (value) => {
      const regex = /^\+([1-9]{1,4})\s?(\(?\d{1,4}\)?\s?)?(\d{4,5})[-\s]?\d{4}$/
      return regex.test(value)
    },
    {
      message:
        'Número de telefone inválido. Utilize o formato internacional, por exemplo: 99 999999999',
    },
  ),
  message: z.string().min(2, {
    message: 'Mensagem é obrigatória',
  }),
})

interface FormContactProps {
  terms: string | false | null | undefined
}

export function FormContact({ terms }: FormContactProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const { formState } = form

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'request-failed')
      }

      toast.success('Mensagem enviada com sucesso!')
      form.reset()
    } catch (_e) {
      toast.error('Não foi possível enviar. Tente novamente.')
    }
  }

  const inputRef = useMask({
    mask: '+55 (__) _____-____',
    replacement: { _: /\d/ },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-7 w-1/2 max-w-[630px] py-12 px-8 bg-white shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)] rounded-[30px] max-[900px]:max-w-full max-[900px]:w-full"
      >
        <span className="text-lg text-[#666666]">
          Preencha o formulário abaixo para falar com o ICAP:
        </span>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-10">
              <FormLabel className=" after:-ml-2 after:content-['*'] after:text-[#F00]">
                Nome
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" after:-ml-2 after:content-['*'] after:text-[#F00]">
                E-mail
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" after:-ml-2 after:content-['*'] after:text-[#F00]">
                Telefone
              </FormLabel>
              <FormControl>
                <Input {...field} ref={inputRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" after:-ml-2 after:content-['*'] after:text-[#F00]">
                Mensagem
              </FormLabel>
              <FormControl>
                <Textarea {...field} className="resize-none h-[120px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <p className="text-xs text-[#666666]">Seus dados estão seguros.</p>
          <p className="text-xs text-[#666666]">
            Ao entrar em contato, você autoriza o uso dos dados conforme{' '}
            {terms && (
              <a href={terms} target="_blank" rel="noopener noreferrer" className="text-[#4EB8B9]">
                Termos de Uso
              </a>
            )}
          </p>
        </div>
        <Button
          type="submit"
          className="w-full h-11 bg-[#4EB8B9] border transition cursor-pointer hover:bg-transparent hover:text-[#4EB8B9] hover:border-[#4EB8B9]"
        >
          {' '}
          {formState.isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
      </form>
    </Form>
  )
}
