import { Container, Typography, Grid } from '@mui/material'
import Form from './components/Form'
import ListadoNoticias from './components/ListadoNoticias'

function App() {
  return (

    <Container>
      <header>
        <Typography align='center' marginY={5} component='h1' variant='h3'>
          App de Noticias
        </Typography>
      </header>

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item md={6} lg={4}>
          <Form />
        </Grid>
      </Grid>
      <ListadoNoticias />
    </Container>

  )
}

export default App
