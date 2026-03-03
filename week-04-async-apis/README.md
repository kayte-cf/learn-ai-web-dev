# Week 4: Async & APIs

> Get data from the internet. Build your first CLI tool.

## Overview

| Day | Topic | What You Build |
|-----|-------|----------------|
| 1 | Callbacks & Promises | Async experiments |
| 2 | Async/Await | Cleaner async code |
| 3 | Fetch | Get data from APIs |
| 4 | Dad Joke CLI | Capstone: CLI that fetches jokes |

## Week Capstone

A command-line tool:
```bash
node joke.js
# Outputs: "Why don't scientists trust atoms? Because they make up everything!"
```

## Setup

```bash
cd week-04-async-apis
```

Run scripts:
```bash
node day-1-callbacks-promises/starter/script.js
# or
npm run day1
```

## Key Concepts

### Async Programming
- JavaScript doesn't wait for slow operations
- Callbacks: functions called when something finishes
- Promises: objects representing future values
- Async/await: cleaner syntax for promises

### APIs
- Application Programming Interface
- Get data from other services
- `fetch()` makes HTTP requests
- JSON is the common data format

## API Used

**icanhazdadjoke.com** - Free dad jokes API
```bash
curl -H "Accept: application/json" https://icanhazdadjoke.com/
```
