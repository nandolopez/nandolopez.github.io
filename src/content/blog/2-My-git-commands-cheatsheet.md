---
title: 📄My Git commands cheatsheet
description: Stop searching for commands in GitHub documentation! In this cheatsheet, I will share the commands I use most frequently when working with GitHub.
index: true
pubDate: 2024-06-15
update_date: 2024-06-15
thumbnail: https://api.iconify.design/logos/github-octocat.svg
meta_title: 📄My Git commands cheatsheet
meta_description: Stop searching for commands in GitHub documentation! In this cheatsheet, I will share the commands I use most frequently when working with GitHub.
topic: Github
status: Published
tags:
  - Github
  - git
---
# Github basic usage

### Windows installation
1. Right click in Windows logo / Start menu (bottom)
2. Open Terminal (Administrator)
3. Accept / insert administrator password
4. Type the following command

```Powershell
winget install --id=Git.Git -e
```

# Starting a project
".git" directory for git settings here will save commits and additional information
".gitignore" file to save which file will ignore in moments of upload files to github

In Github webpage, go to your account and press:
1. New repository
2. Fill the form and Create
3. Copy the .git URL
4. After start your project (Java, PHP, Node, Python...) in a terminal, go to directory of your project and type:


```zsh
# Start the project
git init
# Set origin repository
git remote add origin (.git url)
# Remove a origin
git remote remove origin
# Show current origin
git remote -v 
```

## Usage
```zsh
# Start a project
git init

# Check non added files to project
git status

# Add a file to the next commit
git add filename.extenssions

# Add all edited files to the next commit
git add -A

# Create a new commit
git commit -m "Menssage"

# First push
git push --set-upstream origin master

# Make a push
git push origin <branch name>


#Quick way, all in one commant
git add -A && git commit -m "message" && git push
```

## Move over the time
To see the code in a specific time

```zsh
## See all created commits
git log

## Go to specific commit
git checkout <commit hash>

## Go last commit in specific branch
git checkout <branch name>

```

## Resets
Restore the code to a specific time

```zsh
## Back to this spcific commit deleting all future commits
git reset

## Delete all commits but don't delete the current code
git reset --soft <commit hash> 

## Delete all future commits and current code
git reset --hard  (hash del commit al que viajar)

```

## Helps
```zsh
## Commands list
git help

## Command helps
git help <command name>

```

## Branch
For separate the project in pieces for example: Development / production
```zsh
## Show all active branchs
git branch

## Create a new branch
git branch <branch name>

## Change to last commit of specific branch
git checkout <branch name>

## Delete a branch
git branch -d <branch name>

## Create a new branch and move us to this one directly
git checkout <branch name> -b

## Show hidden branchs
git branch -a

## Send all information from a branch to other one
git push --set-upstream <branch origin> <branch destiny> //Pasa los datos de master a la rama especificada
```

## Branch merge / fast-forward
```zsh
## Step 1: Go to parent branch who will merge with the children/s
git checkout <parent branch name>

## Step 2: Merge branch
git merge <child branch name>

## Delete all future commits and current code
git reset --hard  (hash del commit al que viajar)
```


## Tags
```zsh
## Set for example using a version
git tag -a "v1.0" -m "mensaje"

## Other way:
git tag v1.1

## For assign to a commit
git tag -a "v1.0" -m <Commit hash ID>

##For upload the tag to a specific branch
git push <branch name> <tag>
Example: git push origin v1.0

## Upload all tags to github
git push origin --tags //sube todos los tags

##Download a commit
git push <branch name>
```
