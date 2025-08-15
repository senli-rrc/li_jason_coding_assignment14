import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL",
    },
    alt: {
      control: "text",
      description: "Alternative text for the image",
    },
    width: {
      control: "text",
      description: "Image width (px or percentage)",
    },
    height: {
      control: "text",
      description: "Image height (px or percentage)",
    },
    disabled: {
      control: "boolean",
      description: "Disable the image",
    },
    loading: {
      control: { type: "select" },
      options: ["lazy", "eager"],
      description: "Loading behavior",
    },
    objectFit: {
      control: { type: "select" },
      options: ["contain", "cover", "fill", "none", "scale-down"],
      description: "How the image should be resized",
    },
    borderRadius: {
      control: "text",
      description: "Border radius for the image",
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
    src: "https://via.placeholder.com/300x200/0066cc/ffffff?text=Sample+Image",
    alt: "Sample image",
    width: "300px",
    height: "200px",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole("img");

    await expect(image).toBeInTheDocument();
    await expect(image).toHaveAttribute(
      "src",
      "https://via.placeholder.com/300x200/0066cc/ffffff?text=Sample+Image",
    );
    await expect(image).toHaveAttribute("alt", "Sample image");
  },
};

// export const Responsive: Story = {
//   args: {
//     src: 'https://via.placeholder.com/800x400/ff6b6b/ffffff?text=Responsive+Image',
//     alt: 'Responsive image',
//     width: '100%',
//     objectFit: 'cover',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const image = canvas.getByRole('img');

//     await expect(image).toBeInTheDocument();
//     await expect(image).toHaveAttribute('alt', 'Responsive image');
//   },
// };

// export const Rounded: Story = {
//   args: {
//     src: 'https://via.placeholder.com/200x200/4ecdc4/ffffff?text=Round',
//     alt: 'Rounded image',
//     width: '200px',
//     height: '200px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const image = canvas.getByRole('img');

//     await expect(image).toBeInTheDocument();
//     await expect(image).toHaveStyle('border-radius: 50%');
//   },
// };

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/300x200/999999/ffffff?text=Disabled+Image",
    alt: "Disabled image",
    width: "300px",
    height: "200px",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole("img");

    await expect(image).toBeInTheDocument();
    await expect(image).toHaveStyle("cursor: not-allowed");
    await expect(image).toHaveStyle("opacity: 0.6");
  },
};

// export const Clickable: Story = {
//   args: {
//     src: 'https://via.placeholder.com/300x200/45b7d1/ffffff?text=Click+Me',
//     alt: 'Clickable image',
//     width: '300px',
//     height: '200px',
//     onClick: () => alert('Image clicked!'),
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const image = canvas.getByRole('img');

//     await expect(image).toBeInTheDocument();
//     await expect(image).toHaveStyle('cursor: pointer');
//   },
// };

// export const ContainFit: Story = {
//   args: {
//     src: 'https://via.placeholder.com/400x200/96ceb4/ffffff?text=Contain+Fit',
//     alt: 'Image with contain fit',
//     width: '300px',
//     height: '300px',
//     objectFit: 'contain',
//     borderRadius: '8px',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const image = canvas.getByRole('img');

//     await expect(image).toBeInTheDocument();
//     await expect(image).toHaveStyle('border-radius: 8px');
//   },
// };
