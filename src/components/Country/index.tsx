import { Container } from "./styles";

interface CountryProps {
  data: {
    name: {
      common: string
    },
    capital: string,
    region: string,
    subregion: string,
    flags: {
      png: string
    },
    population: number
  }
}

export function Country({data}: CountryProps) {
  return (
    <Container>
      <div className="image">
        <img src={data.flags.png} alt="Flag" />
      </div>
      <h2>{data.name.common}</h2>
      <ul>
        <li>Population: <span>{Intl.NumberFormat().format(data.population)}</span></li>
        <li>Region: <span>{data.region}</span></li>
        <li>SubRegion: <span>{data.subregion}</span></li>
        <li>Capital: <span>{data.capital}</span></li>
      </ul>
    </Container>
  )
}