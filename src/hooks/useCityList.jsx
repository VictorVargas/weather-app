import { useState, useEffect } from "react"
import axios from "axios"
import { getWeatherUrl } from "../utils/urls"
import getAllWeather from "../utils/transform/getAllWeather"
import { getCityCode } from "../utils/utils"

const useCityList = (cities, allWeather, onSetAllWeather) => {
  // const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl({ city, countryCode })

      try {
        onSetAllWeather({ [getCityCode(city, countryCode)]: {} })
        const res = await axios.get(url)
        const allWeatherAux = getAllWeather(res, city, countryCode)
        // setAllWeather((allWeather) => ({ ...allWeather, ...allWeatherAux }))
        onSetAllWeather(allWeatherAux)
      } catch (error) {
        // Error from server
        if (error.response) {
          const { data, status } = error.response
          console.log("data", data, "status", status)
          setError("Error in the server of weather")
        } else if (error.request) {
          // Error from client
          // Errors not connected to server
          console.log("error.request", error.request)
          setError("Check connetion to internet")
        } else {
          // Errors unknown
          // Something else
          console.log("Something else", error)
          setError("Error to load the information")
        }
      }
    }

    cities.forEach(({ city, countryCode }) => {
      if (allWeather[getCityCode(city, countryCode)]) return
      setWeather(city, countryCode)
    })
  }, [cities, allWeather, onSetAllWeather])

  return { error, setError }
}

export default useCityList
