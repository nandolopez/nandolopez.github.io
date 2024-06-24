---
title: 🔍 How to build a search engine for your content in Astro with React
description: Building this blog, I saw neccesary create a small search engine for serve a quick way for locate old and specific posts. For do that, I used react as javascript library for create a search component and the feature of Astro of create smart JSON endpoints for use as REST API.
index: true
pubDate: 2024-06-16
update_date: 2024-06-16
meta_title: 🔍 How to build a search engine for your content in Astro with React
meta_description: Comprehensive Tutorial How to build a Content Search Engine in Astro with React
topic: Astro
status: Published
tags:
  - Astro
  - node
  - react
---
# 🔍 How to build a search engine for your content in Astro with React

Building this blog, I saw necessary create a small search engine for serve a quick way for locate old and specific posts. For do that, I used react as JavaScript library for create a search component and the feature of Astro of create smart JSON endpoints for use as REST API.

How I’ve done. Here I’ll do a replication of the steps that I’ve done for create this project.

## Contents

## Creating the project

If you don't have created the project. In a termina navigate where you want create the project and type the command for create the project.

```shell
npm create astro@latest
```

Reply to the questions, in my case are:

- Name of the project
- Use blog template for have allow the "content" directory and with dummy data by default.
- Use typescript: Yes
- Strict mode: yes for avoid final JavaScript variables inconssistences.
- Install dependences: yes
- Initialize git: yes for generate the git link that you can get in the final of this post.

```shell
Launch sequence initiated.

Where should we create your new project?
	tutorial-astro-search-engine

How would you like to start your new project?
	Use blog template

Do you plan to write TypeScript?
	Yes

How strict should TypeScript be?
	Strict

Install dependencies?
	Yes

Initialize a new git repository?
	Yes
```

Now we are going to open the directory

```shell
cd tutorial-astro-search-engine
```

Then we are going to add React as JavaScript library for interactions,

```shell
npx astro add react
```

Press Y for accept the following questions:

- Add React configurations to file astro.config.mjs this is necessary for Astro recognize ".tsx" extensions and react components.
- Add configurations to tsconfig.json, this is for allow to typescript recognize React scripts.

```shell

 Astro will make the following changes to your config file:

 ╭ astro.config.mjs ─────────────────────────────╮
 │ import { defineConfig } from 'astro/config';  │
 │                                               │
 │ import react from "@astrojs/react";           │
 │                                               │
 │ // https://astro.build/config                 │
 │ export default defineConfig({                 │
 │   integrations: [react()]                     │
 │ });                                           │
 ╰───────────────────────────────────────────────╯

√ Continue? ... yes

   success  Added the following integration to your project:
  - @astrojs/react

  Astro will make the following changes to your tsconfig.json:

 ╭ tsconfig.json ──────────────────────────╮
 │ {                                       │
 │   "extends": "astro/tsconfigs/strict",  │
 │   "compilerOptions": {                  │
 │     "jsx": "react-jsx",                 │
 │     "jsxImportSource": "react"          │
 │   }                                     │
 │ }                                       │
 ╰─────────────────────────────────────────╯

√ Continue? ... yes

```

And TailwindCSS for have a quick GUI design (you can use the library that you want).

```shell
npx astro add tailwind
```

Press Y for accept the following requirement:

- Execute npm install... for install Tailwindo in your project.
- Generate Tailwind configuration file (if we want customize CSS classes to our needs).
- Add configurations to file Astro.config.mjs for Astro detect the Tailwind classes.

```shell

Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭──────────────────────────────────────────────────────────╮
 │ npm install @astrojs/tailwind@^5.1.0 tailwindcss@^3.4.4  │
 ╰──────────────────────────────────────────────────────────╯

? Continue? » (Y/n)
√ Continue? ... yes
✔ Installing dependencies...

  Astro will generate a minimal ./tailwind.config.mjs file.

√ Continue? ... yes

  Astro will make the following changes to your config file:

 ╭ astro.config.mjs ─────────────────────────────╮
 │ import { defineConfig } from 'astro/config';  │
 │ import react from "@astrojs/react";           │
 │                                               │
 │ import tailwind from "@astrojs/tailwind";     │
 │                                               │
 │ // https://astro.build/config                 │
 │ export default defineConfig({                 │
 │   integrations: [react(), tailwind()]         │
 │ });                                           │
 ╰───────────────────────────────────────────────╯

√ Continue? ... yes
```

Finally execute the development server for see results

```shell
npm run dev
```

## Generating the JSON endpoint

Under "pages" directory, we are going to create a file called "search.json.ts", inside we are going to do a query of get all the posts. Finally in production this file will create a JSON file in following path:

Example:: yoursite.com/search.json

With all posts information that we are going to need for your search engine.

Note: Don't worry about performance, I understand that load all post each time that a website is rendering will reduce the performance. Then I'll show you to potential solutions for avoid this issue.

```js
/*
  file /src/pages/search.json.ts
*/

//Library for get all posts collection
import { getCollection } from "astro:content";

// Function for get the JSON file
export async function GET() {
	//Get all posts from collection named "blog"
	const Posts = (await getCollection("blog")).map((post: any) => {
		const data = post.data;
	    /*
		    We return the JSON, limiting de data for:
		    - Avoid the final file size
		    - Reduce the search time in each query
		 */
	    return {
	      title: data.title,
	      description: data.description,
	      slug: post.slug
	    };
	});
	//Finally we return the object in a JSON string
	return new Response(JSON.stringify(Posts));

}
```

## Performance solutions:

1. **Easy way** (this tutorial): make the API request to JSON when user set the focus in input. Here on focus event, we must do a check if the JSON is loaded, avoid multiples load.
	1. Here you can create a variant with autocomplete like this one.
2. **Hard way** (that I used in this blog): Have a button with the Magnifier making clear that is a search button. On press it:
   1. Do the API Request for get the posts.
   2. Show a modal with:
      1. Search input.
      2. List of results results.
      3. Close button that reset all component.


For this second way you can check the code in my [Github](https://github.com/nandolopez/nandolopez.github.io/blob/main/src/components/react/SearchComponent.tsx)

## Creating the React search component

Under components directory, we are going to create a subdirectory called "react" and inside we are going to create a file called "SearchComponent.tsx".

```shell
cd src/components
mkdir react
cd react
touch SearchComponent.tsx
```

Normally on start of each component I want have a big comment with elements that I'll going to need and have a good planification of stuff that I'll need. Here I use:

- @HTML (element): HTML element.
- @Event (event name ) for have a initial idea of that will do the HTML element.

In this case:

```js
// src/components/react/SearchComponent.tsx
/**
 * @HTML Input
 *  @Event onFocus
 *      Check if JSON Is loaded (.lentgh > 0)
 *      If not make Fetch of /seach.json in an array (useState) called Posts
 *  @Event onChange:
 *      Save search input in a variable (useState) called InputSearch
 *      If input don't has information, set list of results in blank

 * @HTML List of results
 *      Show mapped JSON formatted with links and all stuff
 */
 const SearchComponent = () => {return (<></>)}
 export default SearchComponent;
```

For see something I'll add a couple of lines for load the Search component for example in the main page when Astro start placed in: 
- Added the import of Search component.
- Include Search component in HTML DOM.

<br />

**VERY IMPORTANT: DON'T FORGET WRITE THE ATTRIBUTE client:load**


```html
// /src/pages/index.astro
---
import BaseHead from '../components/BaseHead.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
👉import SearchComponent from "../components/react/SearchComponent";
---
<!doctype html>
<html lang="en">
    <head>
        <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
    </head>
    <body>
        <Header />
        👉<SearchComponent client:load>        
        <main>
        ....
```

Returning to Search Component file, now I'll declare necessary variables

```tsx
// src/components/react/SearchComponent.tsx

👉 import { useState } from "react";
//...
 
 const SearchComponent = () => {
  // Text of search input
  👉 const [InputSearch, setInputSearch] = useState("");
  // Posts list to filter
  👉 const [Posts, setPosts] = useState([]);
  
  return (<></>)
 }
 export default SearchComponent;
```

Now I'll create the initial HTML, then you can decorate as you want with Tailwindcss, for make a preview of the search results and how will see everything

```tsx
// src/components/react/SearchComponent.tsx

 import { useState } from "react";
//...
 
 const SearchComponent = () => {
 //...
 return (
    <>
      <div className="flex flex-col justify-center mx-auto my-4 w-2/4">
        <label
          htmlFor="seach-input"
          className=" bg-white border-b-2 border-black w-full"
        >
          <span>🔍</span>
          <input type="search" className="border-none" id="seach-input" />
        </label>
        <section className="bg-white my-4 p-4">
          <article className="border-b-2 border-teal-400 mb-2">
            <a href="#">Link to the results</a>
            <p>Short description of the post for test it.</p>
          </article>
          <article className="border-b-2 border-teal-400 mb-2">
            <a href="#">Link to the results</a>
            <p>Short description of the post for test it.</p>
          </article>
          <article className="border-b-2 border-teal-400 mb-2">
            <a href="#">Link to the results</a>
            <p>Short description of the post for test it.</p>
          </article>
        </section>
      </div>
    </>
  );
}
```
[![First preview](/img/posts/3/First-preview.jpg)](/img/posts/3/First-preview.jpg)


## Making the logic

### On Search input get the focus

As we saw, each time that seach input will get the focus. First will check if we have filled Post useState and if not, will do the request. And in next step, we add the onFocus attribute to input


```tsx
// src/components/react/SearchComponent.tsx

 import { useState } from "react";
//...
 
const SearchComponent = () => {
//...
	const onFocusInputSearch = async () => {
	    //If posts is clear, get the posts
	    if (Posts.length === 0) {
		
	      const response = await fetch("/search.json");
	      const data = await response.json();
	      setPosts(data);
	    }
	  };
//...
 return (
    <>
	    {/* ... */}
          <input
			type="search"
			className="border-none"
			id="seach-input"
			👉onFocus={onFocusInputSearch}
			/>
	    {/* ... */}
    </>
  );
}
```

### On Search input change
This Step will be a quick function for add the terms wrote in search input in InputSearch useState (the rest of stuff should do automatically in next steps)

```tsx
// src/components/react/SearchComponent.tsx

 import { useState } from "react";
//...
 
const SearchComponent = () => {
//...
 👉 const onChangeInputSearch = (event: string) => setInputSearch(event);
	
	const onFocusInputSearch = async () => {
	    //...
	  };
//...
 return (
    <>
	    {/* ... */}
          <input
			type="search"
			className="border-none"
			id="seach-input"
			onFocus={onFocusInputSearch}
			👉onChange={($event) => onChangeInputSearch($event.target.value)}
			/>
	    {/* ... */}
    </>
  );
}
```

### Showing search results

In first time we are going to show all posts without filter it nothing

```tsx
// src/components/react/SearchComponent.tsx

 import { useState } from "react";
//...
 
const SearchComponent = () => {
//...
 👉 const onChangeInputSearch = (event: string) => setInputSearch(event);
	
	const onFocusInputSearch = async () => {
	    //...
	  };
//...
 return (
    <>
	    {/* ... */}
         <section className="bg-white my-4 p-4">
          {
           Posts.map((post: any) => (
              <article className="border-b-2 border-teal-400 mb-2">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
                <p>{post.description}</p>
              </article>
            ))
            }
        </section>
	    {/* ... */}
    </>
  );
}
```

Then we are going to add a filter ==between Posts and .map== take in consideration set everything in lowercase for avoid don't locate posts with same word in high and low case variants

```tsx
// src/components/react/SearchComponent.tsx

 import { useState } from "react";
//...
 
const SearchComponent = () => {
//...
 👉 const onChangeInputSearch = (event: string) => setInputSearch(event);
	
	const onFocusInputSearch = async () => {
	    //...
	  };
//...
 return (
    <>
	    {/* ... */}
         <section className="bg-white my-4 p-4">
          {
           Posts
           //👉 Here is going the filter
           .filter((post: any) => {
              return (
                post.title.toLowerCase().includes(InputSearch.toLowerCase()) ||
                post.description.toLowerCase().includes(InputSearch.toLowerCase()) ||
                post.slug.toLowerCase().includes(InputSearch.toLowerCase())
              );
            })
           .map((post: any) => (
              <article className="border-b-2 border-teal-400 mb-2">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
                <p>{post.description}</p>
              </article>
            ))
            }
        </section>
	    {/* ... */}
    </>
  );
}
```

Finally we add a conditional rendering before Post (initial condition followed of an &&) for don't show results while InputSearch is blank.

```tsx
// src/components/react/SearchComponent.tsx

 import { useState } from "react";
//...
 
const SearchComponent = () => {
//...
 👉 const onChangeInputSearch = (event: string) => setInputSearch(event);
	
	const onFocusInputSearch = async () => {
	    //...
	  };
//...
 return (
    <>
	    {/* ... */}
         <section className="bg-white my-4 p-4">
          {
          //👉 Here is going condition
          InputSearch.length > 0 && Posts           
           .filter((post: any) => {
              return (
                post.title.toLowerCase().includes(InputSearch.toLowerCase()) ||
                post.description.toLowerCase().includes(InputSearch.toLowerCase()) ||
                post.slug.toLowerCase().includes(InputSearch.toLowerCase())
              );
            })
           .map((post: any) => (
              <article className="border-b-2 border-teal-400 mb-2">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
                <p>{post.description}</p>
              </article>
            ))
            }
        </section>
	    {/* ... */}
    </>
  );
}
```


## Final result

A quick and simple search engine for your Astro project.
[Check the code in my Github](https://github.com/nandolopez/tutorial-astro-search-engine)

<br/>

[![Final result of search engine](/img/posts/3/result.gif)](/img/posts/3/result.gif)




