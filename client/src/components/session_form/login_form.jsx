import React from "react";
// import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(type) {
    return e =>
      this.setState({
        [type]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-form-main">
          <div className="login-form-container animated fadeInUp">
            <div className="login-welcome">WELCOME BACK</div>

            <div className="login-to-account">
              Log in to your TreatPal account
            </div>

            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-errors">{this.renderErrors()}</div>

              <div className="login-form">
                <label className="login-label">
                  EMAIL ADDRESS:
                  <input
                    type="text"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input"
                  />
                </label>

                <label className="login-label">
                  PASSWORD:
                  <input
                    type="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                  />
                </label>

                <button className="session-submit" type="submit">
                  <div>{this.props.formType}</div>
                </button>
              </div>
            </form>
            <div className="login-donthave">Don't have a TreatPal account?</div>
            <div className="other-link">
              <li>{this.props.navLink}</li>
              <li className="sign-up-separator" />
              <li>
                <div onClick={() => this.props.demo()}>Demo!</div>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
