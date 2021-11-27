import React from "react"
import PropTypes from "prop-types"
import { Alert } from "@material-ui/lab"
import { Grid, List, ListItem } from "@material-ui/core"
import CityInfo from "./../CityInfo"
import Weather from "./../Weather"
import useCityList from "./../../hooks/useCityList"
import { getCityCode } from "../../utils/utils"
import {
  useWheatherDispatchContext,
  useWheatherStateContext,
} from "../../WeatherContext"

const CityListItem = React.memo(function CityListItem({
  city,
  country,
  countryCode,
  eventOnClickCity,
  weather,
}) {
  return (
    <ListItem button onClick={() => eventOnClickCity(city, countryCode)}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Weather
            temperature={weather && weather.temperature}
            state={weather && weather.state}
          />
        </Grid>
      </Grid>
    </ListItem>
  )
})

const renderCityAndCountry = (eventOnClickCity) => (
  cityAndCountry,
  weather
) => {
  const { city, countryCode } = cityAndCountry
  return (
    <CityListItem
      key={getCityCode(city, countryCode)}
      eventOnClickCity={eventOnClickCity}
      weather={weather}
      {...cityAndCountry}
    />
  )
}

// cities is an array of objects with city and country
const CityList = ({ cities, onClickCity }) => {
  const actions = useWheatherDispatchContext()
  const data = useWheatherStateContext()
  const { allWeather } = data
  const { error, setError } = useCityList(cities, allWeather, actions)

  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </div>
  )
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default React.memo(CityList)
