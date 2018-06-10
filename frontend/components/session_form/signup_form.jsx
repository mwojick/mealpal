import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      preferredCity: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(type) {

    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {

    let emailError;
    let pwError;
    let cityError;

    this.props.errors.map((error, i) => {
      if (error.toLowerCase().includes("email")) {
        emailError =  <div className="signup-errors" key={`error-${i}`}>
          {error}
        </div>;
      } else if (error.toLowerCase().includes("password")) {
        pwError = <div className="signup-errors" key={`error-${i}`}>
          {error}
        </div>;
      } else if (error.toLowerCase().includes("city")) {
        cityError = <div className="signup-errors" key={`error-${i}`}>
          {error}
        </div>;
      }
    });

    return (
      <div className="login-page">

        <div className="login-form-container animated fadeInUp">

          <div className="login-welcome">
            DESSERTS FOR LESS THAN $3
          </div>

          <div className="login-to-account">
            Sign up to TreatPal
          </div>

          <form onSubmit={this.handleSubmit} className="login-form-box">


            <div className="login-form">

              <label className="login-label">
                <ul className="label-err">
                  <li>
                    EMAIL ADDRESS:
                  </li>
                  <li className="session-error">
                    {emailError}
                  </li>
                </ul>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>

              <label className="login-label">
                <ul className="label-err">
                  <li>
                    PASSWORD:
                  </li>
                  <li className="session-error">
                    {pwError}
                  </li>
                </ul>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>

              <label className="login-label">
                <ul className="label-err">
                  <li>
                    LOCATION:
                  </li>
                  <li className="session-error">
                    {cityError}
                  </li>
                </ul>
                <select value={this.state.preferredCity}
                  onChange={this.update('preferredCity')}>
                  <option hidden value={null}>-- Please Select --</option>

                  {this.props.cities.map( (city) => {
                    return <option key={city.id}
                      value={city.name}>{city.name}</option>;
                  })}

                </select>
              </label>



              <button className="session-submit" type="submit" >
                <div>
                  {this.props.formType}
                </div>
              </button>
            </div>

          </form>
          <div className="login-donthave">
            Already have a TreatPal account?
          </div>
          <div className="other-link">
            {this.props.navLink}
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
