import React from "react";
// import { Link, Redirect } from 'react-router-dom';

class Account extends React.Component {
  constructor(props) {
    super(props);

    let name = this.props.currentUser.name || "";
    let companyName = this.props.currentUser.companyName || "";
    let imageUrl = this.props.currentUser.imageUrl || "";

    this.state = {
      id: this.props.currentUser.id,
      name: name,
      email: this.props.currentUser.email,
      companyName: companyName,
      imageUrl: imageUrl
    };
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value });
  }

  render() {
    let { currentUser, errors } = this.props;

    let treatType = [];
    for (let i = 0; i < 20; i++) {
      if (i < currentUser.treatsLeft) {
        treatType.unshift(false);
      } else {
        treatType.unshift(true);
      }
    }

    return (
      <div className="account-page">
        <div className="account-top">
          <div className="account-hi">Hi {currentUser.name}!</div>
          <div className="account-plan">
            You are currently on the <span>20 TREAT PLAN.</span>
          </div>
          <div className="account-cycle">
            You have <span>{currentUser.treatsLeft} MORE TREATS</span> left in
            your cycle.
          </div>
          <div className="account-icons">
            {treatType.map((type, idx) => {
              return (
                <img
                  key={idx}
                  alt=""
                  src={
                    type
                      ? "https://res.cloudinary.com/mwojick/image/upload/v1529051209/TreatPal/icons/ic-used.png"
                      : "https://res.cloudinary.com/mwojick/image/upload/v1533444387/TreatPal/icons/ic-unused-c.png"
                  }
                />
              );
            })}
          </div>

          <div className="acc-info">
            <span>YOUR ACCOUNT INFORMATION</span>
          </div>
        </div>

        <div className="account-bottom">
          <div className="account-image">
            <strong>YOUR PHOTO:</strong>
            <img alt="" src={currentUser.imageUrl} />
            <input
              type="text"
              placeholder="Input Photo URL"
              disabled={this.state.email === "demo" ? true : false}
              value={this.state.imageUrl}
              onChange={this.update("imageUrl")}
            />
          </div>

          <div className="account-text">
            <div className="account-name">
              <strong>NAME:</strong>
              <input
                type="text"
                disabled={this.state.email === "demo" ? true : false}
                value={this.state.name}
                onChange={this.update("name")}
              />
            </div>

            <div className="account-email">
              <strong>EMAIL:</strong>
              {errors}
              <input
                type="text"
                disabled={this.state.email === "demo" ? true : false}
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>

            <div className="account-company">
              <strong>COMPANY NAME:</strong>
              <input
                type="text"
                disabled={this.state.email === "demo" ? true : false}
                value={this.state.companyName}
                onChange={this.update("companyName")}
              />
            </div>

            <button
              className="acc-update"
              onClick={() => this.props.updateUser(this.state)}
            >
              Update Info
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
