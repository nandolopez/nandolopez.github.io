---
title: Fix Windows bootloader
description: Descripcción de la entrada completa
index: true
pubDate: "2024-06-15"
update_date: "2024-06-15"
thumbnail: /svg_topics/Windows.svg
meta_title: Título meta del cuarto post
meta_description: Descripción meta del cuarto post
topic: Windows
status: published
tags: cuarto_post
---

# Fix Windows bootloader

```powershell
bcdedit /export newbcd
copy newbcd bcdbackup
bcdedit /enum firmware
bcdedit /store
newbcd /delete #numentrada
bcdedit /import newbcd /clean
```
