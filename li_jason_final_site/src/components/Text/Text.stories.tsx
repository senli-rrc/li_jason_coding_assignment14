import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    as: {
      control: { type: "select" },
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    weight: {
      control: { type: "select" },
      options: ["light", "normal", "medium", "semibold", "bold"],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is default text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("This is default text");

    await expect(text).toBeInTheDocument();
  },
};

// export const Heading1: Story = {
//   args: {
//     as: 'h1',
//     size: '2xl',
//     weight: 'bold',
//     children: 'This is a heading',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const heading = canvas.getByRole('heading', { level: 1 });

//     await expect(heading).toBeInTheDocument();
//     await expect(heading).toHaveTextContent('This is a heading');
//   },
// };

// export const Heading2: Story = {
//   args: {
//     as: 'h2',
//     size: 'xl',
//     weight: 'semibold',
//     children: 'This is a subheading',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const heading = canvas.getByRole('heading', { level: 2 });

//     await expect(heading).toBeInTheDocument();
//     await expect(heading).toHaveTextContent('This is a subheading');
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'sm',
//     children: 'This is small text',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const text = canvas.getByText('This is small text');

//     await expect(text).toBeInTheDocument();
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'lg',
//     children: 'This is large text',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const text = canvas.getByText('This is large text');

//     await expect(text).toBeInTheDocument();
//   },
// };

// export const Bold: Story = {
//   args: {
//     weight: 'bold',
//     children: 'This is bold text',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const text = canvas.getByText('This is bold text');

//     await expect(text).toBeInTheDocument();
//   },
// };

// export const Centered: Story = {
//   args: {
//     align: 'center',
//     children: 'This text is centered',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const text = canvas.getByText('This text is centered');

//     await expect(text).toBeInTheDocument();
//     await expect(text).toHaveStyle('text-align: center');
//   },
// };

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "This text is disabled",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText("This text is disabled");

    await expect(text).toBeInTheDocument();
    await expect(text).toHaveStyle("cursor: not-allowed");
    await expect(text).toHaveStyle("opacity: 0.6");
  },
};

// export const WithBackground: Story = {
//   args: {
//     backgroundColor: '#f0f0f0',
//     children: 'Text with background',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const text = canvas.getByText('Text with background');

//     await expect(text).toBeInTheDocument();
//     await expect(text).toHaveStyle('background-color: #f0f0f0');
//   },
// };

// export const CustomColor: Story = {
//   args: {
//     color: '#007bff',
//     children: 'Text with custom color',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const text = canvas.getByText('Text with custom color');

//     await expect(text).toBeInTheDocument();
//     await expect(text).toHaveStyle('color: #007bff');
//   },
// };
