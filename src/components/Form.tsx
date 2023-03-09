import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Grid,
} from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'
import { useNoticias } from '../context/NoticiasProvider'
import { useStore } from '../store/zustand'

const CATEGORIAS = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' },
]
const Form = () => {
  // const { handleNoticia, categoria } = useNoticias()
  const { setCategoria: handleNoticia, categoria, pagina } = useStore((state) => state)
  useEffect(() => {


    async function consultarAPI() {
      const { categoria, pagina } = useStore.getState();
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&page=2&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY
        }`
      const { data } = await axios.get(url)
      useStore.setState({ noticias: data.articles, totalNoticias: data.totalResults });
    }
    consultarAPI();
  }, [categoria]);
  useEffect(() => {


    async function consultarAPI() {
      const { categoria, pagina } = useStore.getState();
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&page=2&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY
        }`
      const { data } = await axios.get(url)
      useStore.setState({ noticias: data.articles, totalNoticias: data.totalResults });
    }
    consultarAPI();
  }, [pagina]);


  return (
    <form >


      <FormControl fullWidth >
        <InputLabel  >Categoría</InputLabel>
        <Select label='categoria' value={categoria} onChange={handleNoticia}>
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </form>
  )
}

export default Form
