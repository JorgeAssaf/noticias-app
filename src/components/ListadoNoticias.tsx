import { Grid, Pagination, Stack, Typography } from '@mui/material'

import { useStore } from '../store/zustand'

import Noticia from './Noticia'

const ListadoNoticias = () => {
  // const { noticias, totalNoticias, handlePagina, pagina } = useNoticias()
  const { totalNoticias, noticias, handlePagina, pagina } = useStore((state) => state)
  console.log(pagina);
  const totalPaginas = Math.ceil(totalNoticias! / 20)

  return (
    <>
      <Typography variant='h4' component='h4' my={5} textAlign='center'>
        Listado de Noticias
      </Typography>
      <Grid component='section' container spacing={2}>
        {noticias?.map((noticia) => (
          <Noticia key={noticia.link} noticia={noticia} />
        ))}
      </Grid>
      <Stack
        sx={{
          marginY: 5,
        }}
        spacing={2}
        alignItems='center'
      >
        <Pagination
          onChange={handlePagina}
          count={totalPaginas}
          color='primary'
          page={pagina}
        />
      </Stack>
    </>
  )
}

export default ListadoNoticias
