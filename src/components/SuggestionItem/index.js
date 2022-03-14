// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, addInput} = props
  const {suggestion} = suggestionDetails

  const changeInput = () => {
    addInput(suggestion)
  }

  return (
    <li className="list-container">
      <div className="list-item">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
          onClick={changeInput}
        />
      </div>
    </li>
  )
}
export default SuggestionItem
