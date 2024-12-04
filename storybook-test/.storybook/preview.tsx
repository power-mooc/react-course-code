import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import React from 'react';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          自定义
          <Primary />
          <Title />
          <Controls />
        </>
      ),
    },
  },
};

export default preview;