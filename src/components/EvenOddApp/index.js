// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onInrement = () => {
    this.setState(prevState => {

      const {count} = prevState

      const num = count + Math.ceil(Math.random() * 100)

      let numType

      if (num%2 === 0) {
        numType = true
      } else {
        numType = false
      }

      return {isEven: numType, count: num}
    })
  }

  render() {
    const {isEven, count} = this.state

    const content = isEven ? 'Even' : 'Odd'

    return (
      <div className="even-odd-app-container">
        <div className="even-odd-container">
          <h1 classname="even-odd-heading">Count {count}</h1>
          <p className="even-odd-paragraph">Count is {content}</p>
          <button
            className="even-odd-button"
            type="button"
            onClick={this.onInrement}
          >
            Increment
          </button>
          <p className="even-odd-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
