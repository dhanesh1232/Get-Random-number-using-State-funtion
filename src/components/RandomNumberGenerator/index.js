// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerateRandomNum = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="container-card">
          <h2>Random Number</h2>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="btn"
            onClick={this.onGenerateRandomNum}
          >
            Generate
          </button>
          <p className="h1">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
