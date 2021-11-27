import React from "react"
import "typeface-roboto"
import CityInfo from "./index"

export default {
  title: "CityInfo",
  component: CityInfo,
}

export const CityExample = (args) => <CityInfo {...args} />

CityExample.args = { city: "Hermosillo", country: "Mexico" }
