import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  InstantSearch,
  Configure,
  Index,
  Highlight
} from 'react-instantsearch/dom'
import { connectAutoComplete } from 'react-instantsearch/connectors'
import Autosuggest from 'react-autosuggest'

const Search = () => (
  <InstantSearch
    appId="5GFKHLOIX8"
    apiKey="aaaf8da6ce8c3b18926dd15895c961f1"
    indexName="wp_posts_faculty"
  >
    <AutoComplete />
    <Configure hitsPerPage={1} />
    <Index indexName="wp_posts_campus-security" />
    <Index indexName="wp_posts_news" />
  </InstantSearch>
)

class Example extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired
  }

  state = {
    value: this.props.currentRefinement
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value)
  }

  onSuggestionsClearRequested = () => {
    this.props.refine()
  }

  getSuggestionValue (hit) {
    return hit.post_title
  }

  renderSuggestion (hit) {
    console.log(hit)
    return (
      <>
        <Highlight attribute="post_title" hit={hit} tagName="mark" /> <br />
        <Highlight attribute="content" hit={hit} tagName="mark" />
      </>
    )
  }

  renderSectionTitle (section) {
    return section.index
  }

  getSectionSuggestions (section) {
    return section.hits
  }

  render () {
    const { hits } = this.props
    const { value } = this.state

    const inputProps = {
      placeholder: 'Search for a product...',
      onChange: this.onChange,
      value
    }

    return (
      <Autosuggest
        suggestions={hits}
        multiSection={true}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
      />
    )
  }
}

const AutoComplete = connectAutoComplete(Example)

export default Search
