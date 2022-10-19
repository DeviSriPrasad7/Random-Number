// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    isNumber: 0,
  }

  onChange = () => {
    this.setState({
      isNumber: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {isNumber} = this.state
    return (
      <div className="random-number-container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onChange}>
            Generate
          </button>
          <p className="heading">{isNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
