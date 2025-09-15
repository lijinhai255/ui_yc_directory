import theme from "./theme";
import '../src/styles.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: theme,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1A1A1A',
        },
        {
          name: 'light',
          value: '#F8F8F8',
        },
      ],
    },
    options: {
      storySort: {
        order: ['Core', 'Components', 'Templates', 'Pages'],
      },
    },
  },
};

export default preview;