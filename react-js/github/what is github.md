# GitHub Definition and Commands Guide

## What is GitHub?

**GitHub** is a web-based platform that uses Git (a version control system) for hosting and collaborating on software projects. It allows developers to:
- Store code repositories in the cloud
- Track changes to code over time
- Collaborate with other developers
- Review code changes through pull requests
- Manage issues and project workflows
- Contribute to open-source projects

## Essential Git Commands

### Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list                # View all configuration settings
```

### Repository Setup
```bash
git init                          # Initialize a new Git repository
git clone <url>                  # Clone an existing repository
git remote add origin <url>      # Add remote repository
git remote -v                    # View remote repositories
git remote remove <name>         # Remove a remote
```

### Basic Workflow
```bash
git add <file>                   # Stage a file for commit
git add .                        # Stage all changes
git commit -m "message"          # Commit staged changes
git status                       # Check repository status
git log                          # View commit history
git log --oneline                # View compact commit history
git log --graph --all --decorate # View branch graph
```

### Branching
```bash
git branch                       # List local branches
git branch -a                    # List all branches (local and remote)
git branch <branch-name>         # Create a new branch
git branch -d <branch-name>      # Delete a branch safely
git branch -D <branch-name>      # Force delete a branch
git checkout <branch-name>       # Switch to a branch
git checkout -b <branch-name>    # Create and switch to a branch
git switch <branch-name>         # Switch branch (newer syntax)
git switch -c <branch-name>      # Create and switch (newer syntax)
```

### Merging & Rebasing
```bash
git merge <branch-name>          # Merge a branch into current branch
git merge --no-ff <branch-name>  # Merge with merge commit
git rebase <branch-name>         # Rebase current branch
git rebase -i HEAD~n             # Interactive rebase last n commits
```

### Remote Operations
```bash
git push origin <branch-name>    # Push branch to remote
git push origin --all            # Push all branches
git pull origin <branch-name>    # Fetch and merge from remote
git fetch origin                 # Fetch updates from remote
git push -u origin <branch-name> # Push and set upstream
git push origin --delete <branch-name> # Delete remote branch
```

### Undoing Changes
```bash
git restore <file>               # Discard changes in working directory
git restore --staged <file>      # Unstage a file (newer syntax)
git reset HEAD <file>            # Unstage a file
git revert <commit>              # Create a new commit that undoes changes
git reset --soft HEAD~1          # Undo last commit (keep changes staged)
git reset --mixed HEAD~1         # Undo last commit (keep changes unstaged)
git reset --hard HEAD~1          # Undo last commit (discard changes)
git clean -fd                    # Remove untracked files and directories
```

### Stashing
```bash
git stash                        # Temporarily save changes
git stash save "message"         # Stash with description
git stash list                   # List stashed changes
git stash pop                    # Apply and remove latest stash
git stash apply stash@{n}        # Apply specific stash
git stash drop stash@{n}         # Delete specific stash
git stash clear                  # Delete all stashes
```

### Viewing Differences
```bash
git diff                         # Show unstaged changes
git diff --staged                # Show staged changes
git diff <branch1> <branch2>     # Compare branches
git show <commit>                # Show specific commit details
```

### Tags
```bash
git tag <tag-name>               # Create a lightweight tag
git tag -a <tag-name> -m "message" # Create annotated tag
git push origin <tag-name>       # Push specific tag
git push origin --tags           # Push all tags
git tag -l                       # List tags
git show <tag-name>              # Show tag details
```

### Searching & Finding
```bash
git grep "search-term"           # Search for term in files
git log -S "text"                # Find commits with text changes
git blame <file>                 # Show who changed each line
git log --author="name"          # Filter commits by author
```

### Advanced Operations
```bash
git cherry-pick <commit>         # Apply specific commit to current branch
git bisect start                 # Start binary search for bug
git reflog                       # View reference logs
git gc                           # Garbage collection and optimization
git fsck                         # File system consistency check
```

## GitHub-Specific Workflows

### Creating a Pull Request (PR)
1. Create and switch to a feature branch
```bash
git checkout -b feature/my-feature
```

2. Make changes and commit
```bash
git add .
git commit -m "Add new feature"
```

3. Push branch to GitHub
```bash
git push -u origin feature/my-feature
```

4. Open PR on GitHub website
5. Request review and address feedback
6. Merge when approved

### Fork and Contribute to Open Source
```bash
# 1. Fork repository on GitHub, then:
git clone <your-fork-url>

# 2. Add upstream remote
git remote add upstream <original-repo-url>

# 3. Create feature branch
git checkout -b feature-branch

# 4. Make changes and commit
git add .
git commit -m "Description of changes"

# 5. Keep your fork updated
git fetch upstream
git rebase upstream/main

# 6. Push to your fork
git push origin feature-branch

# 7. Create PR on GitHub website
```

### Syncing Fork with Original Repository
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### Resolving Merge Conflicts
```bash
# 1. When pull results in conflicts:
git status                       # See conflicted files

# 2. Edit conflicted files manually (look for <<<<<<, ======, >>>>>>)

# 3. After resolving:
git add <resolved-file>
git commit -m "Resolve merge conflicts"
```

### Amending Commits
```bash
git commit --amend               # Modify last commit message
git commit --amend --no-edit     # Add changes to last commit without changing message
```

## Best Practices

- Write clear, descriptive commit messages
- Commit frequently with logical, atomic changes
- Use branches for features and bug fixes
- Keep branches up-to-date with main/master
- Review code before merging
- Delete merged branches to keep repository clean
- Use meaningful branch names (e.g., `feature/login-page`, `fix/bug-123`)
- Never force push to main/master branch
- Use pull requests for code review
- Add meaningful PR descriptions and reference related issues
