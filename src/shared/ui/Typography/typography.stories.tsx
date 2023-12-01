import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography.tsx'

const meta = {
  title: 'components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'subtitle1',
        'body2',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error',
      ],
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Test',
  },
}

export const H1: Story = {
  args: {
    as: 'h1',
    variant: 'h1',
    children: 'Test',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    variant: 'h2',
    children: 'Test',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    variant: 'h3',
    children: 'Test',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Test',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Test',
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Test',
  },
}

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Test',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Test',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Test',
  },
}

export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'Test',
  },
}

export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'Test',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Test',
  },
}
