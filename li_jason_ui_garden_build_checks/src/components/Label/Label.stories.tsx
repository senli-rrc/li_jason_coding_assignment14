import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Label",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Default Label");

    await expect(label).toBeInTheDocument();
  },
};

// export const Primary: Story = {
//   args: {
//     variant: 'primary',
//     children: 'Primary Label',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const label = canvas.getByText('Primary Label');

//     await expect(label).toBeInTheDocument();
//     await expect(label).toHaveStyle('background-color: #007bff');
//   },
// };

// export const Success: Story = {
//   args: {
//     variant: 'success',
//     children: 'Success Label',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const label = canvas.getByText('Success Label');

//     await expect(label).toBeInTheDocument();
//     await expect(label).toHaveStyle('background-color: #28a745');
//   },
// };

// export const Warning: Story = {
//   args: {
//     variant: 'warning',
//     children: 'Warning Label',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const label = canvas.getByText('Warning Label');

//     await expect(label).toBeInTheDocument();
//     await expect(label).toHaveStyle('background-color: #ffc107');
//   },
// };

// export const Danger: Story = {
//   args: {
//     variant: 'danger',
//     children: 'Danger Label',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const label = canvas.getByText('Danger Label');

//     await expect(label).toBeInTheDocument();
//     await expect(label).toHaveStyle('background-color: #dc3545');
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     children: 'Small Label',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const label = canvas.getByText('Small Label');

//     await expect(label).toBeInTheDocument();
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     children: 'Large Label',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const label = canvas.getByText('Large Label');

//     await expect(label).toBeInTheDocument();
//   },
// };

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Label",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Disabled Label");

    await expect(label).toBeInTheDocument();
    await expect(label).toHaveStyle("cursor: not-allowed");
    await expect(label).toHaveStyle("opacity: 0.6");
  },
};

// export const CustomColors: Story = {
//   args: {
//     backgroundColor: '#ff6b6b',
//     color: '#ffffff',
//     children: 'Custom Label',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const label = canvas.getByText('Custom Label');

//     await expect(label).toBeInTheDocument();
//     await expect(label).toHaveStyle('background-color: #ff6b6b');
//     await expect(label).toHaveStyle('color: #ffffff');
//   },
// };
