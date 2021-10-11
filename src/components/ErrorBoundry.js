import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (_error, _info) {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return <h1>Oppppps somthing went wrong, Sorry :(</h1>
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}
export default ErrorBoundry
