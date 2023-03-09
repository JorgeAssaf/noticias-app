import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material"
import type { Noticia } from "../types"

interface NoticiaProps {
  noticia: Noticia
}

const Noticia = ({ noticia }: NoticiaProps) => {
  return (
    <>
      <Grid component='article' item md={6} lg={4}>
        <Card>
          <CardMedia component='img' height={250} image={noticia.urlToImage!} alt={noticia.title} />

          <CardContent>

            <Typography variant='subtitle2' color='#9b0808' component='span'>
              {noticia.author}
            </Typography>
            <Typography variant='subtitle1' component='p'>
              {noticia.source.name}
            </Typography>
            <CardHeader title={noticia.title} />
            <Typography variant='body2' component='p'>
              {noticia.description}
            </Typography>
            <Typography href={noticia.url} variant='subtitle2' component='a'>
              Leer más...
            </Typography>


          </CardContent>


        </Card>
      </Grid>
    </>
  )
}

export default Noticia
