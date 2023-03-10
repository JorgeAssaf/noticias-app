import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import axios from 'axios'

import type { Noticia } from '../types'

interface Store {
  categoria: string
  noticias: Noticia[]
  pagina: number
  totalNoticias: number | null
  setCategoria: (e: any) => void
  setNoticia: (noticias: Noticia) => void
  setPagina: (pagina: number) => void
  setTotalNoticias: (totalNoticias: number) => void
  handlePagina: (e: any, value: number) => void
  fechNoticias: (categoria: string, pagina: number) => Promise<void>
}
interface PersistedStore extends Store {
  categoria: string
}

export const useStore = create<Store, [['zustand/persist', any]]>(
  persist(
    (set) => ({
      categoria: 'business',
      noticias: [],
      pagina: 1,
      totalNoticias: null,
      setCategoria: (e: any) => set({ categoria: e.target.value }),
      setNoticia: (noticias: Noticia) => set({ noticias: [noticias] }),
      setPagina: (pagina: number) => set({ pagina }),
      setTotalNoticias: (totalNoticias: number) => set({ totalNoticias }),
      handlePagina: (e: any, value: number) => {
        set({ pagina: value })
      },
      fechNoticias: async (categoria: string, pagina: number) => {
        const url = `https://newsdata.io/api/1/news?apikey=pub_18638aa6e82a58ee4006b613d280059595d83&q=${pagina}&country=mx&category=${categoria}`
        const { data } = await axios.get(url)

        set({ noticias: data.results, totalNoticias: data.totalResults })
      },
    }),
    {
      name: 'news',
      partialize(state: PersistedStore) {
        return {
          categoria: state.categoria,
        }
      },
    }
  )
)
