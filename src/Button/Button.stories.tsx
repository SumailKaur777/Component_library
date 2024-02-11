import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

// Template for a story
const Template: Story = (args) => <Button {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};
