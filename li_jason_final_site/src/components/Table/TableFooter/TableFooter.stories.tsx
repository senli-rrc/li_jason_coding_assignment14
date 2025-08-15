import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { TableFooter } from "./TableFooter";

const meta: Meta<typeof TableFooter> = {
  title: "Components/TableFooter",
  component: TableFooter,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "Background color of the table footer",
    },
    color: {
      control: "color",
      description: "Text color of the table footer",
    },
    disabled: {
      control: "boolean",
      description: "Disable the table footer",
    },
  },
  decorators: [
    (Story) => (
      <table
        style={{ borderCollapse: "collapse", border: "1px solid #dee2e6" }}
      >
        <Story />
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <tr>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Total
        </td>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          3 items
        </td>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Summary
        </td>
      </tr>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableFooter = canvasElement.querySelector("tfoot");
    const footerCells = canvas.getAllByRole("cell");

    await expect(tableFooter).toBeInTheDocument();
    await expect(footerCells).toHaveLength(3);
    await expect(canvas.getByText("Total")).toBeInTheDocument();
    await expect(canvas.getByText("3 items")).toBeInTheDocument();
    await expect(canvas.getByText("Summary")).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <tr>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Disabled
        </td>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Footer
        </td>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Content
        </td>
      </tr>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableFooter = canvasElement.querySelector("tfoot");
    const footerCells = canvas.getAllByRole("cell");

    await expect(tableFooter).toBeInTheDocument();
    await expect(footerCells).toHaveLength(3);
    await expect(canvas.getByText("Disabled")).toBeInTheDocument();
    await expect(canvas.getByText("Footer")).toBeInTheDocument();
    await expect(canvas.getByText("Content")).toBeInTheDocument();
  },
};
