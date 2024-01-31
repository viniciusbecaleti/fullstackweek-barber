import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Header } from "@/components/header"
import { Search } from './components/search'

export default function Home() {
  const date = new Date()

  return (
    <>
      <Header />

      <div className='px-5 pt-5'>
        <h2 className='text-2xl font-bold mb-1'>Olá, Miguel</h2>
        <p className='text-sm'>
          <span className='capitalize'>
            {format(date, "EEEE", {
              locale: ptBR
            })}
          </span>
          <span>
            {format(date, "',' dd 'de' ", {
              locale: ptBR
            })}
          </span>
          <span className='capitalize'>
            {format(date, "MMMM", {
              locale: ptBR
            })}
          </span>
        </p>
      </div>

      <div className='px-5 mt-6'>
        <Search />
      </div>
    </>
  )
}
