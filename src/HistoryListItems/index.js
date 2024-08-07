import './index.css'

const HistoryListItems = props => {
  const {initialHistory, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = initialHistory

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="delete-history-container">
      <div className="history-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        onClick={onDeleteItem}
        type="button"
        className="delete-image"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryListItems
