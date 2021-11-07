import React from "react"
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
  return (
    <ResponsiveContainer width={"95%"} height={250}>
      <LineChart
        data={data}
        margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
      >
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
