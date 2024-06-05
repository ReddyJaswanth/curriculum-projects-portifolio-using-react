import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const sendTabId = () => onClickTab(tabId)
  const activeClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={sendTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
