import React, { useState, useCallback, useMemo } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import WelcomePage from "./pages/WelcomePage"
import MainPage from "./pages/MainPage"
import CityPage from "./pages/CityPage"
import NotFoundPage from "./pages/NotFoundPage"

const App = () => {
  const [allWeather, setAllWeather] = useState({})
  const [allChartData, setAllChartData] = useState({})
  const [allForecastItemList, setAllForecastItemList] = useState({})

  const onSetAllWeather = useCallback(
    (weatherCity) => {
      setAllWeather((allWather) => ({ ...allWather, ...weatherCity }))
    },
    [setAllWeather]
  )

  const onSetAllChartData = useCallback(
    (allChartDataCity) => {
      setAllChartData((allChartData) => ({
        ...allChartData,
        ...allChartDataCity,
      }))
    },
    [setAllChartData]
  )

  const onSetAllForecastItemList = useCallback(
    (allForecastItemListCity) => {
      setAllForecastItemList((allForecastItemList) => ({
        ...allForecastItemList,
        ...allForecastItemListCity,
      }))
    },
    [setAllForecastItemList]
  )

  const actions = useMemo(
    () => ({ onSetAllWeather, onSetAllChartData, onSetAllForecastItemList }),
    [onSetAllWeather, onSetAllChartData, onSetAllForecastItemList]
  )
  const data = useMemo(
    () => ({ allWeather, allChartData, allForecastItemList }),
    [allWeather, allChartData, allForecastItemList]
  )

  return (
    <Router>
      <Switch>
        <Route path="/main">
          <MainPage data={data} actions={actions} />
        </Route>
        <Route path="/city/:countryCode/:city">
          <CityPage data={data} actions={actions} />
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
