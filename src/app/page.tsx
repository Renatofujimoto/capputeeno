'use client'
import styles from './page.module.css'
import { FilterBar } from './components/filter-bar'
import { ProductsList } from './components/products-list'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Image from 'next/image'

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  )
}
