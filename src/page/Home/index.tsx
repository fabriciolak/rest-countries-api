import { useEffect, useState } from "react"
import '../../styles/styles.scss'

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Country } from "../../components/Country"

import { Container } from './styles'
import { Search } from "../../components/Search"

export function Home() {
  const [ data, setData ] = useState([])

  async function fetchAllCountry() {
    const response = await api.get('/all')

    setData(response.data)
  }

  useEffect(() => {
    fetchAllCountry()
  }, [])

  return (
    <Container>
      <Header />
      <Search />
      <main>
        <section className="list-country">
          {data.map((item, index) => (
            <Country key={String(index)} data={item} />
          ))}
        </section>
      </main>
    </Container>
  )
}