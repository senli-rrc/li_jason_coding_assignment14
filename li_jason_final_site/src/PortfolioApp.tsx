import React from "react";
import styled from "styled-components";

// Import all the components we'll use for the portfolio
import { HeroImage } from "./components/HeroImage/HeroImage";
import { Card } from "./components/Card/Card";
import { Button } from "./components/Button/Button";
import { Text } from "./components/Text/Text";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "./components/Table/Table";

// Portfolio Layout Container
const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
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

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const SkillCategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SkillCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkillName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
`;

const SkillLevel = styled.span<{ $level: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  background-color: ${(props) =>
    props.$level === "Expert"
      ? "#27ae60"
      : props.$level === "Advanced"
        ? "#3498db"
        : "#f39c12"};
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #f8f9fa;
  color: #495057;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ToolCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #8e44ad;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const BasicInfoSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 3rem;
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

const TagText = styled(Text)`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
  display: inline-block;
  margin: 0.25rem;
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

const DescriptionText = styled(Text)`
  margin-bottom: 2rem;
`;

const CenteredText = styled(Text)`
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionHeaderText = styled(Text)`
  margin-bottom: 1.5rem;
`;

const ToolsSectionText = styled(Text)`
  margin: 2rem 0 1.5rem 0;
`;

const PortfolioApp: React.FC = () => {
  // Basic Information
  const basicInfo = {
    name: "Jason Li",
    title: "Full Stack Developer, Lifelong Learner",
    description:
      "Currently studying Full Stack Web Development at Red River College. I come from a strong background in software operations and embedded development, with over 8 years of industry experience at companies like Baidu, Taobao, and Bqvision. ",
    email: "senli@rrc.ca",
    phone: "+1 (431) 388-9262",
    location: "Red River College, Winnipeg, MB",
    linkedin: "https://www.linkedin.com/in/sen-li-539b7693/",
    github: "https://github.com/senli-rrc",
  };

  // Work Projects Data
  const workProjects = [
    {
      title: "Pokemon TCG Card Builder",
      description:
        "A web application that allows users to create and customize their own Pokemon trading cards. Features include searching, filtering, and the ability to save and share created cards.",
      image:
        "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=400&h=250&fit=crop",
      link: "https://github.com/senli-rrc/PTCG_Top_Decks",
      techList: ["HTML", "CSS", "MySQL", "PHP", "REST API"],
    },
    {
      title: "Fate/Grand Order Character Database",
      description:
        "A comprehensive database for Fate/Grand Order characters, featuring detailed information, images, and user-generated content.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      link: "https://github.com/senli-rrc/fgo_wiki",
      techList: ["Rails", "REST API", "Ruby"],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and resources. Built with React and styled-components, featuring responsive designs.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      link: "https://github.com/senli-rrc/li_jason_coding_assignment14",
      techList: ["React", "TypeScript", "Styled Components", "Vite"],
    },
  ];

  // Skills Data
  const skills = {
    description:
      "Comprehensive technical skills spanning frontend, backend, databases, and modern development tools. Constantly learning and adapting to new technologies.",
    languagesFrameworks: [
      {
        category: "Programming & Scripting",
        technologies: [
          "JavaScript",
          "PHP",
          "HTML/CSS",
          "Java",
          "Python",
          "Ruby",
          "SQL",
          "Bash",
          "React",
          "Node.js",
        ],
        level: "Advanced",
      },
      {
        category: "Data & Analysis",
        technologies: [
          "SQL Data Profiling",
          "Ad Hoc Data Extraction",
          "Excel (Pivot Tables)",
          "Formulas & Data Validation",
          "REST API Integration",
        ],
        level: "Intermediate",
      },
      {
        category: "Database & Queries",
        technologies: [
          "SQL Querying",
          "Joins",
          "Aggregations",
          "Data Analysis",
          "Database Design",
        ],
        level: "Advanced",
      },
    ],
    tools: [
      {
        category: "Development & Collaboration",
        technologies: [
          "Git/GitHub",
          "VS Code",
          "Docker",
          "Chrome DevTools",
          "Microsoft Office Suite",
        ],
      },
      {
        category: "Business & Process Skills",
        technologies: [
          "Technical Troubleshooting",
          "Business Rules Documentation",
          "Data Definitions",
          "Agile Teamwork",
        ],
      },
      {
        category: "Process Improvement",
        technologies: [
          "Process Improvement",
          "Automation Initiatives",
          "Workflow Optimization",
          "Technical Documentation",
        ],
      },
    ],
  };

  // Resources Data
  const resources = [
    {
      title: "React Documentation",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png",
      summary:
        "Official React documentation - comprehensive guide for learning and reference. Essential resource for React developers.",
      link: "https://react.dev",
    },
    {
      title: "TypeScript Handbook",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/200px-Typescript_logo_2020.svg.png",
      summary:
        "Complete TypeScript documentation and tutorials. Learn type-safe JavaScript development.",
      link: "https://www.typescriptlang.org/docs/",
    },
    {
      title: "GitHub",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      summary:
        "Version control and collaboration platform. Host code, contribute to open source, and showcase projects.",
      link: "https://github.com",
    },
  ];

  return (
    <PortfolioContainer>
      {/* Basic Information Section */}
      <Section>
        <BasicInfoSection>
          <SpacedText size="2xl" weight="bold" color="white">
            {basicInfo.name}
          </SpacedText>
          <ContactText size="lg" color="rgba(255, 255, 255, 0.9)">
            {basicInfo.title}
          </ContactText>
          <DescriptionText size="md" color="rgba(255, 255, 255, 0.8)">
            {basicInfo.description}
          </DescriptionText>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Text size="sm" color="rgba(255, 255, 255, 0.9)">
              📧 {basicInfo.email} | 📱 {basicInfo.phone}
            </Text>
            <Text size="sm" color="rgba(255, 255, 255, 0.9)">
              📍 {basicInfo.location}
            </Text>
          </div>

          <ButtonGroup>
            <Button
              title="LinkedIn"
              backgroundColor="#0077b5"
              onClick={() => window.open(basicInfo.linkedin, "_blank")}
            />
            <Button
              title="GitHub"
              backgroundColor="#333"
              onClick={() => window.open(basicInfo.github, "_blank")}
            />
            <Button
              title="Contact Me"
              backgroundColor="rgba(255, 255, 255, 0.2)"
              onClick={() =>
                (window.location.href = `mailto:${basicInfo.email}`)
              }
            />
          </ButtonGroup>
        </BasicInfoSection>
      </Section>

      {/* Work Section */}
      <Section>
        <SectionTitle>My Work</SectionTitle>
        <WorkGrid>
          {workProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              content={project.description}
              imageSrc={project.image}
              variant="elevated"
              onClick={() => window.open(project.link, "_blank")}
              footer={
                <div>
                  <div style={{ marginBottom: "1rem" }}>
                    <Button
                      title="View Project"
                      backgroundColor="#3498db"
                      onClick={() => window.open(project.link, "_blank")}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.25rem",
                    }}
                  >
                    {project.techList.map((tech, techIndex) => (
                      <TagText
                        key={techIndex}
                        size="xs"
                        backgroundColor="#e3f2fd"
                        color="#1976d2"
                      >
                        {tech}
                      </TagText>
                    ))}
                  </div>
                </div>
              }
            />
          ))}
        </WorkGrid>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <SkillsContainer>
          <CenteredText size="lg" weight="medium" color="#2c3e50">
            {skills.description}
          </CenteredText>

          <SkillCategory>
            <SkillCategoryTitle>Languages & Frameworks</SkillCategoryTitle>
            <SkillGrid>
              {skills.languagesFrameworks.map((skill, index) => (
                <SkillCard key={index}>
                  <SkillHeader>
                    <SkillName>{skill.category}</SkillName>
                    <SkillLevel $level={skill.level}>{skill.level}</SkillLevel>
                  </SkillHeader>
                  <SkillTags>
                    {skill.technologies.map((tech, techIndex) => (
                      <SkillTag key={techIndex}>{tech}</SkillTag>
                    ))}
                  </SkillTags>
                </SkillCard>
              ))}
            </SkillGrid>
          </SkillCategory>

          <SkillCategory>
            <SkillCategoryTitle>Tools & Technologies</SkillCategoryTitle>
            <ToolsGrid>
              {skills.tools.map((toolCategory, index) => (
                <ToolCard key={index}>
                  <SkillName style={{ marginBottom: "1rem" }}>
                    {toolCategory.category}
                  </SkillName>
                  <SkillTags>
                    {toolCategory.technologies.map((tool, toolIndex) => (
                      <SkillTag key={toolIndex}>{tool}</SkillTag>
                    ))}
                  </SkillTags>
                </ToolCard>
              ))}
            </ToolsGrid>
          </SkillCategory>
        </SkillsContainer>
      </Section>

      {/* Resources Section */}
      <Section>
        <SectionTitle>Useful Resources</SectionTitle>
        <ResourcesGrid>
          {resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              content={resource.summary}
              imageSrc={resource.image}
              variant="outlined"
              onClick={() => window.open(resource.link, "_blank")}
              footer={
                <Button
                  title="Visit Resource"
                  backgroundColor="#8e44ad"
                  onClick={() => window.open(resource.link, "_blank")}
                />
              }
            />
          ))}
        </ResourcesGrid>
      </Section>
    </PortfolioContainer>
  );
};

export default PortfolioApp;
