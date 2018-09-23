import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { connectAutoComplete } from 'react-instantsearch/connectors'
import {
  Configure,
  Highlight,
  Index,
  InstantSearch
} from 'react-instantsearch/dom'

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
    <Index indexName="wp_posts_human-resource" />
    <Index indexName="wp_posts_associate-program" />
    <Index indexName="wp_posts_minor" />
    <Index indexName="wp_posts_about-page" />
    <Index indexName="wp_posts_staff-member" />
    <Index indexName="wp_posts_event" />
    {/* <Index indexName="wp_posts_major" /> */}
    <Index indexName="wp_posts_fms-page" />
    <Index indexName="wp_posts_institute" />
    {/* <Index indexName="wp_posts_student-life-page" /> */}
    {/* <Index indexName="wp_posts_department" /> */}
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
