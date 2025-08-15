import React from "react";
import { render, screen } from "@testing-library/react";
import { Table, TableHeader, TableRow, TableCell } from "./Table";

describe("Table component", () => {
  test("renders table with content", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell as="th">Header</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell content</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );

    expect(screen.getByText(/header/i)).toBeVisible();
    expect(screen.getByText(/cell content/i)).toBeVisible();
  });

  // test('applies disabled styles when disabled', () => {
  //   render(
  //     <Table disabled>
  //       <tbody>
  //         <TableRow>
  //           <TableCell>Disabled table</TableCell>
  //         </TableRow>
  //       </tbody>
  //     </Table>
  //   );

  //   const table = screen.getByRole('table');
  //   expect(table).toHaveStyle('opacity: 0.6');
  //   expect(table).toHaveStyle('pointer-events: none');
  //   expect(table).toHaveStyle('cursor: not-allowed');
  // });

  test("changes background color when disabled", () => {
    render(
      <Table disabled>
        <tbody>
          <TableRow>
            <TableCell>Disabled table</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );

    const table = screen.getByRole("table");
    expect(table).toHaveStyle("background-color: #f8f9fa");
  });

  //   test('applies custom background color', () => {
  //     render(
  //       <Table backgroundColor="#ff0000">
  //         <tbody>
  //           <TableRow>
  //             <TableCell>Custom table</TableCell>
  //           </TableRow>
  //         </tbody>
  //       </Table>
  //     );

  //     const table = screen.getByRole('table');
  //     expect(table).toHaveStyle('background-color: #ff0000');
  //   });

  //   test('renders table row with variant styles', () => {
  //     render(
  //       <Table>
  //         <tbody>
  //           <TableRow variant="primary">
  //             <TableCell>Primary row</TableCell>
  //           </TableRow>
  //         </tbody>
  //       </Table>
  //     );

  //     const row = screen.getByText(/primary row/i).closest('tr');
  //     expect(row).toHaveStyle('background-color: #b3d7ff');
  //   });

  //   test('disables table row when disabled', () => {
  //     render(
  //       <Table>
  //         <tbody>
  //           <TableRow disabled>
  //             <TableCell>Disabled row</TableCell>
  //           </TableRow>
  //         </tbody>
  //       </Table>
  //     );

  //     const row = screen.getByText(/disabled row/i).closest('tr');
  //     expect(row).toHaveStyle('opacity: 0.6');
  //     expect(row).toHaveStyle('color: #6c757d');
  //   });
});
