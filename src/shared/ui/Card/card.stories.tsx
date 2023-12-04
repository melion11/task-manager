import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../typography'
import { Card } from "@/shared/ui/Card/card.tsx";
import { Button } from "@/shared/ui";



const meta = {
  title: 'components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Typography variant={'h2'}>Login In</Typography>
        <Button variant={'primary'} fullWidth={false} onClick={() => {}}>
          Button
        </Button>
      </>
    ),
  },
}
