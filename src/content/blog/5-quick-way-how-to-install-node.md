---
title: "🏃‍♂️FNM: The most faster way to install Node in your computer (Windows, Linux and Mac)"
description: "After try a lot of ways for install I always I had a couple of issues, here I explain how I solved using the node package manager: FNM, that allow you manage different installations of node together"
index: true
pubDate: 2024-06-23
update_date: 2024-06-23
thumbnail: /svg_topics/NodeJS.svg
meta_title: "🏃‍♂️Quick guide: how to install Node in your computer (Windows, Linux and Mac)"
meta_description: "After try a lot of ways for install I always I had a couple of issues, here I explain how I solved using the node package manager: FNM, that allow you manage different installations of node together"
topic: NodeJS
status: Published
tags:
  - node
  - NodeJS
---
# More faster and efficient way to install Node JS with a couple of commands

In my job I need use different versions of node for different projects, for example today (June 2024) the Framework for Sharepoint SPFX requires Node v18 LTS for develop. But for create Vue or current Angular apps, requires 20 as minimal.

Recently I found FNM a package manager that allow you a way for install, uninstall and manage multiple NodeJS versions in your device, and give you ways for do switch between versions. This is useful aside my case for example, test your project in different versions and migrate them to a new stable version.

## Installation
Just open a powershell in Windows (Right click in Windows logo => Terminal (Administrator)) or a Terminal in your Mac / LIniux and type:
## Install in Windows 10 or 11

```powershell
winget install Schniz.fnm
```


## Install in Linux and Mac

```powershell
curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "./.fnm" --skip-shell
```


## Install NodeJS

```shell
# check available versions
fnm ls

# Replace the "22" for the version that you need listed in fnm ls
fnm install 22

# If you have different versions of Node (for example I have also v18) just do the switch with following command
# Change the "18" for the installed version that you want to use in this specific mnode

fnm use 18
```

## Test installation
```shell
node -v
# v22.x.x
```