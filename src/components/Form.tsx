import { useEffect } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { useStore } from '../store/zustand'

const CATEGORIAS = [

  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: ' tecnologhy ', label: 'Tecnología' },
]
const Form = () => {
  // const { handleNoticia, categoria } = useNoticias()
  const {
    setCategoria: handleNoticia,
    categoria,
    pagina,
    fechNoticias,
  } = useStore((state) => state)

  useEffect(() => {
    fechNoticias(categoria, pagina)
  }, [categoria])

  useEffect(() => {
    fechNoticias(categoria, pagina)
  }, [pagina])

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
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
