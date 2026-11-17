"use client"

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react"

import type { DishCategory } from "@/lib/restaurant"

export type MenuFilter = "all" | DishCategory

type MenuFilterContextValue = {
  filter: MenuFilter
  setFilter: Dispatch<SetStateAction<MenuFilter>>
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}

const MenuFilterContext = createContext<MenuFilterContextValue | null>(null)

export function MenuFilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<MenuFilter>("all")
  const [query, setQuery] = useState("")

  return (
    <MenuFilterContext.Provider value={{ filter, setFilter, query, setQuery }}>
      {children}
    </MenuFilterContext.Provider>
  )
}

export function useMenuFilter() {
  const context = useContext(MenuFilterContext)

  if (!context) {
    throw new Error("useMenuFilter must be used inside a MenuFilterProvider")
  }

  return context
}
