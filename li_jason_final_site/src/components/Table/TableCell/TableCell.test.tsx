import React from "react";
import { render, screen } from "@testing-library/react";
import { TableCell } from "./TableCell";

describe("TableCell component", () => {
  test("renders table cell with content", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell Content</TableCell>
          </tr>
        </tbody>
      </table>,
    );

    expect(screen.getByText(/cell content/i)).toBeVisible();
  });

  // test('applies disabled styles when disabled', () => {
  //   render(
  //     <table>
  //       <tbody>
  //         <tr>
  //           <TableCell disabled>Disabled Cell</TableCell>
  //         </tr>
  //       </tbody>
  //     </table>
  //   );

  //   const cell = screen.getByText(/disabled cell/i);
  //   expect(cell).toHaveStyle('opacity: 0.6');
  //   expect(cell).toHaveStyle('cursor: not-allowed');
  //   expect(cell).toHaveStyle('color: #6c757d');
  // });

  test("changes background color when disabled", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Disabled Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );

    const cell = screen.getByText(/disabled cell/i);
    expect(cell).toHaveStyle("background-color: #f8f9fa");
  });

  //   test('applies custom background color', () => {
  //     render(
  //       <table>
  //         <tbody>
  //           <tr>
  //             <TableCell backgroundColor="#ff0000">Custom Cell</TableCell>
  //           </tr>
  //         </tbody>
  //       </table>
  //     );

  //     const cell = screen.getByText(/custom cell/i);
  //     expect(cell).toHaveStyle('background-color: #ff0000');
  //   });

  //   test('applies custom text color', () => {
  //     render(
  //       <table>
  //         <tbody>
  //           <tr>
  //             <TableCell color="#00ff00">Colored Cell</TableCell>
  //           </tr>
  //         </tbody>
  //       </table>
  //     );

  //     const cell = screen.getByText(/colored cell/i);
  //     expect(cell).toHaveStyle('color: #00ff00');
  //   });

  //   test('renders as th when as prop is set to th', () => {
  //     render(
  //       <table>
  //         <thead>
  //           <tr>
  //             <TableCell as="th">Header Cell</TableCell>
  //           </tr>
  //         </thead>
  //       </table>
  //     );

  //     const cell = screen.getByRole('columnheader');
  //     expect(cell).toBeInTheDocument();
  //     expect(cell).toHaveTextContent('Header Cell');
  //   });

  //   test('applies text alignment', () => {
  //     render(
  //       <table>
  //         <tbody>
  //           <tr>
  //             <TableCell align="center">Centered Cell</TableCell>
  //           </tr>
  //         </tbody>
  //       </table>
  //     );

  //     const cell = screen.getByText(/centered cell/i);
  //     expect(cell).toHaveStyle('text-align: center');
  //   });

  //   test('applies custom width', () => {
  //     render(
  //       <table>
  //         <tbody>
  //           <tr>
  //             <TableCell width="200px">Wide Cell</TableCell>
  //           </tr>
  //         </tbody>
  //       </table>
  //     );

  //     const cell = screen.getByText(/wide cell/i);
  //     expect(cell).toHaveStyle('width: 200px');
  //   });
});
