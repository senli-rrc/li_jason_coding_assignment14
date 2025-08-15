import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { TableCell } from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Components/TableCell",
  component: TableCell,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["td", "th"],
      description: "HTML element to render as",
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    backgroundColor: {
      control: "color",
      description: "Background color of the cell",
    },
    color: {
      control: "color",
      description: "Text color of the cell",
    },
    disabled: {
      control: "boolean",
      description: "Disable the cell",
    },
    width: {
      control: "text",
      description: "Width of the cell",
    },
  },
  decorators: [
    (Story) => (
      <table
        style={{ borderCollapse: "collapse", border: "1px solid #dee2e6" }}
      >
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Cell Content",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cell = canvas.getByRole("cell");

    await expect(cell).toBeInTheDocument();
    await expect(cell).toHaveTextContent("Cell Content");
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Cell",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cell = canvas.getByRole("cell");

    await expect(cell).toBeInTheDocument();
    await expect(cell).toHaveTextContent("Disabled Cell");
  },
};

// export const HeaderCell: Story = {
//   args: {
//     as: 'th',
//     children: 'Header Cell',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const cell = canvas.getByRole('columnheader');

//     await expect(cell).toBeInTheDocument();
//     await expect(cell).toHaveTextContent('Header Cell');
//   },
// };

// export const CenteredCell: Story = {
//   args: {
//     align: 'center',
//     children: 'Centered Content',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const cell = canvas.getByRole('cell');

//     await expect(cell).toBeInTheDocument();
//     await expect(cell).toHaveTextContent('Centered Content');
//   },
// };

// export const RightAlignedCell: Story = {
//   args: {
//     align: 'right',
//     children: '$123.45',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const cell = canvas.getByRole('cell');

//     await expect(cell).toBeInTheDocument();
//     await expect(cell).toHaveTextContent('$123.45');
//   },
// };
