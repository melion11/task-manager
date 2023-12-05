import type { Meta, StoryObj } from '@storybook/react'
import { Card } from "@/shared/ui/Card/card.tsx";
import { Button } from "@/shared/ui";
import { Typography } from "@/shared/ui/Typography";



const meta = {
  title: 'shared/Card',
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
