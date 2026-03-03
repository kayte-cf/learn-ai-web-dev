# Environment Setup

Complete these steps before Week 1, Day 1.

## Required Tools

### 1. Node.js

Node.js lets you run JavaScript outside the browser.

**Install via Homebrew (recommended for Mac):**
```bash
brew install node
```

**Or download from:** https://nodejs.org (use LTS version)

**Verify installation:**
```bash
node --version
# Should show v18.x.x or higher

npm --version
# Should show 9.x.x or higher
```

---

### 2. Git

Git tracks changes to your code.

**Install via Homebrew:**
```bash
brew install git
```

**Or download from:** https://git-scm.com

**Verify installation:**
```bash
git --version
# Should show git version 2.x.x
```

**Configure your identity:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@cloudflare.com"
```

---

### 3. Windsurf

Windsurf is an AI-powered code editor based on VS Code.

**Download from:** https://codeium.com/windsurf

After installing:
1. Open Windsurf
2. Sign in with your account
3. Familiarize yourself with the AI chat panel (Cmd+L)

---

### 4. OpenCode (Optional for Week 1)

OpenCode is a CLI-based AI coding assistant.

**Install:**
```bash
npm install -g @anthropic-ai/opencode
```

**Or via Homebrew:**
```bash
brew install opencode
```

We'll introduce OpenCode in Week 2.

---

### 5. Wrangler (Week 5+)

Wrangler is the CLI for Cloudflare Workers. You won't need this until Week 5.

**Install globally:**
```bash
npm install -g wrangler
```

**Login to Cloudflare:**
```bash
wrangler login
```

---

## Verify Everything Works

Run these commands to check your setup:

```bash
# Check Node
node -e "console.log('Node works!')"

# Check npm
npm -v

# Check Git
git status

# Open current directory in Windsurf
code .
```

If all commands work, you're ready for Week 1!

---

## Troubleshooting

### "command not found: node"
- Restart your terminal after installing
- Check if Homebrew installed correctly: `brew doctor`

### "command not found: git"
- On Mac, you might need Xcode tools: `xcode-select --install`

### Git asks for password on push
- Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Windsurf doesn't open with `code .`
- In Windsurf: Cmd+Shift+P → "Shell Command: Install 'code' command in PATH"

---

## Next Steps

Once setup is complete:

```bash
git clone https://github.com/CameronWhiteside/learn-ai-web-dev.git
cd learn-ai-web-dev/week-01-tools/day-1-terminal
```

Read the README.md and you're ready to start!
