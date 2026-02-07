# Hackathon Phase 2 – Todo Full-Stack Web Application Constitution

## Core Principles

### I. Fully Spec-Driven and Agentic Development
All development must follow spec-driven methodology where every feature is defined in advance in the /specs folder before implementation begins. All code generation must be performed through Claude Code agents using Spec-Kit references, with zero manual coding allowed.

### II. Zero Manual Coding Enforcement
No hand-written code is permitted - all implementation must be generated via Claude Code using references to specifications in the /specs folder. Every line of code must be traceable back to a specific requirement in the specs.

### III. Modular Architecture Through Agents and Skills
System architecture must utilize modular agent design with defined responsibilities: Main Agent, Task Agent, Auth Agent, and UI Agent. Each agent must have clearly defined skills and interfaces to ensure loose coupling and maintainability.

### IV. Complete User Isolation and Data Ownership
Every API endpoint must require valid JWT token authentication and filter data by authenticated user_id. Users must only access their own data with strict enforcement of data ownership boundaries to prevent any cross-user data leakage.

### V. Strict Technology Stack Adherence
Implementation must use only the specified technology stack: Next.js 16+ (App Router), FastAPI, SQLModel, Neon Serverless PostgreSQL, Better Auth (JWT), and Tailwind CSS. No external libraries beyond the specified stack are permitted.

### VI. Monorepo Structure Compliance


Adherence to the defined monorepo structure as specified in .spec-kit/config.yaml with proper separation of frontend/ and backend/ directories. All files and folders must be created exactly as per the monorepo specification structure.

## Additional Constraints

### Technology Stack Lock
Technology stack is fixed: Next.js 16+ (App Router), FastAPI, SQLModel, Neon Serverless PostgreSQL, Better Auth (JWT), Tailwind CSS. No deviations from this stack are allowed.

### Database Access Policy
No direct database access from frontend - all operations must go through protected FastAPI endpoints. No session storage on backend – authentication must be stateless using JWT only.

### Data Security Requirements
All CRUD operations must enforce task ownership (user can only access their own tasks). Better Auth must be configured with JWT plugin and shared BETTER_AUTH_SECRET between frontend and backend.

### Database Schema Compliance
Database schema must match @specs/database/schema.md exactly (users table managed by Better Auth, tasks table with user_id foreign key). All references in prompts must use @specs/path/to/file.md format.

## Development Workflow

### Feature Implementation Process
All features must be implemented exactly as defined in /specs folder. Each feature follows the sequence: Specification → Plan → Tasks → Implementation → Validation. Code structure must follow guidelines in root CLAUDE.md, frontend/CLAUDE.md, and backend/CLAUDE.md.

### Frontend Requirements
Responsive, clean UI using Tailwind CSS and Next.js App Router (server components by default). Frontend must include authentication pages, task list, and create/edit forms with proper user isolation.

### API Endpoint Standards
Every API endpoint must require valid JWT token and filter data by authenticated user_id. FastAPI middleware must correctly verify JWT and extract user_id on every protected route.

### Quality Gates
All implementations must meet the success criteria: Complete implementation of all 5 basic task CRUD operations + toggle completion as a multi-user web app. Project must run locally with docker-compose up or separate npm run dev and uvicorn commands.

## Governance

This constitution governs all development activities for the Hackathon Phase 2 project. All code reviews and pull requests must verify compliance with these principles. Deviations require explicit constitutional amendments. All implementation must be traceable to specs via Claude Code prompts using @specs references with complete history maintained in prompt records.

**Version**: 1.0.0 | **Ratified**: 2026-02-07 | **Last Amended**: 2026-02-07
