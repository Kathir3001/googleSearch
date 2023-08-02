// Write your code here googleSearch
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = even => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-containe">
        <div className="google-suggestions-containe">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png alt"
            alt="google-logo"
            className="google-logo"
          />
          <input
            type="search"
            className="search-input"
            placeholder="Search Google"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />{' '}
        </div>{' '}
        <ul className="suggestions-list">
          {' '}
          {searchResults.map(eachSuggestion => (
            <SuggestionItem
              key={eachSuggestion.id}
              suggestionDetails={eachSuggestion}
              updateSearchInput={this.updateSearchInput}
            />
          ))}{' '}
        </ul>{' '}
      </div>
    )
  }
}

export default GoogleSuggestions
