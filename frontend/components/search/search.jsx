import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import debounce from 'lodash/debounce';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: this.props.currentUser.preferredCity,
      search: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDebounce = this.handleChangeDebounce.bind(this);
  }

  updatePreferredCity(e) {
    let newUser = Object.assign({}, this.props.currentUser);
    newUser.preferredCity = e.currentTarget.value;
    this.props.updateUser(newUser);
  }

  update(type) {
    return e => this.setState(
      { [type]: e.currentTarget.value }
    );
  }

  handleSearch(e) {
    e.preventDefault();
    let search = Object.assign({}, this.state, {bounds: this.props.bounds});
    this.props.searchTreats(search);
  }

  handleChange(e) {
    const val = e.currentTarget.value;
    this.setState({ search: val }, () => {

      let search = Object.assign({}, this.state, {bounds: this.props.bounds});
      this.props.searchTreats(search);

    });
  }

  //debounced function
  handleChangeDebounce(e) {
    const val = e.currentTarget.value;
    this.setState({ search: val }, () => {

      let search = Object.assign({}, this.state);
      debounce( () => {
        this.props.searchTreats(search);
      }
      , 2000)();

    });
  }

  toggleFav() {
    if (this.props.favorite) {
      this.props.changeFilter('favorite', false);
    } else {
      this.props.changeFilter('favorite', true);
    }
  }

  render() {

    return (
      <div className="search-component">

        <select value={this.state.city}
          onChange={ (e) => this.updatePreferredCity(e)}>

          {this.props.cities.map( (city) => {
            return <option key={city.id}
              value={city.name}>{city.name}</option>;
          })}
        </select>

        <form onSubmit={this.handleSearch}>

          <input type="text"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Search by treat or shop"/>

        </form>

        <div onClick={()=>this.toggleFav()}>
          TOGGLEFAV
        </div>

      </div>
    );
  }
}

export default Search;
