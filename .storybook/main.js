module.exports = {
  stories: ['./Welcome.stories.js', '../src/app/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
  ],
};
