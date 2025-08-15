import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    backgroundColor: {
      control: "color",
      description: "Background color of the table",
    },
    borderColor: {
      control: "color",
      description: "Border color of the table",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "striped", "bordered", "hover"],
      description: "Table variant style",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Table size",
    },
    disabled: {
      control: "boolean",
      description: "Disable the table",
    },
    responsive: {
      control: "boolean",
      description: "Make table responsive",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
          <TableCell as="th">Status</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Designer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Manager</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>3 users</TableCell>
          <TableCell>-</TableCell>
          <TableCell>2 active</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table");
    const headers = canvas.getAllByRole("columnheader");
    const cells = canvas.getAllByRole("cell");

    await expect(table).toBeInTheDocument();
    await expect(headers).toHaveLength(4);
    await expect(cells.length).toBeGreaterThan(0);

    // Check specific content
    await expect(canvas.getByText("John Doe")).toBeInTheDocument();
    await expect(canvas.getByText("jane@example.com")).toBeInTheDocument();
  },
};

// export const Striped: Story = {
//   args: {
//     variant: 'striped',
//   },
//   render: (args) => (
//     <Table {...args}>
//       <TableHeader>
//         <TableRow>
//           <TableCell as="th">Name</TableCell>
//           <TableCell as="th">Email</TableCell>
//           <TableCell as="th">Role</TableCell>
//           <TableCell as="th">Status</TableCell>
//         </TableRow>
//       </TableHeader>
//       <tbody>
//         <TableRow>
//           <TableCell>John Doe</TableCell>
//           <TableCell>john@example.com</TableCell>
//           <TableCell>Developer</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>Jane Smith</TableCell>
//           <TableCell>jane@example.com</TableCell>
//           <TableCell>Designer</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>Bob Johnson</TableCell>
//           <TableCell>bob@example.com</TableCell>
//           <TableCell>Manager</TableCell>
//           <TableCell>Inactive</TableCell>
//         </TableRow>
//       </tbody>
//     </Table>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const table = canvas.getByRole('table');
//     await expect(table).toBeInTheDocument();
//     await expect(canvas.getByText('John Doe')).toBeInTheDocument();
//   },
// };

// export const Bordered: Story = {
//   args: {
//     variant: 'bordered',
//   },
//   render: (args) => (
//     <Table {...args}>
//       <TableHeader>
//         <TableRow>
//           <TableCell as="th">Name</TableCell>
//           <TableCell as="th">Email</TableCell>
//           <TableCell as="th">Role</TableCell>
//           <TableCell as="th">Status</TableCell>
//         </TableRow>
//       </TableHeader>
//       <tbody>
//         <TableRow>
//           <TableCell>John Doe</TableCell>
//           <TableCell>john@example.com</TableCell>
//           <TableCell>Developer</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>Jane Smith</TableCell>
//           <TableCell>jane@example.com</TableCell>
//           <TableCell>Designer</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//       </tbody>
//     </Table>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const table = canvas.getByRole('table');
//     await expect(table).toBeInTheDocument();
//     await expect(canvas.getByText('Jane Smith')).toBeInTheDocument();
//   },
// };

// export const Hover: Story = {
//   args: {
//     variant: 'hover',
//   },
//   render: (args) => (
//     <Table {...args}>
//       <TableHeader>
//         <TableRow>
//           <TableCell as="th">Name</TableCell>
//           <TableCell as="th">Email</TableCell>
//           <TableCell as="th">Role</TableCell>
//           <TableCell as="th">Status</TableCell>
//         </TableRow>
//       </TableHeader>
//       <tbody>
//         <TableRow>
//           <TableCell>John Doe</TableCell>
//           <TableCell>john@example.com</TableCell>
//           <TableCell>Developer</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>Jane Smith</TableCell>
//           <TableCell>jane@example.com</TableCell>
//           <TableCell>Designer</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//       </tbody>
//     </Table>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const table = canvas.getByRole('table');
//     const firstRow = canvas.getAllByRole('row')[1]; // Skip header row

//     await expect(table).toBeInTheDocument();

//     // Test hover functionality
//     if (firstRow) {
//       await userEvent.hover(firstRow);
//     }
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'sm',
//   },
//   render: (args) => (
//     <Table {...args}>
//       <TableHeader>
//         <TableRow>
//           <TableCell as="th">Name</TableCell>
//           <TableCell as="th">Email</TableCell>
//           <TableCell as="th">Role</TableCell>
//         </TableRow>
//       </TableHeader>
//       <tbody>
//         <TableRow>
//           <TableCell>John Doe</TableCell>
//           <TableCell>john@example.com</TableCell>
//           <TableCell>Developer</TableCell>
//         </TableRow>
//       </tbody>
//     </Table>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const table = canvas.getByRole('table');
//     await expect(table).toBeInTheDocument();
//     await expect(canvas.getByText('John Doe')).toBeInTheDocument();
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'lg',
//   },
//   render: (args) => (
//     <Table {...args}>
//       <TableHeader>
//         <TableRow>
//           <TableCell as="th">Name</TableCell>
//           <TableCell as="th">Email</TableCell>
//           <TableCell as="th">Role</TableCell>
//         </TableRow>
//       </TableHeader>
//       <tbody>
//         <TableRow>
//           <TableCell>John Doe</TableCell>
//           <TableCell>john@example.com</TableCell>
//           <TableCell>Developer</TableCell>
//         </TableRow>
//       </tbody>
//     </Table>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const table = canvas.getByRole('table');
//     await expect(table).toBeInTheDocument();
//     await expect(canvas.getByText('John Doe')).toBeInTheDocument();
//   },
// };

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell as="th">Name</TableCell>
          <TableCell as="th">Email</TableCell>
          <TableCell as="th">Role</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Developer</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole("table");
    await expect(table).toBeInTheDocument();
    await expect(canvas.getByText("John Doe")).toBeInTheDocument();
  },
};

// export const Responsive: Story = {
//   args: {
//     responsive: true,
//     variant: 'bordered',
//   },
//   render: (args) => (
//     <Table {...args}>
//       <TableHeader>
//         <TableRow>
//           <TableCell as="th">Name</TableCell>
//           <TableCell as="th">Email</TableCell>
//           <TableCell as="th">Role</TableCell>
//           <TableCell as="th">Status</TableCell>
//         </TableRow>
//       </TableHeader>
//       <tbody>
//         <TableRow>
//           <TableCell>John Doe</TableCell>
//           <TableCell>john@example.com</TableCell>
//           <TableCell>Developer</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell>Jane Smith</TableCell>
//           <TableCell>jane@example.com</TableCell>
//           <TableCell>Designer</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//       </tbody>
//     </Table>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const table = canvas.getByRole('table');
//     await expect(table).toBeInTheDocument();
//     await expect(canvas.getByText('Jane Smith')).toBeInTheDocument();
//   },
// };

// export const RowVariants: Story = {
//   args: {
//     variant: 'bordered',
//   },
//   render: (args) => (
//     <Table {...args}>
//       <TableHeader>
//         <TableRow>
//           <TableCell as="th">Variant</TableCell>
//           <TableCell as="th">Description</TableCell>
//           <TableCell as="th">Status</TableCell>
//         </TableRow>
//       </TableHeader>
//       <tbody>
//         <TableRow variant="primary">
//           <TableCell>Primary</TableCell>
//           <TableCell>Primary row variant</TableCell>
//           <TableCell>Active</TableCell>
//         </TableRow>
//         <TableRow variant="success">
//           <TableCell>Success</TableCell>
//           <TableCell>Success row variant</TableCell>
//           <TableCell>Completed</TableCell>
//         </TableRow>
//         <TableRow variant="warning">
//           <TableCell>Warning</TableCell>
//           <TableCell>Warning row variant</TableCell>
//           <TableCell>Pending</TableCell>
//         </TableRow>
//         <TableRow variant="danger">
//           <TableCell>Danger</TableCell>
//           <TableCell>Danger row variant</TableCell>
//           <TableCell>Error</TableCell>
//         </TableRow>
//         <TableRow disabled>
//           <TableCell>Disabled</TableCell>
//           <TableCell>Disabled row</TableCell>
//           <TableCell>Inactive</TableCell>
//         </TableRow>
//       </tbody>
//     </Table>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const table = canvas.getByRole('table');
//     await expect(table).toBeInTheDocument();
//     await expect(canvas.getByText('Primary')).toBeInTheDocument();
//     await expect(canvas.getByText('Success')).toBeInTheDocument();
//     await expect(canvas.getByText('Warning')).toBeInTheDocument();
//     await expect(canvas.getByText('Danger')).toBeInTheDocument();
//   },
// };
