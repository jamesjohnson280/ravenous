import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByOption(sortByOption) {
    if (this.state.sortBy === sortByOption) { 
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });    
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }

  renderBySortByOptions() {
    return Object.keys(this.sortByOptions)
      .map(sortByOption => { 
        const sortByOptionValue = this.sortByOptions[sortByOption]; 
        return <li key={sortByOptionValue} 
                className={this.getSortByOption(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)} >{sortByOption}</li>
      });
  }

  render () {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderBySortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch} >Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;