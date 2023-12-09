import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "@/components/ui";

const meta = {
  title: "Components/LoginFrom",
  component: LoginForm,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
