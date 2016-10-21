import React, { Component } from 'react'
import throttle from 'lodash/throttle'

const ScrollSpy = (InnerComponent) => (
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        scrollOffset: 0
      }
      window.addEventListener('scroll', throttle(this._handleScroll.bind(this), 100))
    }

    _handleScroll(event) {
      this.setState({ scrollOffset: window.scrollY })
    }
    render() {
      return <InnerComponent scrollOffset={this.state.scrollOffset} {...this.props} />
    }
  }
)

export default ScrollSpy
