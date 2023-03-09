import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Noticia } from '../types'

interface NoticiasContextProps {
  categoria: string
  handleNoticia: (e: any) => void
  noticias: Noticia[]
  pagina: number
  totalNoticias: number | null
  handlePagina: any
}

export const NoticiasContext = createContext<NoticiasContextProps>({} as any)

export default function NoticiasProvider({ children }: any) {
  const [categoria, setCategoria] = useState('general')
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalNoticias, setTotalNoticias] = useState(null)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&page=2&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY
        }`
      const { data } = await axios.get(url)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
      setPagina(1)
    }
    consultarAPI()
  }, [categoria])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&page=2&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY
        }`
      const { data } = await axios.get(url)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
    }
    consultarAPI()
  }, [pagina])

  const handleNoticia = (e: any) => {
    setCategoria(e.target.value)
  }
  const handlePagina = (e: any, value: number) => {
    setPagina(value)
  }

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleNoticia,
        noticias,
        pagina,
        totalNoticias,
        handlePagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export const useNoticias = () => useContext(NoticiasContext)
