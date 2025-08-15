import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    checkedColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "default",
    value: "option1",
    label: "Default Radio Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");
    const label = canvas.getByText("Default Radio Button");

    await expect(radio).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
    await expect(radio).not.toBeChecked();
  },
};

export const Checked: Story = {
  args: {
    name: "checked",
    value: "option1",
    label: "Checked Radio Button",
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");

    await expect(radio).toBeInTheDocument();
    await expect(radio).toBeChecked();
  },
};

// export const Small: Story = {
//   args: {
//     name: 'small',
//     value: 'option1',
//     label: 'Small Radio Button',
//     size: 'small',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const radio = canvas.getByRole('radio');

//     await expect(radio).toBeInTheDocument();
//   },
// };

// export const Large: Story = {
//   args: {
//     name: 'large',
//     value: 'option1',
//     label: 'Large Radio Button',
//     size: 'large',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const radio = canvas.getByRole('radio');

//     await expect(radio).toBeInTheDocument();
//   },
// };

export const Disabled: Story = {
  args: {
    name: "disabled",
    value: "option1",
    label: "Disabled Radio Button",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");

    await expect(radio).toBeInTheDocument();
    await expect(radio).toBeDisabled();
  },
};

export const DisabledChecked: Story = {
  args: {
    name: "disabled-checked",
    value: "option1",
    label: "Disabled Checked Radio Button",
    disabled: true,
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole("radio");

    await expect(radio).toBeInTheDocument();
    await expect(radio).toBeDisabled();
    await expect(radio).toBeChecked();
  },
};

// export const CustomColor: Story = {
//   args: {
//     name: 'custom',
//     value: 'option1',
//     label: 'Custom Color Radio Button',
//     checkedColor: '#28a745',
//     checked: true,
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const radio = canvas.getByRole('radio');

//     await expect(radio).toBeInTheDocument();
//     await expect(radio).toBeChecked();
//   },
// };

// export const RadioGroup: Story = {
//   render: () => (
//     <div>
//       <div style={{ marginBottom: '1rem' }}>
//         <RadioButton name="group1" value="option1" label="Option 1" />
//       </div>
//       <div style={{ marginBottom: '1rem' }}>
//         <RadioButton name="group1" value="option2" label="Option 2" checked />
//       </div>
//       <div style={{ marginBottom: '1rem' }}>
//         <RadioButton name="group1" value="option3" label="Option 3" />
//       </div>
//       <div>
//         <RadioButton name="group1" value="option4" label="Option 4 (Disabled)" disabled />
//       </div>
//     </div>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const radios = canvas.getAllByRole('radio');
//     const checkedRadio = canvas.getByDisplayValue('option2');

//     await expect(radios).toHaveLength(4);
//     await expect(checkedRadio).toBeChecked();
//   },
// };
