# Day 2: Windsurf + OpenCode

> Your AI-powered code editor. Write code faster with intelligent assistance.

## Learning Objectives

By end of this session, you will:
- [ ] Open projects from terminal
- [ ] Navigate files in Windsurf
- [ ] Use the AI assistant effectively
- [ ] Create and edit files
- [ ] Understand when AI helps vs. when to type yourself

---

## INTRO (15 min)

### Review Yesterday

Quick check - from terminal:
```bash
# Where are you?
pwd

# List files
ls

# Go to home
cd ~
```

### What is Windsurf?

Windsurf is a code editor based on VS Code, but with powerful AI built in. You can:
- Write code with AI suggestions
- Ask questions about your code
- Get help debugging errors
- Generate boilerplate code

**But remember:** AI accelerates learning, it doesn't replace understanding.

---

## BUILD (30 min)

### Exercise 1: Open Project from Terminal

First, let's set up the terminal command to open Windsurf.

In Windsurf:
1. Press `Cmd + Shift + P` (opens command palette)
2. Type "Shell Command"
3. Select "Shell Command: Install 'code' command in PATH"

Now in terminal:
```bash
# Go to home
cd ~

# Create a practice folder
mkdir windsurf-practice
cd windsurf-practice

# Open current folder in Windsurf
code .
```

Windsurf should open with your folder!

---

### Exercise 2: Create Files in Windsurf

In Windsurf's sidebar:
1. Right-click �� New File
2. Name it `hello.txt`
3. Type: "Hello from Windsurf!"
4. Save: `Cmd + S`

Now create another file:
1. Right-click → New File  
2. Name it `notes.md`
3. Type some notes about what you've learned

---

### Exercise 3: The Command Palette

The command palette (`Cmd + Shift + P`) is your best friend.

Try these:
- `Cmd + Shift + P` → type "theme" → change your color theme
- `Cmd + Shift + P` → type "font size" → adjust text size
- `Cmd + Shift + P` → type "minimap" → toggle the code minimap

---

### Exercise 4: Keyboard Shortcuts

Essential shortcuts to practice:

| Action | Shortcut |
|--------|----------|
| Save | `Cmd + S` |
| Open file | `Cmd + P` |
| Command palette | `Cmd + Shift + P` |
| Toggle sidebar | `Cmd + B` |
| Toggle terminal | `` Ctrl + ` `` |
| Find in file | `Cmd + F` |
| Find in project | `Cmd + Shift + F` |

Practice: Open the terminal inside Windsurf with `` Ctrl + ` ``

---

### Exercise 5: The AI Assistant

Open AI chat: `Cmd + L`

Try asking:
1. "What is a terminal?"
2. "Explain the `ls -la` command"
3. "What's the difference between a file and a folder?"

Notice how AI can explain concepts, but **you** still need to understand and remember them.

---

### Exercise 6: AI-Assisted Writing

Create a new file called `about-me.txt`.

In the AI chat (`Cmd + L`), ask:
> "Help me write a short bio for someone learning to code"

**Important:** Don't just copy-paste. Read what AI suggests, then type your OWN version in your own words.

---

### Exercise 7: Terminal in Windsurf

Toggle the built-in terminal: `` Ctrl + ` ``

You now have terminal AND editor in one window!

Try:
```bash
# See your files
ls

# Create a new file from terminal
touch from-terminal.txt

# It appears in the sidebar!
```

---

## The AI Ethos

### When to Use AI

**Good:**
- Explain concepts you don't understand
- Help debug errors
- Generate boilerplate you understand
- Rubber-duck your thinking

**Bad:**
- Write code you don't understand
- Skip learning fundamentals
- Copy-paste without reading

### The Test

Before using AI-generated code, ask yourself:
> "Can I explain every line of this?"

If no, don't use it yet. Learn it first.

---

## REVIEW (15 min)

### What You Built

Today you learned to:
- Open folders from terminal with `code .`
- Navigate Windsurf interface
- Use keyboard shortcuts
- Chat with AI assistant
- Balance AI help with your own learning

### Explain-Back

1. How do you open a folder in Windsurf from terminal?
2. What's the command palette and how do you open it?
3. When should you use AI vs. type yourself?

### Quiz

See [QUIZ.md](./QUIZ.md)

### Preview Tomorrow

Tomorrow you'll learn Git - how to track changes to your code over time. This is essential for:
- Saving your work safely
- Undoing mistakes
- Collaborating with others

---

## Homework (Optional)

1. Customize Windsurf:
   - Pick a color theme you like
   - Adjust font size
   - Explore settings (`Cmd + ,`)

2. Create a `journal.md` file and write:
   - What you learned in Days 1-2
   - What was confusing
   - What you want to learn next
