# Learn AI Web Development

> Internal Cloudflare training: From zero to building AI agents on the Cloudflare stack.

## Overview

| Attribute | Value |
|-----------|-------|
| **Duration** | 12 weeks |
| **Sessions per week** | 4 |
| **Session length** | 60 minutes |
| **Format** | Instructor-led, 1:1 or 1:2 |
| **Tools** | Windsurf, OpenCode, Node.js, Wrangler |

## Quick Start

### 1. Setup Your Environment

Follow [SETUP.md](./SETUP.md) to install:
- Node.js
- Windsurf (AI-powered editor)
- Git
- Wrangler (Cloudflare CLI)

### 2. Clone This Repo

```bash
git clone https://github.com/CameronWhiteside/learn-ai-web-dev.git
cd learn-ai-web-dev
```

### 3. Start Week 1

```bash
cd week-01-tools/day-1-terminal
# Read the README.md and begin!
```

## Daily Workflow

```bash
# Navigate to today's lesson
cd week-XX-topic/day-Y-subtopic/starter

# Do your work in the starter folder

# When done, commit and push
git add .
git commit -m "Complete Week X Day Y"
git push
```

## Curriculum Overview

| Phase | Weeks | Focus | Capstone |
|-------|-------|-------|----------|
| **Tools** | 1 | Terminal, Windsurf, Git | Configured environment |
| **JS Fundamentals** | 2-4 | Variables, functions, async, APIs | Dad Joke CLI |
| **First Worker** | 5 | Deploy to Cloudflare | Dad Joke API |
| **Storage** | 6-7 | KV, R2, D1 | URL Shortener, Blog |
| **Real-Time** | 8-9 | Durable Objects, WebSockets | Live Chat |
| **Advanced** | 10-11 | Browser Rendering, AI | RAG Q&A Bot |
| **Agents** | 12 | Full AI Agents | Complete Agent |

## Session Structure

Every 60-minute session:

```
0:00 - 0:15  INTRO
             - Review yesterday
             - Introduce today's concept
             - Demo what we're building

0:15 - 0:45  BUILD
             - Work through starter files
             - Type everything yourself
             - Commit progress as you go

0:45 - 1:00  REVIEW
             - Explain what you built
             - Quick quiz
             - Preview tomorrow
             - Final commit + push
```

## Core Principles

1. **Tools First** - Get comfortable with terminal, editor, git before writing code
2. **Understand Before Deploy** - Learn JS locally, deploy only when you understand it
3. **Type Everything** - No copy-paste. Muscle memory matters.
4. **AI Accelerates, Doesn't Replace** - Use AI tools carefully to go faster, not skip learning

## Repository Structure

```
learn-ai-web-dev/
├── README.md              # This file
├── SETUP.md               # Environment setup
├── curriculum.md          # Full 12-week outline
├── planning.md            # Program design decisions
│
├── week-01-tools/
│   ├── README.md          # Week overview
│   ├── day-1-terminal/
│   │   ├── README.md      # Session guide
│   │   ├── AGENTS.md      # AI usage hints
│   │   ├── QUIZ.md        # End-of-session quiz
│   │   └── starter/       # Your workspace
│   └── ...
│
├── week-02-js-basics/
│   ├── package.json       # Node dependencies
│   └── ...
│
└── ... (weeks 3-12)
```

## Cloudflare Stack Coverage

By program end, you'll have hands-on experience with:

- **Workers** - Serverless compute at the edge
- **KV** - Key-value storage
- **R2** - Object storage
- **D1** - SQL database
- **Durable Objects** - Stateful coordination
- **Queues** - Background jobs
- **Browser Rendering** - Headless Chrome
- **Workers AI** - LLM inference
- **Vectorize** - Vector database
- **Workflows** - Durable execution
- **Agents SDK** - AI agents

## Resources

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Windsurf](https://codeium.com/windsurf)
- [OpenCode](https://opencode.ai)
