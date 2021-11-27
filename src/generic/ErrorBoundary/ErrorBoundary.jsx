import React, { PureComponent } from "react"

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    return this.state.hasError ? <h1>Hubo un problema</h1> : this.props.children
  }
}

export default ErrorBoundary
