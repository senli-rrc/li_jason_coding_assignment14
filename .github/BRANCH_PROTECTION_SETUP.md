# Branch Protection Setup Guide

To ensure the GitHub Actions workflows provide maximum protection, you should configure branch protection rules for your main branches.

## Recommended Branch Protection Settings

### For `main` branch:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Branches**
3. Click **Add rule** or edit existing rule for `main`
4. Configure the following settings:

#### Branch Protection Rules:

- ✅ **Require a pull request before merging**
  - ✅ Require approvals: `1`
  - ✅ Dismiss stale PR approvals when new commits are pushed
  - ✅ Require review from code owners (if you have CODEOWNERS file)

- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - Required status checks:
    - `Main App - Lint, Test & Build`
    - `UI Library - Lint, Test & Build`
    - `Docker Build Verification`
    - `Security & Dependency Check`
    - `PR Validation`
    - `Branch Protection Check`

- ✅ **Require conversation resolution before merging**

- ✅ **Restrict pushes that create files**
  - Restrict to users with push access

- ✅ **Allow force pushes** - ❌ (disabled)
- ✅ **Allow deletions** - ❌ (disabled)

### Additional Security Settings:

#### Repository Settings:

- Go to **Settings** → **Actions** → **General**
- Set **Actions permissions** to "Allow actions and reusable workflows from this repository"
- Enable **Require approval for first-time contributors**

#### Notifications:

- Go to **Settings** → **Notifications**
- Enable email notifications for:
  - Failed workflows
  - Security alerts
  - Dependency updates

## Workflow Overview

The repository now includes three main workflows:

### 1. Continuous Integration (`ci.yml`)

**Triggers:** Push to main branches, Pull Requests
**Purpose:** Core quality checks that mirror pre-commit hooks

**Jobs:**

- **Main App**: Prettier, ESLint, Jest tests with coverage
- **UI Library**: Jest tests, Rollup build, Storybook build
- **Docker Build**: Verify Docker image builds successfully
- **Security Check**: npm audit for vulnerabilities
- **Notify Failure**: Alerts when any job fails

### 2. Pull Request Checks (`pr-checks.yml`)

**Triggers:** PR opened, synchronized, reopened
**Purpose:** Additional PR-specific validations

**Jobs:**

- **Branch Protection**: Ensures PRs target correct branches
- **Commit Lint**: Validates commit message quality
- **PR Validation**: Checks package.json, code quality issues
- **Size Check**: Bundle size impact analysis
- **PR Automation**: Auto-labels based on changed files

### 3. Security Monitoring (`security-monitoring.yml`)

**Triggers:** Weekly schedule (Mondays 9 AM UTC), Manual dispatch
**Purpose:** Ongoing security and dependency monitoring

**Jobs:**

- **Dependency Check**: Weekly audit for outdated packages and vulnerabilities
- **License Check**: Ensures license compliance

## What Happens When Checks Fail?

1. **Failed Workflows**: The GitHub UI will show red ❌ status
2. **Status Badges**: README badges will show "failing" status
3. **PR Blocking**: PRs cannot be merged until all required checks pass
4. **Notifications**: Repository maintainers receive notifications
5. **Auto Issues**: Security issues automatically create GitHub issues
6. **Email Alerts**: Configured users receive email notifications

## Benefits

✅ **Prevents broken code** from reaching main branches
✅ **Maintains consistent code quality** across all contributions
✅ **Catches security vulnerabilities** before they become problems
✅ **Enforces coding standards** through automated checks
✅ **Provides clear feedback** to contributors about what needs fixing
✅ **Maintains build history** and trends over time
✅ **Enables confident releases** knowing all checks have passed

## Troubleshooting

If workflows fail and you need to understand why:

1. **Check the Actions tab** in your GitHub repository
2. **Click on the failed workflow** to see detailed logs
3. **Review the specific job** that failed for error messages
4. **Fix the issues locally** and push again
5. **Use the issue template** if you need help diagnosing problems

Remember: These workflows are designed to catch issues early and maintain high code quality. While they may seem strict, they prevent problems in production and ensure a smooth development experience for all contributors.
