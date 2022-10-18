import { h } from 'preact';
import styled from 'styled-components';
import { linkTo } from '@storybook/addon-links';

const Main = styled.div`
  padding: 1em;
`;

Main.displayName = 'Main';

const Title = ({ children, ...props }) => <h1 {...props}>{children}</h1>;

const Link = ({ children, href, ...props }) => (
  <a
    href={href}
    {...props}
    style={{
      color: '#1474f3',
      textDecoration: 'none',
      borderBottom: '1px solid #1474f3',
      paddingBottom: 2,
    }}
  >
    {children}
  </a>
);

const NavButton = ({ children, ...props }) => (
  <button
    {...props}
    type="button"
    style={{
      color: '#1474f3',
      textDecoration: 'none',
      borderBottom: '1px solid #1474f3',
      paddingBottom: 2,
      borderTop: 'none',
      borderRight: 'none',
      borderLeft: 'none',
      backgroundColor: 'transparent',
      padding: 0,
      cursor: 'pointer',
      font: 'inherit',
    }}
  >
    {children}
  </button>
);

const Welcome = () => (
  <Main>
    <Title>Welcome to storybook</Title>
    <p>This is a UI component dev environment for your app.</p>
    <p>
      A story is a single state of one or more UI components. You can have as many stories
      as you want. Basically a story is like a visual test case.
    </p>
    <p>
      Just like that, you can add your own components as stories.
      <br />
      You can also edit those components and see changes right away.
    </p>
    <p>
      Usually we create stories with smaller UI components in the app.
      <br />
      Have a look at the{' '}
      <Link
        href="https://storybook.js.org/basics/writing-stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Writing Stories
      </Link>{' '}
      section in our documentation.
    </p>
  </Main>
);

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'to Storybook',
};
