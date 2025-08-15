import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { TableRow } from "./TableRow";

const meta: Meta<typeof TableRow> = {
  title: "Components/TableRow",
  component: TableRow,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
      description: "Row variant style",
    },
    backgroundColor: {
      control: "color",
      description: "Background color of the row",
    },
    disabled: {
      control: "boolean",
      description: "Disable the row",
    },
    hover: {
      control: "boolean",
      description: "Enable hover effects",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
  },
  decorators: [
    (Story) => (
      <table
        style={{ borderCollapse: "collapse", border: "1px solid #dee2e6" }}
      >
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          John Doe
        </td>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          john@example.com
        </td>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Developer
        </td>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByRole("row");

    await expect(row).toBeVisible();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Disabled User
        </td>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          disabled@example.com
        </td>
        <td style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}>
          Inactive
        </td>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByRole("row");
    const cells = canvas.getAllByRole("cell");

    await expect(row).toBeInTheDocument();
    await expect(cells).toHaveLength(3);
    await expect(canvas.getByText("Disabled User")).toBeInTheDocument();
    await expect(canvas.getByText("disabled@example.com")).toBeInTheDocument();
    await expect(canvas.getByText("Inactive")).toBeInTheDocument();
  },
};

// export const Primary: Story = {
//   args: {
//     variant: 'primary',
//     children: (
//       <>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>Primary Row</td>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>primary@example.com</td>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>Admin</td>
//       </>
//     ),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const row = canvas.getByRole('row');

//     await expect(row).toBeInTheDocument();
//     await expect(canvas.getByText('Primary Row')).toBeInTheDocument();
//   },
// };

// export const Success: Story = {
//   args: {
//     variant: 'success',
//     children: (
//       <>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>Success Row</td>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>success@example.com</td>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>Active</td>
//       </>
//     ),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const row = canvas.getByRole('row');

//     await expect(row).toBeInTheDocument();
//     await expect(canvas.getByText('Success Row')).toBeInTheDocument();
//   },
// };

// export const Danger: Story = {
//   args: {
//     variant: 'danger',
//     children: (
//       <>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>Danger Row</td>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>danger@example.com</td>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>Error</td>
//       </>
//     ),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const row = canvas.getByRole('row');

//     await expect(row).toBeInTheDocument();
//     await expect(canvas.getByText('Danger Row')).toBeInTheDocument();
//   },
// };

// export const Clickable: Story = {
//   args: {
//     hover: true,
//     onClick: () => {},
//     children: (
//       <>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>Clickable Row</td>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>click@example.com</td>
//         <td style={{ padding: '0.5rem', border: '1px solid #dee2e6' }}>Interactive</td>
//       </>
//     ),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const row = canvas.getByRole('row');

//     await expect(row).toBeInTheDocument();
//     await expect(canvas.getByText('Clickable Row')).toBeInTheDocument();

//     // Test clicking on the row
//     await userEvent.click(row);
//   },
// };
