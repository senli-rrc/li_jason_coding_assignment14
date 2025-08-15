import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Dropdown } from "./Dropdown";

const sampleOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4", disabled: true },
  { value: "option5", label: "Option 5" },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    borderColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    fullWidth: { control: "boolean" },
    multiple: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Select an option",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown =
      canvas.getByRole("combobox") || canvas.getByText("Select an option");

    await expect(dropdown).toBeInTheDocument();
  },
};

// export const WithValue: Story = {
//   args: {
//     options: sampleOptions,
//     value: 'option2',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const dropdown = canvas.getByDisplayValue('Option 2') || canvas.getByText('Option 2');

//     await expect(dropdown).toBeInTheDocument();
//   },
// };

// export const Small: Story = {
//   args: {
//     options: sampleOptions,
//     size: 'small',
//     placeholder: 'Small dropdown',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const dropdown = canvas.getByRole('combobox') || canvas.getByText('Small dropdown');

//     await expect(dropdown).toBeInTheDocument();
//   },
// };

// export const Large: Story = {
//   args: {
//     options: sampleOptions,
//     size: 'large',
//     placeholder: 'Large dropdown',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const dropdown = canvas.getByRole('combobox') || canvas.getByText('Large dropdown');

//     await expect(dropdown).toBeInTheDocument();
//   },
// };

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: "Disabled dropdown",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown =
      canvas.getByRole("combobox") || canvas.getByText("Disabled dropdown");

    await expect(dropdown).toBeInTheDocument();
    if (dropdown.tagName === "SELECT") {
      await expect(dropdown).toBeDisabled();
    }
  },
};

// export const Error: Story = {
//   args: {
//     options: sampleOptions,
//     error: true,
//     placeholder: 'Error state',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const dropdown = canvas.getByRole('combobox') || canvas.getByText('Error state');

//     await expect(dropdown).toBeInTheDocument();
//   },
// };

// export const FullWidth: Story = {
//   args: {
//     options: sampleOptions,
//     fullWidth: true,
//     placeholder: 'Full width dropdown',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const dropdown = canvas.getByRole('combobox') || canvas.getByText('Full width dropdown');

//     await expect(dropdown).toBeInTheDocument();
//   },
// };

// export const CustomColors: Story = {
//   args: {
//     options: sampleOptions,
//     backgroundColor: '#f0f0f0',
//     color: '#333',
//     borderColor: '#007bff',
//     placeholder: 'Custom colors',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const dropdown = canvas.getByRole('combobox') || canvas.getByText('Custom colors');

//     await expect(dropdown).toBeInTheDocument();
//   },
// };
