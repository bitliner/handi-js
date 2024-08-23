/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(json|yaml|yml|js)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    // "@storybook/addon-styling-webpack"
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-styling-webpack"
  ],

  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  },

  docs: {}
};
export default config;
