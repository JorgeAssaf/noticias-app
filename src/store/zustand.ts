import { create } from 'zustand'
import { Noticia } from '../types'

interface Store {
  categoria: string
  noticias: Noticia[]
  pagina: number
  totalNoticias: number | null
  setCategoria: (e: any) => void
  setNoticia: (noticia: Noticia) => void
  setPagina: (pagina: number) => void
  setTotalNoticias: (totalNoticias: number) => void
  handlePagina: (e: any, value: number) => void

}


export const useStore = create<Store>((set) => ({
  categoria: 'general',
  noticias: [],
  pagina: 1,
  totalNoticias: null,
  setCategoria: ((e: any) => set({ categoria: e.target.value })),
  setNoticia: (noticias: Noticia) => set({ noticias: [noticias] }),
  setPagina: (pagina: number) => set({ pagina }),
  setTotalNoticias: (totalNoticias: number) => set({ totalNoticias }),
  handlePagina: (e: any, value) => {
    set({ pagina: value });
  },



}))

