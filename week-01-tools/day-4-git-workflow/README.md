# Day 4: Git Workflow

> Clone, commit, push. The real-world Git workflow.

## Learning Objectives

By end of this session, you will:
- [ ] Clone a remote repository
- [ ] Understand local vs remote
- [ ] Push your changes to GitHub
- [ ] Have your work saved in the cloud

---

## INTRO (15 min)

### Review Yesterday

Check your local repo:
```bash
cd ~/my-first-repo
git log --oneline
```

You should see your commits from yesterday.

### Local vs Remote

Yesterday you worked with a **local** repository - it only exists on your computer.

Today you'll work with **remote** repositories:
- Stored on GitHub (in the cloud)
- Can be accessed from anywhere
- Can be shared with others

```
┌─────────────────┐                    ┌─────────────────┐
│   Your Computer │                    │     GitHub      │
│                 │                    │                 │
│   ┌───────────┐ │    git push       │   ┌───────────┐ │
│   │   Local   │ │ ────────────────> │   │  Remote   │ │
│   │   Repo    │ │                   │   │   Repo    │ │
│   └───────────┘ │ <──────────────── │   └───────────┘ │
│                 │    git pull        │                 │
└─────────────────┘                    └─────────────────┘
```

---

## BUILD (30 min)

### Exercise 1: Clone the Course Repository

**Clone** means "download a copy of a remote repository."

```bash
cd ~
git clone https://github.com/CameronWhiteside/learn-ai-web-dev.git
```

This creates a new folder with all the course files.

```bash
cd learn-ai-web-dev
ls
```

You should see the course structure!

---

### Exercise 2: Explore the Cloned Repo

Look at the commit history:
```bash
git log --oneline
```

These are commits made by others.

Check the remote connection:
```bash
git remote -v
```

This shows where the repo came from (GitHub).

---

### Exercise 3: Create Your Work Folder

Navigate to today's starter folder:
```bash
cd week-01-tools/day-4-git-workflow/starter
```

Create a file with your name:
```bash
touch my-progress.md
```

Open in Windsurf:
```bash
code .
```

Edit `my-progress.md`:
```markdown
# My Week 1 Progress

## Day 1: Terminal
- Learned: cd, ls, mkdir, touch, rm
- Favorite command: [your answer]

## Day 2: Windsurf
- Set up my editor
- Learned keyboard shortcuts
- Started using AI assistant

## Day 3: Git Basics
- Created my first repo
- Made [X] commits
- Understand staging vs committing

## Day 4: Git Workflow
- Cloned the course repo
- About to push my first changes!
```

---

### Exercise 4: Stage and Commit Your Changes

Check what's new:
```bash
git status
```

Stage your file:
```bash
git add my-progress.md
```

Commit:
```bash
git commit -m "Add my Week 1 progress notes"
```

---

### Exercise 5: Push to GitHub

Now let's send your commit to GitHub:

```bash
git push
```

If this is your first time, Git might ask you to log in to GitHub.

**If you get an error about authentication:**

You may need to set up a Personal Access Token:
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` permissions
3. Use this token as your password when Git asks

Or set up SSH keys (ask your instructor for help).

---

### Exercise 6: Verify on GitHub

1. Go to: https://github.com/CameronWhiteside/learn-ai-web-dev
2. Navigate to `week-01-tools/day-4-git-workflow/starter`
3. You should see your `my-progress.md` file!

Your work is now saved in the cloud.

---

### Exercise 7: The Full Workflow

Let's practice the complete workflow one more time.

Make another change to your file - add a "Goals for Week 2" section:

```markdown
## Goals for Week 2
- Learn JavaScript basics
- Write my first functions
- Understand variables and types
```

Now do the full workflow:
```bash
# Check what changed
git status

# See the actual changes
git diff

# Stage changes
git add my-progress.md

# Commit with message
git commit -m "Add Week 2 goals"

# Push to GitHub
git push
```

---

## The Daily Git Workflow

For the rest of this course, you'll follow this pattern:

```bash
# 1. Navigate to today's folder
cd week-XX-topic/day-Y-subtopic/starter

# 2. Do your work
# ... write code, create files ...

# 3. Check what you did
git status

# 4. Stage your changes
git add .

# 5. Commit with a meaningful message
git commit -m "Complete Week X Day Y: [what you did]"

# 6. Push to save in the cloud
git push
```

---

## Command Reference

| Command | What It Does |
|---------|--------------|
| `git clone <url>` | Download a remote repository |
| `git remote -v` | Show remote connections |
| `git push` | Upload commits to remote |
| `git pull` | Download changes from remote |

---

## REVIEW (15 min)

### What You Built

You now can:
- Clone repositories from GitHub
- Make changes locally
- Push your work to the cloud

### Explain-Back

1. What's the difference between `git init` and `git clone`?
2. What does `git push` do?
3. Why do we use remote repositories?

### Quiz

See [QUIZ.md](./QUIZ.md)

### Week 1 Complete!

Congratulations! You've completed Week 1. You now have:
- Terminal skills
- A configured code editor
- Git version control
- Your work saved on GitHub

### Preview Week 2

Next week you'll start writing JavaScript! You'll learn:
- Variables and data types
- Operators and expressions
- Conditionals (if/else)
- Functions

All running locally with Node.js before we ever deploy anything.

---

## Homework (Optional)

1. Update your `my-progress.md` with anything else you learned
2. Commit and push the changes
3. Look at the GitHub repo and see your commits in the history
