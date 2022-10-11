import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Container } from "./styles";

export function Search() {
  const [ search, setSearch ] = useState("")
  
  const navigate = useNavigate()

  function handleSearchNavigate() {
    navigate('/search?q='+String(search))
  }

  return (
    <Container>
     <div>
        <input
          type="text"
          placeholder="Search for a country"
          onChange={e => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearchNavigate}
        >Search</button>
     </div>
    </Container>
  )
}