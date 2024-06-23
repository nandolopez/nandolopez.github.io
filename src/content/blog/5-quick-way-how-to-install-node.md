---
title: "🏃‍♂️Quick guide: how to install Node in your computer (Windows, Linux and Mac)"
description: Stop searching for commands in GitHub documentation! In this cheatsheet, I will share the commands I use most frequently when working with GitHub.
index: true
pubDate: 2024-06-15
update_date: 2024-06-15
thumbnail: /svg_topics/Github.svg
meta_title: "🏃‍♂️Quick guide: how to install Node in your computer (Windows, Linux and Mac)"
meta_description: Quick way of how to install node using
topic: NodeJS
status: draft
tags:
  - Github
  - git
---


## Install in Windows

```powershell
winget install Schniz.fnm
```


## Install in Linux and Mac

```powershell
curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "./.fnm" --skip-shell
```


## Install NodeJS

```powershell
# check available versions
fnm ls

#install version that you want
fnm install 22
```

## Test installation
```shell
node -v
## v22.x.x
```