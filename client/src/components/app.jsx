import React from "react";
import { Switch } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import AccountContainer from "./account/account_container";
import FavoritesContainer from "./account/favorites_container";
import HistoryContainer from "./account/history_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Nav from "./nav/nav";
import Footer from "./footer/footer";
import Modal from "./modal/modal";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentUser } from "../actions/session_actions";

class App extends React.Component {
  // bootstrap user
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (!this.props.fetchedUser) {
      return null;
    } else {
      return (
        <div>
          <Modal />

          <header>
            <Nav />
          </header>

          <div className="main-body">
            <main className="main-page">
              <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <ProtectedRoute path="/account" component={AccountContainer} />
                <ProtectedRoute
                  path="/favorites"
                  component={FavoritesContainer}
                />
                <ProtectedRoute path="/history" component={HistoryContainer} />
                <ProtectedRoute path="/" component={GreetingContainer} />
              </Switch>
            </main>

            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    fetchedUser: state.ui.filters.fetchedUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
