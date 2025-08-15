import React from "react";
import { render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";

describe("TableRow component", () => {
  test("renders table row with content", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Row Content</td>
          </TableRow>
        </tbody>
      </table>,
    );

    expect(screen.getByText(/row content/i)).toBeVisible();
  });

  // test('applies disabled styles when disabled', () => {
  //   render(
  //     <table>
  //       <tbody>
  //         <TableRow disabled>
  //           <td>Disabled Row</td>
  //         </TableRow>
  //       </tbody>
  //     </table>
  //   );

  //   const row = screen.getByText(/disabled row/i).closest('tr');
  //   expect(row).toHaveStyle('opacity: 0.6');
  //   expect(row).toHaveStyle('cursor: not-allowed');
  //   expect(row).toHaveStyle('color: #6c757d');
  // });

  test("changes background color when disabled", () => {
    render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Disabled Row</td>
          </TableRow>
        </tbody>
      </table>,
    );

    const row = screen.getByText(/disabled row/i).closest("tr");
    expect(row).toHaveStyle("background-color: #f8f9fa");
  });

  test("applies custom background color", () => {
    render(
      <table>
        <tbody>
          <TableRow backgroundColor="#ff0000">
            <td>Custom Row</td>
          </TableRow>
        </tbody>
      </table>,
    );

    const row = screen.getByText(/custom row/i).closest("tr");
    expect(row).toHaveStyle("background-color: #ff0000");
  });

  // test('applies variant styles', () => {
  //   render(
  //     <table>
  //       <tbody>
  //         <TableRow variant="primary">
  //           <td>Primary Row</td>
  //         </TableRow>
  //       </tbody>
  //     </table>
  //   );

  //   const row = screen.getByText(/primary row/i).closest('tr');
  //   expect(row).toHaveStyle('background-color: #b3d7ff');
  // });

  // test('handles click events when not disabled', () => {
  //   const handleClick = jest.fn();
  //   render(
  //     <table>
  //       <tbody>
  //         <TableRow onClick={handleClick}>
  //           <td>Clickable Row</td>
  //         </TableRow>
  //       </tbody>
  //     </table>
  //   );

  //   const row = screen.getByText(/clickable row/i).closest('tr');
  //   fireEvent.click(row!);
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });

  // test('does not handle click events when disabled', () => {
  //   const handleClick = jest.fn();
  //   render(
  //     <table>
  //       <tbody>
  //         <TableRow disabled onClick={handleClick}>
  //           <td>Disabled Clickable Row</td>
  //         </TableRow>
  //       </tbody>
  //     </table>
  //   );

  //   const row = screen.getByText(/disabled clickable row/i).closest('tr');
  //   fireEvent.click(row!);
  //   expect(handleClick).not.toHaveBeenCalled();
  // });
});
