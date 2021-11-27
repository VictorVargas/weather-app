import React, { useMemo } from "react"
import PropTypes from "prop-types"
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const ForecastChart = ({ data }) => {
  const margineSize = useMemo(
    () => ({ top: 20, bottom: 20, left: 5, right: 5 }),
    []
  )
  return (
    <ResponsiveContainer width={"95%"} height={250}>
      <LineChart data={data} margin={margineSize}>
        <XAxis dataKey="dayHour" />
        <YAxis />
        <CartesianGrid />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="max" stroke="#AA0000" />
        <Line type="monotone" dataKey="min" stroke="#0000FF" />
      </LineChart>
    </ResponsiveContainer>
  )
}

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ForecastChart
