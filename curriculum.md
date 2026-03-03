# Cloudflare Learn to Code - 12-Week Curriculum

> From zero to building agents on the Cloudflare stack.

---

## How to Read This Document

Each week has:
- **Theme**: The overarching focus
- **Capstone**: What you'll have built by end of week
- **Day 1-4**: Individual 60-minute sessions with specific builds

**Session format**: 15 min intro → 30 min build → 15 min review/quiz

**Philosophy**: Learn tools first, then programming fundamentals (locally with Node), then deploy to Workers. Understand before you deploy.

---

## Repository Workflow

```bash
# One-time setup
git clone https://github.com/CameronWhiteside/learn-ai-web-dev.git
cd learn-ai-web-dev

# Daily workflow
cd week-XX-topic/day-Y-subtopic/starter
# ... do your work ...
git add .
git commit -m "Complete day Y"
git push
```

Each week has its own `package.json` for Node dependencies.

---

## Cloudflare Stack Coverage

| Product | Week Introduced | What You Build |
|---------|-----------------|----------------|
| **Workers** | 5 | First API deployed to edge |
| **KV** | 6 | URL shortener storage |
| **R2** | 6 | File uploads |
| **D1** | 7 | Blog database |
| **Durable Objects** | 8-9 | Real-time coordination |
| **Queues** | 9 | Background jobs |
| **Browser Rendering** | 10 | Screenshots, scraping |
| **Workers AI** | 11 | LLM inference |
| **Vectorize** | 11 | Vector search, RAG |
| **Workflows** | 12 | Durable execution |
| **Agents SDK** | 12 | Full AI agents |

---

## Public APIs for Learning

Free, reliable APIs used in Weeks 3-4:

| API | What It Does |
|-----|--------------|
| [icanhazdadjoke](https://icanhazdadjoke.com/api) | Dad jokes |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | Fake REST API |
| [Open-Meteo](https://open-meteo.com/) | Weather (no key) |
| [Dog CEO](https://dog.ceo/dog-api/) | Random dogs |
| [REST Countries](https://restcountries.com/) | Country data |

---

## Phase 1: Tools (Week 1)

### Week 1: Your Development Environment

**Theme**: Get comfortable with the tools before writing code.

**Capstone**: Configured environment, local git repo with commits, cloned course repo

| Day | Topic | What You Do | Output |
|-----|-------|-------------|--------|
| 1 | **Terminal Basics** | Navigate, create files, run commands | Can `cd`, `ls`, `mkdir`, `touch`, `rm`, `cat` |
| 2 | **Windsurf + OpenCode** | Install, configure, understand AI assistance | Editor configured, first files created |
| 3 | **Git Fundamentals** | init, add, commit, status, log | Local repo with 3+ meaningful commits |
| 4 | **Git Workflow** | Clone course repo, make changes, push | Changes pushed to learn-ai-web-dev |

**Terminal commands learned**: `cd`, `ls`, `mkdir`, `touch`, `rm`, `cat`, `open`, `pwd`, `clear`

**Git commands learned**: `git init`, `git add`, `git commit`, `git status`, `git log`, `git clone`, `git push`

---

## Phase 2: JavaScript Fundamentals (Weeks 2-4)

All scripts run locally with Node.js. No deployment yet - focus on understanding.

### Week 2: Programming Basics

**Theme**: Core programming concepts - variables, logic, functions.

**Capstone**: Calculator with functions that you fully understand

| Day | Topic | Script You Build | Key Concepts |
|-----|-------|------------------|--------------|
| 1 | **Variables & Types** | Type explorer - log different types | `let`, `const`, string, number, boolean, `typeof` |
| 2 | **Operators & Expressions** | Simple calculator (add, subtract, etc.) | Math operators, string concatenation, comparison |
| 3 | **Conditionals** | Grade calculator (score → letter grade) | `if`, `else`, `else if`, comparison operators |
| 4 | **Functions** | Refactor calculator into reusable functions | Declaration, parameters, return, scope |

**Run with**: `node script.js`

---

### Week 3: Data Structures

**Theme**: Working with collections of data.

**Capstone**: Contact book script - add, search, list, delete contacts

| Day | Topic | Script You Build | Key Concepts |
|-----|-------|------------------|--------------|
| 1 | **Arrays** | Shopping list - add, remove, display | Arrays, `.push()`, `.pop()`, `.length`, indexing |
| 2 | **Objects** | Person profiles with multiple properties | Object literals, dot notation, bracket notation |
| 3 | **Array Methods** | Filter/map/find exercises | `.map()`, `.filter()`, `.find()`, `.forEach()` |
| 4 | **Contact Book** | Full contact manager | Combining arrays + objects + functions |

**npm introduced**: `npm init`, `package.json` explained

---

### Week 4: Async & APIs

**Theme**: Getting data from the internet.

**Capstone**: Dad Joke CLI - `node joke.js` fetches and displays a joke

| Day | Topic | Script You Build | Key Concepts |
|-----|-------|------------------|--------------|
| 1 | **Callbacks & Promises** | Timer experiments, promise basics | `setTimeout`, callbacks, `.then()`, `.catch()` |
| 2 | **Async/Await** | Cleaner async with async/await | `async`, `await`, try/catch |
| 3 | **Fetch in Node** | Get data from JSONPlaceholder | `fetch()`, JSON parsing, API responses |
| 4 | **Dad Joke CLI** | Fetch and display dad jokes | Putting it all together, CLI args |

**API used**: icanhazdadjoke.com

---

## Phase 3: First Worker (Week 5)

### Week 5: Your Code on the Edge

**Theme**: Deploy what you understand to Cloudflare Workers.

**Capstone**: Dad Joke API - your CLI tool, now deployed as an API

| Day | Topic | What You Build | Key Concepts |
|-----|-------|----------------|--------------|
| 1 | **What is a Worker?** | Hello World deployed globally | Wrangler, `fetch` handler, Request/Response |
| 2 | **Request & Response** | Echo server - return request info | URL, headers, methods, JSON responses |
| 3 | **Routing** | Multi-endpoint API (`/hello`, `/time`, `/joke`) | URL pathname, routing patterns |
| 4 | **Dad Joke API** | Your CLI as a deployed API | `wrangler deploy`, testing your API |

**Wrangler commands**: `npm create cloudflare`, `wrangler dev`, `wrangler deploy`

---

## Phase 4: HTTP & Storage (Week 6)

### Week 6: HTTP Deep Dive + KV + R2

**Theme**: Understand HTTP, add persistent storage.

**Capstone**: URL shortener with click tracking

| Day | Topic | What You Build | Key Concepts |
|-----|-------|----------------|--------------|
| 1 | **HTTP Methods & Status Codes** | API that uses GET, POST, returns proper codes | Methods, 2xx/4xx/5xx, headers |
| 2 | **KV Storage** | Note-taking API with persistence | KV namespace, `put()`, `get()`, `list()` |
| 3 | **URL Shortener** | Create short URLs, redirect | POST for create, GET for redirect, KV storage |
| 4 | **R2 Object Storage** | File upload and serve | R2 bucket, binary data, content types |

**HTTP Reference** (build during week):
```
200 OK           - Success
201 Created      - Resource created  
301 Redirect     - Permanent redirect
400 Bad Request  - Invalid input
404 Not Found    - Resource missing
500 Server Error - Something broke
```

---

## Phase 5: Database (Week 7)

### Week 7: D1 SQL Database

**Theme**: Relational data at the edge.

**Capstone**: Blog with full CRUD

| Day | Topic | What You Build | Key Concepts |
|-----|-------|----------------|--------------|
| 1 | **SQL Basics** | Create tables, insert, query | CREATE, INSERT, SELECT, WHERE |
| 2 | **D1 in Workers** | Blog API - list and get posts | D1 binding, `db.prepare()`, parameterized queries |
| 3 | **CRUD Operations** | Create, update, delete posts | INSERT, UPDATE, DELETE |
| 4 | **Full Blog** | Complete blog with frontend | Combining API + serving HTML |

---

## Phase 6: Durable Objects (Weeks 8-9)

### Week 8: Stateful Edge Computing

**Theme**: Single-instance stateful Workers.

**Capstone**: Live poll with real-time updates

| Day | Topic | What You Build | Key Concepts |
|-----|-------|----------------|--------------|
| 1 | **DO Concepts** | Counter that persists | What DOs are, naming, stubs |
| 2 | **DO Storage** | Per-user note storage | `this.ctx.storage`, state isolation |
| 3 | **Coordination** | Multi-user counter | Atomic operations, single instance |
| 4 | **Live Poll** | Create polls, vote, see results | Combining all DO concepts |

---

### Week 9: Real-Time & Background Jobs

**Theme**: WebSockets and async processing.

**Capstone**: Real-time chat with message history

| Day | Topic | What You Build | Key Concepts |
|-----|-------|----------------|--------------|
| 1 | **WebSockets Intro** | Echo server | WebSocket upgrade, send/receive |
| 2 | **DO + WebSockets** | Chat room broadcast | `WebSocketPair`, hibernation |
| 3 | **Queues** | Background job processor | Producer, consumer, batching |
| 4 | **Chat App** | Full chat with rooms | WebSockets + DO + persistence |

---

## Phase 7: Advanced Features (Weeks 10-11)

### Week 10: Browser Rendering

**Theme**: Headless Chrome at the edge.

**Capstone**: Screenshot service + Link-in-bio app

| Day | Topic | What You Build | Key Concepts |
|-----|-------|----------------|--------------|
| 1 | **Browser Basics** | Screenshot any URL | Puppeteer, `page.screenshot()` |
| 2 | **PDF & Scraping** | Generate PDF, scrape content | `page.pdf()`, `page.evaluate()` |
| 3 | **Link-in-Bio Backend** | API for managing links | CRUD, KV, auth patterns |
| 4 | **Link-in-Bio Frontend** | Public page + admin | Full-stack on Workers |

---

### Week 11: AI on the Edge

**Theme**: LLMs, embeddings, and RAG.

**Capstone**: RAG Q&A bot over your documents

| Day | Topic | What You Build | Key Concepts |
|-----|-------|----------------|--------------|
| 1 | **Workers AI** | Text generator, joke bot | AI binding, `env.AI.run()`, prompts |
| 2 | **Embeddings** | Semantic search over notes | Vectors, similarity, cosine distance |
| 3 | **Vectorize + RAG** | Q&A from your docs | Vector DB, retrieval, augmentation |
| 4 | **Streaming** | AI chat with streaming | ReadableStream, SSE |

---

## Phase 8: Agents (Week 12)

### Week 12: Building AI Agents

**Theme**: Stateful AI that thinks, remembers, and acts.

**Capstone**: Full AI agent with tools, scheduling, web browsing

| Day | Topic | What You Build | Key Concepts |
|-----|-------|----------------|--------------|
| 1 | **Agent Architecture** | Agent with 2-3 tools | Tool definitions, `@callable()` |
| 2 | **Workflows** | Multi-step with retries | `WorkflowEntrypoint`, `step.do()` |
| 3 | **MCP + Browsing** | Agent that browses web | MCP protocol, Browser Rendering |
| 4 | **Capstone Demo** | Polish and present | Testing, docs, demo |

---

## Weekly Capstone Summary

| Week | Capstone | Runs On |
|------|----------|---------|
| 1 | Configured environment + git workflow | Local |
| 2 | Calculator with functions | Node (local) |
| 3 | Contact book script | Node (local) |
| 4 | Dad Joke CLI | Node (local) |
| 5 | Dad Joke API | Workers |
| 6 | URL Shortener | Workers + KV |
| 7 | Blog | Workers + D1 |
| 8 | Live Poll | Workers + DO |
| 9 | Real-time Chat | Workers + DO + Queues |
| 10 | Screenshot + Link-in-bio | Workers + Browser Rendering |
| 11 | RAG Q&A Bot | Workers + AI + Vectorize |
| 12 | Full AI Agent | Full stack |

---

## AI Checkpoints

"Manual First, Then AI" moments:

| Week | Checkpoint |
|------|------------|
| 2 | Rebuild calculator with AI, compare |
| 4 | Have AI explain async, verify understanding |
| 6 | AI generates URL shortener, you review |
| 7 | Write SQL manually, ask AI to optimize |
| 11 | Prompt engineering for RAG |
| 12 | Full AI-assisted agent development |

---

## Skills Progression

### Terminal
- Week 1: `cd`, `ls`, `mkdir`, `touch`, `rm`, `cat`, `pwd`
- Week 2+: `node`, `npm`
- Week 5+: `wrangler dev`, `wrangler deploy`

### Git
- Week 1: `init`, `add`, `commit`, `status`, `log`, `clone`, `push`
- Week 3+: `branch`, `checkout`, `merge`
- Week 5+: Pull requests

### Node/npm
- Week 2: `node script.js`
- Week 3: `npm init`, `package.json`
- Week 4: `npm install`, dependencies

---

*Last updated: 2026-03-03*
