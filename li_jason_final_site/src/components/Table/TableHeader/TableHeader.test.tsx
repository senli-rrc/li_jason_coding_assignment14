import React from "react";
import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

describe("TableHeader component", () => {
  test("renders table header with content", () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Header Content</th>
          </tr>
        </TableHeader>
      </table>,
    );

    expect(screen.getByText(/header content/i)).toBeVisible();
  });

  // test('applies disabled styles when disabled', () => {
  //   render(
  //     <table>
  //       <TableHeader disabled>
  //         <tr>
  //           <th>Disabled Header</th>
  //         </tr>
  //       </TableHeader>
  //     </table>
  //   );

  //   const header = screen.getByText(/disabled header/i).closest('thead');
  //   expect(header).toHaveStyle('opacity: 0.6');
  //   expect(header).toHaveStyle('cursor: not-allowed');
  // });

  test("changes background color when disabled", () => {
    render(
      <table>
        <TableHeader disabled>
          <tr>
            <th>Disabled Header</th>
          </tr>
        </TableHeader>
      </table>,
    );

    const header = screen.getByText(/disabled header/i).closest("thead");
    expect(header).toHaveStyle("background-color: #6c757d");
  });

  // test('applies custom background color', () => {
  //   render(
  //     <table>
  //       <TableHeader backgroundColor="#ff0000">
  //         <tr>
  //           <th>Custom Header</th>
  //         </tr>
  //       </TableHeader>
  //     </table>
  //   );

  //   const header = screen.getByText(/custom header/i).closest('thead');
  //   expect(header).toHaveStyle('background-color: #ff0000');
  // });

  // test('applies custom text color', () => {
  //   render(
  //     <table>
  //       <TableHeader color="#00ff00">
  //         <tr>
  //           <th>Colored Header</th>
  //         </tr>
  //       </TableHeader>
  //     </table>
  //   );

  //   const header = screen.getByText(/colored header/i).closest('thead');
  //   expect(header).toHaveStyle('color: #00ff00');
  // });
});
