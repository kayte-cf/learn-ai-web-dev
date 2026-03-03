# Day 1: Terminal Basics

> The terminal is your command center. Today you'll learn to navigate your computer like a developer.

## Learning Objectives

By end of this session, you will:
- [ ] Navigate directories with `cd`
- [ ] List files with `ls`
- [ ] Create files and folders
- [ ] Understand file paths
- [ ] Feel comfortable in the terminal

---

## INTRO (15 min)

### What is the Terminal?

The terminal (also called command line, shell, or console) is a text-based way to control your computer. Instead of clicking icons, you type commands.

**Why use it?**
- Faster once you know the commands
- More powerful than clicking
- Required for development tools
- Same commands work on any computer

### Opening the Terminal

**Mac:** 
- Spotlight (Cmd + Space) → type "Terminal" → Enter
- Or: Applications → Utilities → Terminal

You should see something like:
```
yourname@computer ~ %
```

This is your **prompt**. It's waiting for you to type a command.

---

## BUILD (30 min)

### Exercise 1: Where Am I?

When you open terminal, you start in your **home directory**.

Type this and press Enter:
```bash
pwd
```

**pwd** = "print working directory" - shows your current location.

You should see something like `/Users/yourname`

---

### Exercise 2: What's Here?

List the files in your current directory:
```bash
ls
```

You'll see folders like Desktop, Documents, Downloads, etc.

Try with more details:
```bash
ls -la
```

The `-la` flags show:
- `-l` = long format (more details)
- `-a` = all files (including hidden ones starting with `.`)

---

### Exercise 3: Moving Around

Change to your Desktop:
```bash
cd Desktop
```

Verify you moved:
```bash
pwd
```

List what's on your Desktop:
```bash
ls
```

Go back to home directory:
```bash
cd ~
```

The `~` is a shortcut for your home directory.

---

### Exercise 4: Creating Things

Let's create a folder for this course:
```bash
mkdir learn-to-code
```

Move into it:
```bash
cd learn-to-code
```

Create a file:
```bash
touch my-first-file.txt
```

Verify it exists:
```bash
ls
```

---

### Exercise 5: File Paths

There are two types of paths:

**Absolute paths** - Start from root (`/`)
```bash
cd /Users/yourname/Desktop
```

**Relative paths** - Start from where you are
```bash
cd Desktop        # If you're in /Users/yourname
cd ..             # Go up one level
cd ../Documents   # Up one, then into Documents
```

Practice:
```bash
# Start from home
cd ~

# Go to Desktop
cd Desktop

# Go up one level
cd ..

# Where are you now?
pwd
```

---

### Exercise 6: Reading and Removing

Add text to your file (we'll use a simple method):
```bash
echo "Hello, I'm learning to code!" > my-first-file.txt
```

Read the file:
```bash
cat my-first-file.txt
```

Create another file:
```bash
touch delete-me.txt
```

Remove it:
```bash
rm delete-me.txt
```

**Warning:** `rm` is permanent. There's no trash can. Be careful!

---

### Exercise 7: Tab Completion

This will change your life.

Type this but DON'T press Enter:
```bash
cd Desk
```

Now press **Tab**.

The terminal autocompletes to `cd Desktop/`

Tab completion works for:
- File names
- Folder names
- Commands

---

## Command Reference

| Command | What It Does | Example |
|---------|--------------|---------|
| `pwd` | Print working directory | `pwd` |
| `ls` | List files | `ls`, `ls -la` |
| `cd` | Change directory | `cd Desktop`, `cd ..`, `cd ~` |
| `mkdir` | Make directory | `mkdir my-folder` |
| `touch` | Create empty file | `touch file.txt` |
| `rm` | Remove file | `rm file.txt` |
| `cat` | Display file contents | `cat file.txt` |
| `clear` | Clear terminal screen | `clear` |
| `open` | Open file/folder (Mac) | `open .` |

---

## REVIEW (15 min)

### What You Built

Today you learned to:
- Navigate your file system
- Create and delete files
- Understand paths
- Use tab completion

### Explain-Back

In your own words, explain to your instructor:
1. What does `cd ..` do?
2. What's the difference between `ls` and `ls -la`?
3. Why is tab completion useful?

### Quiz

See [QUIZ.md](./QUIZ.md)

### Preview Tomorrow

Tomorrow you'll set up Windsurf, your AI-powered code editor. You'll learn how to:
- Open projects from terminal
- Use AI to help you code
- Navigate files visually AND via terminal

---

## Homework (Optional)

Practice these commands until they feel natural:
1. Create a folder called `practice`
2. Inside it, create three files: `one.txt`, `two.txt`, `three.txt`
3. List them
4. Remove `two.txt`
5. Go back to your home directory
6. Delete the entire `practice` folder with `rm -r practice`

**Note:** `rm -r` removes directories. The `-r` means "recursive" (delete everything inside too).
