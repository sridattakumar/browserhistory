import './index.css'

const HistoryItem = props => {
  const {HistoryItemDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryItemDetails

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="each-item">
      <p className="time">{timeAccessed}</p>
      <img className="logo" alt="app logo" src={logoUrl} />
      <p className="title">{title}</p>
      <p className="domain" alt="domain logo">
        {domainUrl}
      </p>
      <img
        onClick={onDelete}
        className="dlt"
        alt="delete"
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
      />
    </li>
  )
}
export default HistoryItem
