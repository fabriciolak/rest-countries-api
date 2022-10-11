export interface CountryProps {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: PostalCode
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  [key: string]: Language
}

export interface Language {
  official: string
  common: string
}

export interface Currencies {
  [CURR: string] : Currency
}

export interface Currency {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  lang: string
}

export interface Demonyms {
  eng: Eng
}

export interface Eng {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
}

export interface CoatOfArms {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex: string
}
