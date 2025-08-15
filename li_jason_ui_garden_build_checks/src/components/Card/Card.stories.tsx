import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Card title",
    },
    subtitle: {
      control: "text",
      description: "Card subtitle",
    },
    content: {
      control: "text",
      description: "Card content text",
    },
    imageSrc: {
      control: "text",
      description: "Card image source URL",
    },
    imageAlt: {
      control: "text",
      description: "Card image alt text",
    },
    disabled: {
      control: "boolean",
      description: "Disable the card",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "elevated"],
      description: "Card variant style",
    },
    padding: {
      control: "text",
      description: "Card padding",
    },
    borderRadius: {
      control: "text",
      description: "Card border radius",
    },
    backgroundColor: {
      control: "color",
      description: "Card background color",
    },
    textColor: {
      control: "color",
      description: "Card text color",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Card",
    subtitle: "This is a subtitle",
    content:
      "This is the card content. It can contain any text or information you want to display.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("Default Card");
    const subtitle = canvas.getByText("This is a subtitle");
    const content = canvas.getByText(
      "This is the card content. It can contain any text or information you want to display.",
    );

    await expect(title).toBeInTheDocument();
    await expect(subtitle).toBeInTheDocument();
    await expect(content).toBeInTheDocument();
  },
};

// export const WithImage: Story = {
//   args: {
//     title: 'Card with Image',
//     subtitle: 'Beautiful imagery',
//     content: 'This card includes an image at the top, making it more visually appealing.',
//     imageSrc: 'https://via.placeholder.com/400x200/0066cc/ffffff?text=Card+Image',
//     imageAlt: 'Card example image',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const title = canvas.getByText('Card with Image');
//     const image = canvas.getByRole('img');

//     await expect(title).toBeInTheDocument();
//     await expect(image).toBeInTheDocument();
//     await expect(image).toHaveAttribute('src', 'https://via.placeholder.com/400x200/0066cc/ffffff?text=Card+Image');
//     await expect(image).toHaveAttribute('alt', 'Card example image');
//   },
// };

// export const Outlined: Story = {
//   args: {
//     title: 'Outlined Card',
//     subtitle: 'Clean border style',
//     content: 'This card uses the outlined variant with a clean border.',
//     variant: 'outlined',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const title = canvas.getByText('Outlined Card');
//     const card = title.closest('div');

//     await expect(title).toBeInTheDocument();
//     await expect(card).toHaveStyle('border: 1px solid #e0e0e0');
//   },
// };

// export const Elevated: Story = {
//   args: {
//     title: 'Elevated Card',
//     subtitle: 'Enhanced shadow',
//     content: 'This card uses the elevated variant with enhanced shadows for depth.',
//     variant: 'elevated',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const title = canvas.getByText('Elevated Card');
//     const card = title.closest('div');

//     await expect(title).toBeInTheDocument();
//     await expect(card).toHaveStyle('border: none');
//   },
// };

export const Disabled: Story = {
  args: {
    title: "Disabled Card",
    subtitle: "Non-interactive state",
    content: "This card is in a disabled state and cannot be interacted with.",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText("Disabled Card");
    const card = title.closest("div");

    await expect(title).toBeInTheDocument();
    await expect(card).toHaveStyle("opacity: 0.6");
    await expect(card).toHaveStyle("cursor: not-allowed");
  },
};

// export const Clickable: Story = {
//   args: {
//     title: 'Clickable Card',
//     subtitle: 'Interactive card',
//     content: 'Click anywhere on this card to trigger an action.',
//     onClick: () => alert('Card clicked!'),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const title = canvas.getByText('Clickable Card');
//     const card = title.closest('div');

//     await expect(title).toBeInTheDocument();
//     await expect(card).toHaveStyle('cursor: pointer');
//   },
// };

// export const CustomStyling: Story = {
//   args: {
//     title: 'Custom Styled Card',
//     subtitle: 'With custom colors',
//     content: 'This card demonstrates custom background and text colors.',
//     backgroundColor: '#f8f9fa',
//     textColor: '#495057',
//     borderRadius: '12px',
//     padding: '1.5rem',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const title = canvas.getByText('Custom Styled Card');
//     const card = title.closest('div');

//     await expect(title).toBeInTheDocument();
//     await expect(card).toHaveStyle('background-color: #f8f9fa');
//     await expect(card).toHaveStyle('color: #495057');
//     await expect(card).toHaveStyle('border-radius: 12px');
//   },
// };

// export const WithFooter: Story = {
//   args: {
//     title: 'Card with Footer',
//     subtitle: 'Additional actions',
//     content: 'This card includes a footer section with action buttons.',
//     footer: (
//       <div style={{ display: 'flex', gap: '0.5rem' }}>
//         <button style={{ padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer' }}>
//           Cancel
//         </button>
//         <button style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
//           Confirm
//         </button>
//       </div>
//     ),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const title = canvas.getByText('Card with Footer');
//     const cancelButton = canvas.getByText('Cancel');
//     const confirmButton = canvas.getByText('Confirm');

//     await expect(title).toBeInTheDocument();
//     await expect(cancelButton).toBeInTheDocument();
//     await expect(confirmButton).toBeInTheDocument();
//   },
// };

// export const WithCustomContent: Story = {
//   args: {
//     title: 'Card with Custom Content',
//     subtitle: 'Rich content support',
//     children: (
//       <div>
//         <p>This card contains custom React elements instead of simple text.</p>
//         <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
//           <li>Feature one</li>
//           <li>Feature two</li>
//           <li>Feature three</li>
//         </ul>
//         <p><strong>Price:</strong> $29.99</p>
//       </div>
//     ),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const title = canvas.getByText('Card with Custom Content');
//     const customText = canvas.getByText('This card contains custom React elements instead of simple text.');
//     const price = canvas.getByText('Price:');

//     await expect(title).toBeInTheDocument();
//     await expect(customText).toBeInTheDocument();
//     await expect(price).toBeInTheDocument();
//   },
// };
