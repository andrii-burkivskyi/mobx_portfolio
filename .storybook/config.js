const { addParameters, configure } = require('@storybook/react');

addParameters({
  options: {
    showPanel: false
  }
})

// automatically import all files ending in *.stories.tsx
function loadStories() {
  require("../src/components/Form/Input/Input.stories.tsx");
}

configure(loadStories, module);
