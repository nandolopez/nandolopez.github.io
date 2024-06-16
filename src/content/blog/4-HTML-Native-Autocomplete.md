---
title: Generate an autocomplete with native HTML without Javascript
description: In this blog post, we will guide you through the process of fixing the UEFI bootloader in Windows. If you've encountered issues with your Windows system not booting up due to a corrupted or missing UEFI bootloader, this post is for you. We'll walk you through the steps to repair the UEFI bootloader using Windows installation media, ensuring your system gets back to a bootable state. By the end of this post, you'll have the knowledge and confidence to troubleshoot and resolve UEFI bootloader issues in Windows.
index: true
pubDate: 2024-06-15
update_date: 2024-06-15
thumbnail: /svg_topics/Windows.svg
meta_title: Generate an autocomplete with native HTML without Javascript
meta_description: Learn how to fix the UEFI bootloader in Windows with our step-by-step guide. Solve bootloader issues and restore your system to a functional state.
topic: HTML
status: published
tags: 
    - HTML
---

# Generate an autocomplete with native HTML without Javascript

## Contents

## Make an input
Insert an input with an attribute "list" with the name of the list that you want to create

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="autocomplete_input">
        Choose your favourite food
        <input type="text" list="Food">
    </label>
</body>
</html>
```

## Make an Create the datalist
Similar to a Select in a form, create an element called "datalist" and insert as id, the name of the list wrote in input attribute


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <label for="autocomplete_input">
        Choose your favourite food
        <input type="text" list="Food">
    </label>
    <datalist id="Food">
        <option value="Gazpacho">Gazpacho</option>
        <option value="Potatoes omelet">Potatoes omelet</option>
        <option value="Banana">Banana</option>
        <option value="Chicken curry">Chicken curry</option>
        <option value="Pizza">Pizza</option>
        <option value="Salad">Salad</option>
    </datalist>
</body>
</html>
```

## Check the result