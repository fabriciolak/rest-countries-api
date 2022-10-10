import { useEffect, useState } from "react"
import './styles/styles.scss'

import { api } from "./services/api"
import { Header } from "./components/Header"
import { Country } from "./components/Country"

function App() {
  const [ data, setData ] = useState([])

  async function fetchAllCountries() {
    const response = await api.get('/all')
    setData(response.data)
  }
console.log(data);

  useEffect(() => {
    fetchAllCountries()
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="list-country">
          { data &&
            data.map(item => (
              <Country data={item} />
            ))
          }
        </section>
      </main>
    </>
  )
}

export default App
