import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material"
import type { Noticia } from "../types"

interface NoticiaProps {
  noticia: Noticia
}

const Noticia = ({ noticia }: NoticiaProps) => {
  return (
    <>
      <Grid component='article' item md={6} lg={4}>
        <Card>
          <CardMedia component='img' height={250} image={noticia.image_url!} alt={noticia.title} />

          <CardContent>

            <Typography variant='subtitle2' color='#9b0808' component='span'>
              {noticia.creator}
            </Typography>
            <Typography variant='subtitle1' component='p'>
              {noticia.country}
            </Typography>
            <CardHeader title={noticia.title} />
            <Typography variant='body2' component='p' sx={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {noticia.description}
            </Typography>
            <Box component='div'>
              <Typography href={noticia.link} variant='subtitle2' component='a'>
                Leer más...
              </Typography>
            </Box>


          </CardContent>


        </Card>
      </Grid>
    </>
  )
}

export default Noticia
