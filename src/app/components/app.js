import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { createGlobalStyle } from 'styled-components';
import { Header } from 'app/components';

// Code-splitting is automated for routes
import Home from 'app/routes/home';
import Profile from 'app/routes/profile';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <GlobalStyle />
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    );
  }
}
