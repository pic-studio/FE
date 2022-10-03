import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      table: { category: 'Sizes'},
    },
    
    onClick: {
      table: {
        category: 'Events'
      },
    },
  },
  parameters: {
    layout: 'centered',
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  label: 'Button',
  radius: 'none',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'lg',
};