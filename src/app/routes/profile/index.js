import styled from 'styled-components';
import { h, Component } from 'preact';
import { request } from 'app/utils';

const StyledProfile = styled.div`
  padding: 50px 20px;
  min-height: 100%;
`;

export default class Profile extends Component {
  state = {
    time: Date.now(),
    count: 10,
  };

  // update the current time
  updateTime = () => {
    this.setState({ time: Date.now() });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);

    // Make sample API request.
    request('/api/');
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ user }, { time, count }) {
    return (
      <StyledProfile>
        <h1>Profile: {user}</h1>
        <p>This is the user profile for a user named {user}.</p>

        <div>Current time: {new Date(time).toLocaleString()}</div>

        <p>
          <button onClick={this.increment}>Click Me</button> Clicked {count} times.
        </p>
      </StyledProfile>
    );
  }
}
