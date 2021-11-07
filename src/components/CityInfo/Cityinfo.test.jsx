import React from "react"
import { render } from "@testing-library/react"
import CityInfo from "./CityInfo" // SUT: Subject of test

test("CityInfo render", async () => {
  // AAA
  // Arrange
  // Act
  const city = "Hermosillo"
  const country = "Mexico"
  // Render: render the component and return at serialized of function of utilis
  // in this case using "findAllByRole" for "consult" to out component going to analyze
  // your status of the component in the "Assert"
  const { findAllByRole } = render(<CityInfo city={city} country={country} />)

  // Assert
  // - findAllByRole: find all the elements with role="heading"
  const cityAndCountryComponent = await findAllByRole("heading")

  expect(cityAndCountryComponent[0]).toHaveTextContent(city)
  expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})
