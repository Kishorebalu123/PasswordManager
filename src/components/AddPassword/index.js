import {Component} from 'react'

import './index.css'

class AddPassword extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    count: 0,
  }

  onChangeWebsiteInput = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onChangeUsernameInput = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangePasswordInput = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickToAdd = () => {
    const {websiteInput, usernameInput, passwordInput, count} = this.state
    if (websiteInput !== '' && usernameInput !== '' && passwordInput !== '') {
      this.setState({
        websiteInput: '',
        usernameInput: '',
        passwordInput: '',
        count: count + 1,
      })
    }
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      count,
    } = this.state

    return (
      <div className="bg-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="app-logo"
          alt="app logo"
        />
        <div className="password-container password-container1">
          <div className="add-password-container">
            <h1 className="add-password-heading">Add New Password</h1>

            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                className="website-icon"
                alt="website"
              />

              <input
                className="website-input"
                type="text"
                placeholder="Enter Website"
                onChange={this.onChangeWebsiteInput}
                value={websiteInput}
              />
            </div>

            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                className="website-icon"
                alt="username"
              />

              <input
                className="website-input"
                type="text"
                placeholder="Enter Username"
                onChange={this.onChangeUsernameInput}
                value={usernameInput}
              />
            </div>

            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                className="website-icon"
                alt="password"
              />

              <input
                className="website-input"
                type="text"
                placeholder="Enter Password"
                onChange={this.onChangePasswordInput}
                value={passwordInput}
              />
            </div>
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.onClickToAdd}
              >
                Add
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="password-manager"
            alt="password manager"
          />
        </div>
        <div className="password-container">
          <div className="top-container">
            <h1 className="heading">
              Your Passwords <span className="">{count}</span>
            </h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                onChange={this.onChangeSearchInput}
                placeholder="Search"
                value={searchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show-password-container">
            <input type="checkbox" id="input" />
            <label htmlFor="input" className="label">
              Show Passwords
            </label>
          </div>
          <div className="password-card">kk</div>
        </div>
      </div>
    )
  }
}
export default AddPassword
