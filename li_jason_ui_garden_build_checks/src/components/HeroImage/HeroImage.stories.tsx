import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    src: {
      control: "text",
      description: "Hero image source URL",
    },
    alt: {
      control: "text",
      description: "Alternative text for the hero image",
    },
    title: {
      control: "text",
      description: "Hero title text",
    },
    subtitle: {
      control: "text",
      description: "Hero subtitle text",
    },
    height: {
      control: "text",
      description: "Hero image height",
    },
    overlay: {
      control: "boolean",
      description: "Show overlay on the image",
    },
    overlayColor: {
      control: "color",
      description: "Overlay color",
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Overlay opacity",
    },
    disabled: {
      control: "boolean",
      description: "Disable the hero image",
    },
    textAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment",
    },
    textColor: {
      control: "color",
      description: "Text color",
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
    src: "https://via.placeholder.com/1200x400/0066cc/ffffff?text=Hero+Image",
    alt: "Hero image",
    title: "Welcome to Our Website",
    subtitle: "Discover amazing features and services",
    height: "400px",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heroImage = canvas.getByRole("img");
    const title = canvas.getByText("Welcome to Our Website");
    const subtitle = canvas.getByText("Discover amazing features and services");

    await expect(heroImage).toBeInTheDocument();
    await expect(title).toBeInTheDocument();
    await expect(subtitle).toBeInTheDocument();
  },
};

// export const WithCustomOverlay: Story = {
//   args: {
//     src: 'https://via.placeholder.com/1200x400/ff6b6b/ffffff?text=Custom+Overlay',
//     alt: 'Hero with custom overlay',
//     title: 'Custom Overlay',
//     subtitle: 'This hero has a custom blue overlay',
//     overlayColor: 'rgba(0, 100, 200, 0.6)',
//     overlayOpacity: 0.6,
//     height: '500px',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const heroImage = canvas.getByRole('img');
//     const title = canvas.getByText('Custom Overlay');

//     await expect(heroImage).toBeInTheDocument();
//     await expect(title).toBeInTheDocument();
//   },
// };

// export const NoOverlay: Story = {
//   args: {
//     src: 'https://via.placeholder.com/1200x300/4ecdc4/ffffff?text=No+Overlay',
//     alt: 'Hero without overlay',
//     title: 'Clean and Simple',
//     subtitle: 'No overlay for better image visibility',
//     overlay: false,
//     textColor: '#333',
//     height: '300px',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const heroImage = canvas.getByRole('img');
//     const title = canvas.getByText('Clean and Simple');

//     await expect(heroImage).toBeInTheDocument();
//     await expect(title).toBeInTheDocument();
//   },
// };

// export const LeftAligned: Story = {
//   args: {
//     src: 'https://via.placeholder.com/1200x400/45b7d1/ffffff?text=Left+Aligned',
//     alt: 'Left aligned hero',
//     title: 'Left Aligned Content',
//     subtitle: 'Text content aligned to the left side',
//     textAlign: 'left',
//     height: '400px',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const heroImage = canvas.getByRole('img');
//     const title = canvas.getByText('Left Aligned Content');

//     await expect(heroImage).toBeInTheDocument();
//     await expect(title).toBeInTheDocument();
//   },
// };

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/1200x400/999999/ffffff?text=Disabled+Hero",
    alt: "Disabled hero image",
    title: "Disabled State",
    subtitle: "This hero image is disabled",
    disabled: true,
    height: "400px",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heroImage = canvas.getByRole("img");
    const title = canvas.getByText("Disabled State");

    await expect(heroImage).toBeInTheDocument();
    await expect(title).toBeInTheDocument();
  },
};

// export const Clickable: Story = {
//   args: {
//     src: 'https://via.placeholder.com/1200x400/96ceb4/ffffff?text=Clickable+Hero',
//     alt: 'Clickable hero image',
//     title: 'Interactive Hero',
//     subtitle: 'Click anywhere on this hero image',
//     onClick: () => {},
//     height: '400px',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const heroImage = canvas.getByRole('img');
//     const title = canvas.getByText('Interactive Hero');

//     await expect(heroImage).toBeInTheDocument();
//     await expect(title).toBeInTheDocument();

//     // Test clicking on the hero image
//     await userEvent.click(heroImage);
//   },
// };

// export const TallHero: Story = {
//   args: {
//     src: 'https://via.placeholder.com/1200x600/feca57/ffffff?text=Tall+Hero',
//     alt: 'Tall hero image',
//     title: 'Tall Hero Section',
//     subtitle: 'This hero takes up more vertical space',
//     height: '600px',
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const heroImage = canvas.getByRole('img');
//     const title = canvas.getByText('Tall Hero Section');

//     await expect(heroImage).toBeInTheDocument();
//     await expect(title).toBeInTheDocument();
//   },
// };
