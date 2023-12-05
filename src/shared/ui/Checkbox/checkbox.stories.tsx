import { Meta, StoryObj } from '@storybook/react'

import { CustomCheckbox } from './checkbox.tsx'

const meta = {
  title: 'shared/CustomCheckbox',
  component: CustomCheckbox,
  tags: ['autodocs'],
} satisfies Meta<typeof CustomCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Checkbox',
    disabled: false,
  },
}
