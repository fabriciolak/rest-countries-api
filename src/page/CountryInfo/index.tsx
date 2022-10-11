import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container, CountryGrid } from "./styles";

import { CountryProps } from '../../Types'
import { Search } from "../Search";
import { HandleGoBack } from "../../components/HandleGoBack";

export function CountryInfo() {
  const [ data, setData ] = useState<CountryProps[]>([])
  const [ currency, setCurrency ] = useState("")
  const { name } = useParams()

  
  async function fetchCountry() {
    const response = await api.get(`/name/${name}?fullText=true`)
    setData(response.data)
  }

  async function getCountryCurrency() {
    const arr = await Object.values(data[0]?.currencies)
    setCurrency(`${arr[0]?.symbol} - ${arr[0]?.name}`)
  }
  getCountryCurrency()
  
  useEffect(() => {
    fetchCountry()
  }, [])

  return (
    <Container>
      <Search />
      <HandleGoBack />
      {data.map((item, index) => (
        <CountryGrid key={String(index)}>
          <div>
            <img
              src={item.flags.png}
              alt={String(item.name.nativeName)}
            />
          </div>
          <div>
            <ul>
              <li><span>Name: </span>{item.name.common}</li>
              <li><span>Official Name: </span>{item.name.official}</li>
              <li><span>Capital: </span>{item.capital}</li>
              <li><span>Population: </span>{}</li>
              <li><span>Continent: </span>{item.continents}</li>
              <li><span>Region: </span>{item.region}</li>
              <li><span>Area: </span>{Intl.NumberFormat().format(item.area)} km²</li>
              <li><span>Currency: </span>{currency}</li>
              <li>
                <span>Coat Of Arms: </span>
                <img src={item.coatOfArms.png} alt={String(item.name.common)} width={56} />
              </li>
            </ul>
          </div>
        </CountryGrid>
      ))}
    </Container>
  )
}