// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  showHideFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showHideLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="name-container">
            <button
              type="button"
              onClick={this.showHideFirstName}
              className="button"
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              onClick={this.showHideLastName}
              className="button"
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
