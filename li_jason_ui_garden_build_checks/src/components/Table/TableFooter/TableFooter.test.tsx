import React from "react";
import { render, screen } from "@testing-library/react";
import { TableFooter } from "./TableFooter";

describe("TableFooter component", () => {
  test("renders table footer with content", () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Footer Content</td>
          </tr>
        </TableFooter>
      </table>,
    );

    expect(screen.getByText(/footer content/i)).toBeVisible();
  });

  // test('applies disabled styles when disabled', () => {
  //   render(
  //     <table>
  //       <TableFooter disabled>
  //         <tr>
  //           <td>Disabled Footer</td>
  //         </tr>
  //       </TableFooter>
  //     </table>
  //   );

  //   const footer = screen.getByText(/disabled footer/i).closest('tfoot');
  //   expect(footer).toHaveStyle('opacity: 0.6');
  //   expect(footer).toHaveStyle('cursor: not-allowed');
  // });

  test("changes background color when disabled", () => {
    render(
      <table>
        <TableFooter disabled>
          <tr>
            <td>Disabled Footer</td>
          </tr>
        </TableFooter>
      </table>,
    );

    const footer = screen.getByText(/disabled footer/i).closest("tfoot");
    expect(footer).toHaveStyle("background-color: #6c757d");
  });

  // test('applies custom background color', () => {
  //   render(
  //     <table>
  //       <TableFooter backgroundColor="#ff0000">
  //         <tr>
  //           <td>Custom Footer</td>
  //         </tr>
  //       </TableFooter>
  //     </table>
  //   );

  //   const footer = screen.getByText(/custom footer/i).closest('tfoot');
  //   expect(footer).toHaveStyle('background-color: #ff0000');
  // });

  // test('applies custom text color', () => {
  //   render(
  //     <table>
  //       <TableFooter color="#00ff00">
  //         <tr>
  //           <td>Colored Footer</td>
  //         </tr>
  //       </TableFooter>
  //     </table>
  //   );

  //   const footer = screen.getByText(/colored footer/i).closest('tfoot');
  //   expect(footer).toHaveStyle('color: #00ff00');
  // });
});
