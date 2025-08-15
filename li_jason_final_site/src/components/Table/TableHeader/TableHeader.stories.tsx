import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { TableHeader } from "./TableHeader";

const meta: Meta<typeof TableHeader> = {
  title: "Components/TableHeader",
  component: TableHeader,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "Background color of the table header",
    },
    color: {
      control: "color",
      description: "Text color of the table header",
    },
    disabled: {
      control: "boolean",
      description: "Disable the table header",
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
        <th style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>Name</th>
        <th style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Email
        </th>
        <th style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>Role</th>
      </tr>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableHeader = canvasElement.querySelector("thead");
    const headerCells = canvas.getAllByRole("columnheader");

    await expect(tableHeader).toBeInTheDocument();
    await expect(headerCells).toHaveLength(3);
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
    await expect(canvas.getByText("Role")).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <tr>
        <th style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>Name</th>
        <th style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Email
        </th>
        <th style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>Role</th>
      </tr>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tableHeader = canvasElement.querySelector("thead");
    const headerCells = canvas.getAllByRole("columnheader");

    await expect(tableHeader).toBeInTheDocument();
    await expect(headerCells).toHaveLength(3);
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
    await expect(canvas.getByText("Role")).toBeInTheDocument();
  },
};
