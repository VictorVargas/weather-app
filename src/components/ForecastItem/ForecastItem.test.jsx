import React from "react"
import ForecastItem from "./ForecastItem"
import { render } from "@testing-library/react"

test("ForecastItem Render", async () => {
  const { findByText } = render(
    <ForecastItem weekDay="Lunes" hour={10} state="clear" temperature={31} />
  )
  const weekDay = await findByText(/Lunes/)
  const hour = await findByText(/10/)
  const temperature = await findByText(/31/)

  expect(weekDay).toHaveTextContent("Lunes")
  expect(hour).toHaveTextContent("10")
  expect(temperature).toHaveTextContent("31")
})
