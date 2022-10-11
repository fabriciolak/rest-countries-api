import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <Link to="/" className="logo">Where in the world?</Link>
      <div>
        <button>Mode</button> 
      </div>
    </Container>
  )
}