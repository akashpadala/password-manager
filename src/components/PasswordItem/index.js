import './index.css'

const PasswordItem = props => {
  const {itemDetails, onDeletePassword, checkBoxStatus} = props
  const {id, website, userName, password} = itemDetails

  const onDelete = () => {
    onDeletePassword(id)
  }

  const passwordEl = checkBoxStatus ? (
    <p className="password-el"> {password} </p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-img"
    />
  )

  return (
    <li className="password-list-item">
      <p className="profile"> {userName[0]} </p>
      <div className="password-card-container">
        <p className="website-el"> {website} </p>
        <p className="username-el"> {userName} </p>
        {passwordEl}
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-btn"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="dlt-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
