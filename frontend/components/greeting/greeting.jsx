import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTreats(this.props.currentUser.preferredCity);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  render() {
    let { treats, shops, errors } = this.props;
    treats = Object.values(treats);
    return (
      <div>
        {treats.map((treat) => <li key={treat.id}>
          <img src={treat.imageUrl}></img>
        </li>)}
      </div>
    );
  }
}

export default Greeting;
