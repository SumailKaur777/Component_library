import React from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'radioButton1',
  value: 'option1',
  checked: false,
  label: 'Option 1',
  onChange: (value: string) => console.log('Selected option:', value),
};
