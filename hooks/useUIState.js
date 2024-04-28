import { create } from 'zustand'

const useUIState = create((set) => ({
  homeCategory: '',
  headerImageSrc:
    'https://images.unsplash.com/photo-1708844897353-649da595a3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMzk2NzYxOQ&ixlib=rb-4.0.3&q=80&w=1080',
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (value) => set({ headerImageSrc: value }),
}))

export default useUIState
