import React from "react"
import AppFrame from "./AppFrame"
import { BrowserRouter as Router, Route } from "react-router-dom"

export default {
  title: "AppFrame",
  component: AppFrame,
}

export const AppFrameRender = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur,
      praesentium reiciendis. Autem laudantium assumenda nemo iure ea incidunt
      officia vero? Velit laboriosam nostrum deserunt consequuntur perspiciatis
      nesciunt maiores non commodi?,
    </AppFrame>
  </Router>
)
