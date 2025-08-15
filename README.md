# React + Storybook UI Component Library

[![CI Status](https://github.com/senli-rrc/li_jason_coding_assignment13/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/senli-rrc/li_jason_coding_assignment13/actions/workflows/ci.yml)
[![PR Checks](https://github.com/senli-rrc/li_jason_coding_assignment13/actions/workflows/pr-checks.yml/badge.svg?branch=main)](https://github.com/senli-rrc/li_jason_coding_assignment13/actions/workflows/pr-checks.yml)
[![Security Audit](https://github.com/senli-rrc/li_jason_coding_assignment13/actions/workflows/security-monitoring.yml/badge.svg?branch=main)](https://github.com/senli-rrc/li_jason_coding_assignment13/actions/workflows/security-monitoring.yml)

This project is a comprehensive UI component library built with React, TypeScript, styled-components, and Storybook. It provides a collection of reusable, responsive, and accessible components that can be used across different projects.

## 🚀 Build Status & Quality Checks

This repository includes comprehensive CI/CD workflows that ensure code quality and prevent broken builds:

- **✅ Continuous Integration**: Runs on every push and PR, includes linting, testing, and build verification
- **✅ Pull Request Checks**: Additional validation for PRs including commit message linting and bundle size analysis
- **✅ Security Monitoring**: Weekly dependency audits and license compliance checks
- **✅ Pre-commit Hooks**: Local validation using Husky and lint-staged to catch issues before they reach GitHub

If any of these checks fail, the build will be marked as failed and contributors will be notified to fix the issues before merging.

## Getting Started

### Prerequisites

- Node.js 20 or higher
- Docker and Docker Compose

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/senli-rrc/li_jason_coding_assignment13.git
   cd li_jason_coding_assignment13
   ```

2. **Install dependencies**

   ```bash
   cd li_jason_ui_garden_build_checks
   npm install --legacy-peer-deps
   ```

3. **Run Storybook locally**

   ```bash
   npm run storybook
   ```

   This will start Storybook on `http://localhost:8013`

4. **Run tests**
   ```bash
   npm run test
   ```

### Implement Pre-commit checks

This section outlines how to implement pre-commit checks using Husky, lint-staged, Prettier, and ESLint to ensure code quality before commits.
Make sure you are in the li_jason_coding_assignment13 directory.

#### Step 1: Install the Necessary Dependencies

Use one of the following commands depending on your package manager:

**Using npm:**

```bash
npm install --save-dev husky lint-staged prettier eslint eslint-config-prettier eslint-plugin-prettier
```

**Using yarn:**

```bash
yarn add --dev husky lint-staged prettier eslint eslint-config-prettier eslint-plugin-prettier
```

#### Step 2: Initialize Husky

Set up Husky to enable Git hooks in your project.

**For npm users:**

```bash
npx husky-init && npm install
```

**For yarn users:**

```bash
npx husky-init && yarn
```

This will:

- Create a `.husky` directory
- Add a sample pre-commit hook
- Update your `package.json` with a "prepare" script

#### Step 3: Create a Pre-commit Hook

Add a new pre-commit hook that runs lint-staged:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

This creates a `.husky/pre-commit` file and modify as the following content:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged --allow-empty
set CI=true && npm test
```

#### Step 4: Test Your Setup

1. **Make a change** to any file
2. **Stage the changes**: `git add .`
3. **Commit**: `git commit -m "test pre-commit hooks"`

The pre-commit hooks should automatically:

- Format your code with Prettier
- Lint your code with ESLint
- Run tests (if configured)

#### Manual Commands

```bash
# Format code manually
npx prettier --write .

# Lint code manually
npx eslint . --fix

# Run tests manually
npm test

# Skip pre-commit hooks (not recommended)
git commit -m "your message" --no-verify
```

### Docker Compose Development

For local development with Docker Compose (includes hot reload):

1. **Start the development environment**

   ```bash
   docker-compose -f docker-compose.yml up
   ```

   This will:
   - Build the development Docker image
   - Start Storybook with hot reload
   - Mount your local source code for live editing
   - Make Storybook available at `http://localhost:8013`

2. **Stop the development environment**

   ```bash
   docker-compose -f docker-compose.yml down
   ```

3. **Rebuild after dependency changes**
   ```bash
   docker-compose -f docker-compose.yml up --build
   ```
4. **Build a production**

   ```bash
   docker build -t li_jason_coding_assignment13 .
   ```

5. **Run the Image**
   ```bash
   docker run -p 8013:8013 li_jason_coding_assignment13
   ```
