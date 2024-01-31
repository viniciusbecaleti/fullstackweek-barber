import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Header } from "@/components/header"

export default function Home() {
  const date = new Date()

  return (
    <>
      <Header />

      <div className='px-5 pt-5'>
        <h2 className='text-xl font-bold'>Olá, Miguel</h2>
        <p className='text-sm'>
          <span className='capitalize'>
            {format(date, "EEEE", {
              locale: ptBR
            })}
          </span>
          {format(date, "',' dd 'de' MMMM", {
            locale: ptBR
          })}
        </p>
      </div>
    </>
  )
}
