import styled from 'styled-components';
import { h } from 'preact';

const StyledHome = styled.div`
  padding: 50px 20px;
  min-height: 100%;
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>Hooray!!! Your app is up and running!</h1>
      <p>
        Go ahead. Try updating the Preact app or Express server code and refresh the page.
        It should update without having to re-run <strong>yarn start</strong>
      </p>
      <p>
        <a href="/api"> Click here to visit the API</a>
      </p>
    </StyledHome>
  );
};

export default Home;
