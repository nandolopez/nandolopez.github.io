---
title: Generate an autocomplete with native HTML without Javascript
description: If you are tired of find Javascript libraries or do CSS tricks for create an autocomplete in native HTML with native performance
index: true
pubDate: 2024-06-22
update_date: 2024-06-22
thumbnail: https://api.iconify.design/logos/html-5.svg
meta_title: Native HTML autocomplete without Javascript, CSS or additional code
meta_description: Discover how to create an autocomplete feature using only HTML, without relying on JavaScript. Improve your website's functionality and accessibility with this simple and effective technique. Learn more here
topic: HTML
status: Published
tags:
  - HTML
---
# Generate an autocomplete with native HTML without Javascript

Recently, for a project be obligated use an autocomplete, the problem was that I found a way that don't affect to performance, due is a big application that will do a heavy load to the browser. Looking for a solution, I found this way that is native in HTML.

As you can see the [compatibility](https://caniuse.com/?search=datalist) of this solution is very high

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
## Final result
[![Final result of search engine](/img/posts/4/result.gif)](/img/posts/4/result.gif)

