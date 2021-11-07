import React from "react"
import Weather from "./Weather"
import { render } from "@testing-library/react"

test("Weather render sunny", async () => {
  // AAA Arrange Act Assert
  const { findByRole } = render(<Weather temperature={10} state="clear" />)
  const temp = await findByRole("heading")
  expect(temp.textContent).toBe("10")
})
