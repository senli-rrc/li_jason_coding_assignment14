import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

// Import all the components we'll use for the portfolio
import { HeroImage } from "./HeroImage/HeroImage";
import { Card } from "./Card/Card";
import { Button } from "./Button/Button";
import { Text } from "./Text/Text";
import { Table, TableHeader, TableRow, TableCell } from "./Table/Table";

// Portfolio Layout Container
const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledText = styled(Text)`
  margin-bottom: 1.5rem;
`;

const StyledTextMd = styled(Text)`
  line-height: 1.8;
`;

const TagText = styled(Text)`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
  display: inline-block;
`;

const SkillBadge = styled(Text)`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
`;

const SpacedText = styled(Text)`
  margin-bottom: 1rem;
`;

const ContactText = styled(Text)`
  margin-bottom: 2rem;
`;

// Portfolio Component that combines all our UI components
const PortfolioStory = () => {
  // Sample data for projects
  const projects = [
    {
      title: "E-commerce Platform",
      subtitle: "React & Node.js",
      content:
        "A full-stack e-commerce solution with modern UI/UX, featuring product catalog, shopping cart, and payment integration.",
      imageSrc:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Weather Dashboard",
      subtitle: "TypeScript & APIs",
      content:
        "Interactive weather application with real-time data, forecasts, and location-based services using modern web APIs.",
      imageSrc:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      tags: ["TypeScript", "REST API", "Chart.js", "Responsive"],
    },
    {
      title: "Task Management App",
      subtitle: "React & Firebase",
      content:
        "Collaborative task management tool with real-time updates, user authentication, and team collaboration features.",
      imageSrc:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["React", "Firebase", "Real-time", "PWA"],
    },
  ];

  // Sample skills data
  const skills = [
    {
      category: "Frontend",
      technologies: "React, TypeScript, Vue.js, HTML5, CSS3",
      proficiency: "Expert",
    },
    {
      category: "Backend",
      technologies: "Node.js, Express, Python, REST APIs",
      proficiency: "Advanced",
    },
    {
      category: "Database",
      technologies: "MongoDB, PostgreSQL, Firebase",
      proficiency: "Intermediate",
    },
    {
      category: "Tools",
      technologies: "Git, Docker, AWS, Webpack, Vite",
      proficiency: "Advanced",
    },
    {
      category: "Design",
      technologies: "Figma, Adobe XD, Styled Components",
      proficiency: "Intermediate",
    },
  ];

  return (
    <PortfolioContainer>
      {/* Hero Section */}
      <HeroImage
        src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=600&fit=crop"
        alt="Portfolio Hero"
        title="Jason Li"
        subtitle="Full Stack Developer & UI/UX Enthusiast"
        height="600px"
        textAlign="center"
        textColor="white"
        overlayColor="rgba(0, 0, 0, 0.5)"
        overlayOpacity={0.6}
      >
        <ButtonGroup style={{ marginTop: "2rem" }}>
          <Button
            title="View My Work"
            backgroundColor="#3498db"
            onClick={() => console.log("Scrolling to projects")}
          />
          <Button
            title="Contact Me"
            backgroundColor="#e74c3c"
            onClick={() => console.log("Scrolling to contact")}
          />
        </ButtonGroup>
      </HeroImage>

      {/* About Section */}
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <StyledText size="lg" weight="medium" color="#2c3e50">
            Passionate full-stack developer with 3+ years of experience creating
            modern, responsive web applications and user-friendly interfaces.
          </StyledText>
          <StyledTextMd size="md" color="#555">
            I specialize in React, TypeScript, and Node.js, with a strong focus
            on creating accessible, performant applications. I love solving
            complex problems and turning ideas into beautiful, functional
            digital experiences.
          </StyledTextMd>
        </div>
      </Section>

      {/* Projects Section */}
      <Section>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              content={project.content}
              imageSrc={project.imageSrc}
              variant="elevated"
              onClick={() => console.log(`Clicked on ${project.title}`)}
              footer={
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <TagText
                      key={tagIndex}
                      size="xs"
                      backgroundColor="#e3f2fd"
                      color="#1976d2"
                    >
                      {tag}
                    </TagText>
                  ))}
                </div>
              }
            />
          ))}
        </ProjectsGrid>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Button
            title="View All Projects"
            backgroundColor="#8e44ad"
            onClick={() => console.log("Navigate to all projects")}
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsContainer>
          <Card variant="outlined" padding="2rem">
            <Table variant="hover" responsive size="md">
              <TableHeader>
                <TableRow>
                  <TableCell as="th" color="#2c3e50">
                    Category
                  </TableCell>
                  <TableCell as="th" color="#2c3e50">
                    Technologies
                  </TableCell>
                  <TableCell as="th" color="#2c3e50">
                    Proficiency
                  </TableCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {skills.map((skill, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Text weight="semibold" color="#34495e">
                        {skill.category}
                      </Text>
                    </TableCell>
                    <TableCell>
                      <Text size="sm" color="#555">
                        {skill.technologies}
                      </Text>
                    </TableCell>
                    <TableCell>
                      <SkillBadge
                        size="sm"
                        weight="medium"
                        backgroundColor={
                          skill.proficiency === "Expert"
                            ? "#27ae60"
                            : skill.proficiency === "Advanced"
                              ? "#3498db"
                              : "#f39c12"
                        }
                        color="white"
                      >
                        {skill.proficiency}
                      </SkillBadge>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </Card>
        </SkillsContainer>
      </Section>

      {/* Contact Section */}
      <Section>
        <ContactSection>
          <SpacedText size="2xl" weight="bold" color="white">
            Let's Work Together!
          </SpacedText>
          <ContactText size="lg" color="rgba(255, 255, 255, 0.9)">
            I'm always interested in new opportunities and exciting projects.
          </ContactText>
          <ButtonGroup>
            <Button
              title="Send Email"
              backgroundColor="rgba(255, 255, 255, 0.2)"
              onClick={() => console.log("Opening email client")}
            />
            <Button
              title="LinkedIn"
              backgroundColor="#0077b5"
              onClick={() => console.log("Opening LinkedIn")}
            />
            <Button
              title="GitHub"
              backgroundColor="#333"
              onClick={() => console.log("Opening GitHub")}
            />
          </ButtonGroup>
        </ContactSection>
      </Section>
    </PortfolioContainer>
  );
};

// Storybook Meta Configuration
const meta: Meta<typeof PortfolioStory> = {
  title: "Examples/Portfolio",
  component: PortfolioStory,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Portfolio Story

This is a comprehensive portfolio page that demonstrates how to combine multiple UI components from our library to create a complete, professional portfolio website.

## Components Used:
- **HeroImage**: For the header section with call-to-action buttons
- **Card**: For project showcases with elevated styling
- **Button**: For interactive elements and navigation
- **Text**: For various text content with different sizes and weights
- **Table**: For displaying technical skills in an organized format

## Features:
- 📱 Fully responsive design
- 🎨 Modern styling with gradients and shadows
- 🔗 Interactive elements with hover effects
- 📊 Structured skills presentation
- 🖼️ Project gallery with tags
- 📞 Contact section with social links

## Usage:
This story serves as a template for creating portfolio websites using our component library. You can customize colors, content, and layout while maintaining the responsive design and accessibility features built into each component.
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PortfolioStory>;

// Main Portfolio Story
export const CompletePortfolio: Story = {
  name: "Complete Portfolio",
  render: () => <PortfolioStory />,
};

// Responsive Portfolio Story
export const MobileView: Story = {
  name: "Mobile View",
  render: () => <PortfolioStory />,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Dark Theme Variation
export const DarkTheme: Story = {
  name: "Dark Theme Concept",
  render: () => (
    <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      <PortfolioStory />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
