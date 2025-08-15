import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Button text content",
    },
    backgroundColor: {
      control: "color",
      description: "Background color of the button",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
    onClick: {
      action: "clicked",
      description: "Click handler function",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Click Me",
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent("Click Me");
    await expect(button).not.toBeDisabled();
  },
};

export const Disabled: Story = {
  args: {
    title: "Disabled Button",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent("Disabled Button");
    await expect(button).toBeDisabled();
    await expect(button).toHaveStyle("cursor: not-allowed");
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    title: "Custom Color",
    backgroundColor: "#28a745",
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveTextContent("Custom Color");
    await expect(button).toHaveStyle("background-color: rgb(40, 167, 69)");
  },
};

// export const DangerButton: Story = {
//   args: {
//     title: 'Delete',
//     backgroundColor: '#dc3545',
//     disabled: false,
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const button = canvas.getByRole('button');
//     await expect(button).toBeInTheDocument();
//     await expect(button).toHaveTextContent('Delete');
//     await expect(button).toHaveStyle('background-color: rgb(220, 53, 69)');
//   },
// };

// export const WarningButton: Story = {
//   args: {
//     title: 'Warning',
//     backgroundColor: '#ffc107',
//     disabled: false,
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const button = canvas.getByRole('button');
//     await expect(button).toBeInTheDocument();
//     await expect(button).toHaveTextContent('Warning');
//     await expect(button).toHaveStyle('background-color: rgb(255, 193, 7)');
//   },
// };
