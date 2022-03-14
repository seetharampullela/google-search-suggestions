// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeData = event => {
    this.setState({searchInput: event.target.value})
  }

  addInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="result-element">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-img"
          />
          <input
            type="search"
            placeholder="Search Google"
            value={searchInput}
            onChange={this.onChangeData}
            className="input-element"
          />
          <ul>
            {searchResults.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                addInput={this.addInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
