---
title: Update all your windows applications with only one command
description: The best a quick way to update all your apps with only a command in Windows 10 and Windows 11 without additional programs
index: true
pubDate: 2024-06-15
update_date: 2024-06-15
thumbnail: /svg_topics/Windows.svg
meta_title: Update all your windows applications with only one command
meta_description: The best a quick way to update all your apps with only a command in Windows 10 and Windows 11 without additional programs
topic: Windows
status: Published
tags:
  - Windows
  - winget
---
# How to update all your windows installed applications with only a command

The command:

```powershell
winget upgrade --all --accept-package-agreements --include-unknown  
```

Explaination:
	- **winget** is a packager manager similar to "apt-get" in ubuntu or "yum" in fedora. Just a command where you add as parameter "install", "upgrade", "uninstall" and the name of a program and this command install / uninstall / update this specific software
	- **upgrade** upgrade  the program.
	-  **-all**: all software installed in the computer
	-  **--accept-package-agreements**: Accept all agreements of new software
	- **--include-unknown** update software for third party repositories