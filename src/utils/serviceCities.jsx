const cities = [
  { city: "New York", country: "USA", countryCode: "US" },
  { city: "London", country: "UK", countryCode: "GB" },
  { city: "Paris", country: "France", countryCode: "FR" },
  { city: "Berlin", country: "Germany", countryCode: "DE" },
  { city: "Rome", country: "Italy", countryCode: "IT" },
  { city: "Hermosillo", country: "Mexico", countryCode: "MX" },
]

export const getCities = () => cities
export const getContryNameByCountryCode = (countryCode) => {
  const country = cities.find((city) => city.countryCode === countryCode)
  return country ? country.country : ""
}
