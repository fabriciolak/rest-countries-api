import { Routes, Route, useSearchParams } from 'react-router-dom'

import { Home } from '../page/Home'
import { Search } from '../page/Search'
import { CountryInfo } from '../page/CountryInfo'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/:name' element={<CountryInfo />} />
      <Route path='*' element={<h1>Error</h1>} />
    </Routes>
  )
}