import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    this.scrollUp = this.scrollUp.bind(this)
    this.easeInOut = this.ease.bind(this)
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.scrollUp(0, 250)
    }
  }
  scrollUp(targetY, duration) {
    let start = document.body.scrollTop,
      diff = targetY - start,
      time = 0,
      tick = 17//ms
    let animateScroll = () => {
      time += tick
      window.scrollTo(0, this.ease(time, start, diff, duration))
      if(time < duration) setTimeout(animateScroll, tick)
    }
    animateScroll()
  }
  ease(t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b
  }
  render() {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.any
}

export default withRouter(ScrollToTop)
