import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'
import { Country } from "../../components/Country"
import { Header } from "../../components/Header"
import { Search as SearchInput } from "../../components/Search"
import { api } from "../../services/api"

import { Container } from "./styles"

export function Search() {
  const [ data, setData ] = useState([])
  const [ query, setQuery ] = useSearchParams()

  async function fetchSearchCountry() {
    const response = await api.get(`/name/${query.get('q')}`)
    setData(response.data)
  }
  

  useEffect(() => {
    fetchSearchCountry()
  }, [query])

  return (
    <Container>
      <Header />
      <SearchInput />
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