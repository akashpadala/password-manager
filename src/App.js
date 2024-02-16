import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import PasswordItem from './components/PasswordItem'
import './App.css'

class App extends Component {
  state = {
    initialPasswordsList: [],
    website: '',
    userName: '',
    password: '',
    searchInput: '',
    checkBoxStatus: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, userName, password} = this.state
    const newPassword = {
      id: uuid(),
      website,
      userName,
      password,
    }
    this.setState(prevState => ({
      initialPasswordsList: [...prevState.initialPasswordsList, newPassword],
      website: '',
      userName: '',
      password: '',
    }))
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({
      checkBoxStatus: !prevState.checkBoxStatus,
    }))
  }

  onDeletePassword = id => {
    const {initialPasswordsList} = this.state
    const filteredPasswordList = initialPasswordsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({
      initialPasswordsList: filteredPasswordList,
    })
  }

  render() {
    const {
      initialPasswordsList,
      website,
      userName,
      password,
      searchInput,
      checkBoxStatus,
    } = this.state
    const searchedPasswordList = initialPasswordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="first-card-container">
          <div className="pm-img-sm">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="pm-img"
            />
          </div>
          <form
            className="password-form-container"
            onSubmit={this.onAddPassword}
          >
            <h1 className="form-title"> Add New Password </h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-img"
              />
              <input
                value={website}
                className="input"
                onChange={this.onChangeWebsite}
                placeholder="Enter Website"
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-img"
              />
              <input
                value={userName}
                className="input"
                onChange={this.onChangeUserName}
                placeholder="Enter Username"
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-img"
              />
              <input
                type="password"
                value={password}
                className="input"
                onChange={this.onChangePassword}
                placeholder="Enter Password"
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="pm-img-lg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="pm-img"
            />
          </div>
        </div>
        <div className="first-card-container">
          <div className="card-container">
            <h1 className="password-count-container">Your Passwords</h1>
            <p className="password-count">{initialPasswordsList.length}</p>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-img"
              />
              <input
                type="search"
                value={searchInput}
                className="search-input"
                onChange={this.onChangeSearchInput}
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="checkbox-container">
            <input
              id="checkbox"
              type="checkbox"
              className="checkbox"
              onChange={this.onChangeCheckBox}
            />
            <label htmlFor="checkbox" className="label-el">
              Show Passwords
            </label>
          </div>
          {searchedPasswordList.length === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p className="no-password"> No Passwords </p>
            </div>
          ) : (
            <ul className="password-list-container">
              {searchedPasswordList.map(eachItem => (
                <PasswordItem
                  itemDetails={eachItem}
                  key={eachItem.id}
                  onDeletePassword={this.onDeletePassword}
                  checkBoxStatus={checkBoxStatus}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
