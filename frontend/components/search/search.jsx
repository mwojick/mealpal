import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import debounce from 'lodash/debounce';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: this.props.currentUser.preferredCity,
      search: this.props.search
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDebounce = this.handleChangeDebounce.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.search !== this.props.search) {
      this.setState({search: newProps.search});
    }
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
    this.props.changeFilter('search', this.state.search);

    let search = Object.assign({}, this.state, {bounds: this.props.bounds});
    this.props.searchTreats(search);
  }

  handleChange(e) {
    const val = e.currentTarget.value;

    this.setState({ search: val }, () => {
      this.props.changeFilter('search', this.state.search);

      let search = Object.assign({}, this.state, {bounds: this.props.bounds});
      this.props.searchTreats(search);

    });
  }

  //debounced function
  handleChangeDebounce(e) {
    const val = e.currentTarget.value;
    this.setState({ search: val }, () => {

      debounce( () => {
        let search = Object.assign({}, this.state);
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

        <div className="search-city">
          <select value={this.state.city}
            onChange={ (e) => this.updatePreferredCity(e)}>

            {this.props.cities.map( (city) => {
              return <option key={city.id}
                value={city.name}>{city.name}</option>;
            })}
          </select>
        </div>

        <div className="search-form">
          <form onSubmit={this.handleSearch}>

            <input type="text"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="Search by treat or shop"/>

            <img className="search-icon" src="https://res.cloudinary.com/mwojick/image/upload/v1528698043/search-icon.png"></img>
          </form>
        </div>

        <div className={this.props.favorite ?
            "search-fav-toggle button-fav" : "search-fav-toggle button-unfav"}>
          <button
            onClick={()=>this.toggleFav()}>
            Favorites
          </button>
        </div>

      </div>
    );
  }
}

export default Search;
