# Day 3: Git Basics

> Track changes to your code. Never lose work again.

## Learning Objectives

By end of this session, you will:
- [ ] Understand what Git does and why it matters
- [ ] Initialize a repository
- [ ] Stage and commit changes
- [ ] View your commit history
- [ ] Have a local repo with 3+ meaningful commits

---

## INTRO (15 min)

### Review Yesterday

Open your `windsurf-practice` folder:
```bash
cd ~/windsurf-practice
code .
```

### What is Git?

Git is a **version control system**. It tracks changes to your files over time.

Think of it like:
- **Google Docs revision history** - but for code
- **Save points in a video game** - you can go back
- **Time machine for your project**

### Why Use Git?

1. **Never lose work** - Every change is saved
2. **Undo mistakes** - Go back to any previous version
3. **Experiment safely** - Try things without fear
4. **Collaborate** - Multiple people can work together
5. **Required everywhere** - Every dev team uses Git

### Key Concepts

- **Repository (repo)** - A folder tracked by Git
- **Commit** - A saved snapshot of your changes
- **Staging** - Choosing which changes to include in a commit

---

## BUILD (30 min)

### Exercise 1: Initialize a Repository

Create a new project folder:
```bash
cd ~
mkdir my-first-repo
cd my-first-repo
```

Initialize Git:
```bash
git init
```

You should see: `Initialized empty Git repository`

Check status:
```bash
git status
```

Git is now watching this folder!

---

### Exercise 2: Your First Commit

Create a file:
```bash
echo "# My First Repo" > README.md
```

Check status:
```bash
git status
```

You'll see `README.md` in red as an "untracked file".

**Stage** the file (tell Git to include it):
```bash
git add README.md
```

Check status again:
```bash
git status
```

Now it's green under "Changes to be committed".

**Commit** (save this snapshot):
```bash
git commit -m "Add README"
```

The `-m` flag adds a message describing what you did.

---

### Exercise 3: Make More Changes

Open in Windsurf:
```bash
code .
```

Edit `README.md` to add more content:
```markdown
# My First Repo

This is my first Git repository!

## What I'm Learning

- Terminal commands
- Windsurf editor
- Git version control
```

Save the file (`Cmd + S`).

Back in terminal, check what changed:
```bash
git status
```

See the actual changes:
```bash
git diff
```

Lines starting with `+` were added. Lines with `-` were removed.

Stage and commit:
```bash
git add README.md
git commit -m "Add learning section to README"
```

---

### Exercise 4: Add More Files

Create a new file in Windsurf called `notes.txt`.

Add some text:
```
Day 1: Learned terminal basics
Day 2: Set up Windsurf
Day 3: Learning Git!
```

Save it.

Stage and commit:
```bash
git add notes.txt
git commit -m "Add learning notes"
```

---

### Exercise 5: View History

See all your commits:
```bash
git log
```

You'll see each commit with:
- A long ID (hash)
- Author and date
- Your commit message

For a shorter view:
```bash
git log --oneline
```

---

### Exercise 6: The Git Workflow

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Working Directory    Staging Area    Repository       │
│   (your files)         (git add)       (git commit)     │
│                                                         │
│   ┌��────────┐         ┌───��─────┐     ┌─────────┐      │
│   │  Edit   │ ──────> │  Stage  │ ──> │  Commit │      │
│   │  files  │ git add │ changes │     │ snapshot│      │
│   └─────────┘         └─────────┘     └─────────┘      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

1. **Edit** files normally
2. **Stage** the changes you want to save (`git add`)
3. **Commit** to create a snapshot (`git commit`)

---

### Exercise 7: Stage Multiple Files

Create two new files:
```bash
touch file1.txt file2.txt
```

Add content to both (in Windsurf or with echo).

Stage both at once:
```bash
git add file1.txt file2.txt
```

Or stage everything:
```bash
git add .
```

The `.` means "everything in current directory".

Commit:
```bash
git commit -m "Add file1 and file2"
```

---

## Command Reference

| Command | What It Does |
|---------|--------------|
| `git init` | Initialize a new repository |
| `git status` | Show what's changed |
| `git add <file>` | Stage a file for commit |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save staged changes |
| `git log` | Show commit history |
| `git log --oneline` | Short history view |
| `git diff` | Show unstaged changes |

---

## REVIEW (15 min)

### What You Built

You now have a Git repository with:
- Multiple commits
- A history you can view
- Changes tracked over time

### Explain-Back

1. What's the difference between `git add` and `git commit`?
2. Why do we write commit messages?
3. What does `git status` show you?

### Quiz

See [QUIZ.md](./QUIZ.md)

### Preview Tomorrow

Tomorrow you'll learn to:
- Clone this course repository
- Push your changes to GitHub
- Work with remote repositories

---

## Homework (Optional)

1. Add 3 more commits to your repo with different changes
2. Practice the workflow: edit → status → add → commit
3. Try `git log --oneline --graph` for a visual history
