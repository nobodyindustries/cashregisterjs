import {inter} from "@/lib/fonts";
import '../src/app/globals.css';


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className={`!p-0 !m-0 ${inter.className}`}>
          <Story/>
        </div>
      )
    }
  ]
};

export default preview;
