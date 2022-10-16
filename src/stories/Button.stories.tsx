import type { Story, Meta } from '@storybook/react';

import { PrimaryButton, PrimaryButtonTheme } from './Button';
import type { PrimaryButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: PrimaryButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    theme: {
      options: [PrimaryButtonTheme.default, PrimaryButtonTheme.red, PrimaryButtonTheme.white, PrimaryButtonTheme.black, PrimaryButtonTheme.transparent],
      control: { type: 'radio' }
    }
  },
} as Meta;

const Template: Story<PrimaryButtonProps> = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: PrimaryButtonTheme.default,
  children: 'Default',
};

export const Red = Template.bind({});
Red.args = {
  theme: PrimaryButtonTheme.red,
  children: 'Red',
};

export const White = Template.bind({});
White.args = {
  theme: PrimaryButtonTheme.white,
  children: 'White',
};

export const Black = Template.bind({});
Black.args = {
  theme: PrimaryButtonTheme.black,
  children: 'Black',
};

export const Transparent = Template.bind({});
Transparent.args = {
  theme: PrimaryButtonTheme.transparent,
  children: 'Transparent',
};
