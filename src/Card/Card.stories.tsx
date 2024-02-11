import React from 'react';
import { Story, Meta } from '@storybook/react';
import  { CardProps } from './Card';



export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>This is a sample card</div>,
};
