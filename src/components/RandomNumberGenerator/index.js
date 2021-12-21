import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandomNumber = () => Math.ceil(Math.random() * 100)

  OnClickGenerateRandomNumber = () => {
    const getRandomNumber = this.generateRandomNumber()
    // console.log(getRandomNumber)
    this.setState({randomNumber: getRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.OnClickGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
