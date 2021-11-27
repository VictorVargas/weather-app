import React, { useCallback, useReducer, useContext } from "react"

const WheatherStateContext = React.createContext()
const WheatherDispatchContext = React.createContext()

const initialValue = {
  allWeather: {},
  allChartData: {},
  allForecastItemList: {},
}

const WeatherContext = ({ children }) => {
  const reducer = useCallback((state, action) => {
    switch (action.type) {
      case "SET_ALL_WEATHER":
        const weatherCity = action.payload
        const newAllWeather = { ...state.allWeather, ...weatherCity }
        return { ...state, allWeather: newAllWeather }
      case "SET_CHART_DATA":
        const chartDataCity = action.payload
        const newAllChartData = { ...state.allChartData, ...chartDataCity }
        return { ...state, allChartData: newAllChartData }
      case "SET_FORCASE_ITEM_LIST":
        const allForecastItemListCity = action.payload
        const newAllForecastItemListCity = {
          ...state.allForecastItemList,
          ...allForecastItemListCity,
        }
        return { ...state, allForecastItemList: newAllForecastItemListCity }
      default:
        return state
    }
  }, [])
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <WheatherStateContext.Provider value={state}>
      <WheatherDispatchContext.Provider value={dispatch}>
        {children}
      </WheatherDispatchContext.Provider>
    </WheatherStateContext.Provider>
  )
}
const useWheatherDispatchContext = () => {
  const dispatch = useContext(WheatherDispatchContext)
  if (!dispatch) {
    throw new Error(
      "useWheatherDispatchContext must be used within WheatherContext"
    )
  }
  return dispatch
}
const useWheatherStateContext = () => {
  const state = useContext(WheatherStateContext)
  if (!state) {
    throw new Error(
      "useWheatherStateContext must be used within WheatherContext"
    )
  }
  return state
}

export { useWheatherStateContext, useWheatherDispatchContext, WeatherContext }
