# Day 3 Quiz: Git Basics

---

## Questions

### 1. What command initializes a new Git repository?

**Your answer:**

---

### 2. Put these steps in order:

a) `git commit -m "message"`
b) Edit your files
c) `git add .`

**Your answer (write as: b, c, a or similar):**

---

### 3. What does `git status` show you?

**Your answer:**

---

### 4. What's the difference between the staging area and a commit?

**Your answer:**

---

### 5. You made changes to 3 files but only want to commit 2 of them. How do you do this?

a) `git add .` then `git commit`
b) `git add file1.txt file2.txt` then `git commit`
c) You can't - Git always commits everything
d) `git commit file1.txt file2.txt`

**Your answer:**

---

### 6. Write a good commit message for: "Added a new file called about.txt with your bio"

**Your answer:**

---

## Answers

<details>
<summary>Click to reveal answers (try first!)</summary>

1. `git init`

2. **b, c, a** - First edit files, then stage them with `add`, then commit

3. `git status` shows:
   - Which files have changed
   - Which changes are staged (ready to commit)
   - Which files are untracked (new files Git doesn't know about)

4. **Staging area** is where you prepare changes before committing. You can choose which changes to include. **Commit** is the actual saved snapshot - permanent record in history.

5. **b) `git add file1.txt file2.txt` then `git commit`** - You stage only the files you want, then commit

6. Good examples:
   - `Add personal bio in about.txt`
   - `Add about.txt with bio`
   
   Bad examples:
   - `added stuff`
   - `new file`

</details>

---

## Self-Assessment

- [ ] I can initialize a Git repository
- [ ] I understand the staging area concept
- [ ] I can stage and commit changes
- [ ] I can view commit history
- [ ] I write meaningful commit messages
