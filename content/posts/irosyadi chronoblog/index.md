---
title: irosyadi chronoblog
cover: ./banner.png
date: 2021-01-01
description: About this chronoblog
tags: ['post']
---

Markdown cheatsheet for this chronoblog.

## Markdown

This post is a `markdown` file and you can do everything in it that allows you to do markdown.

### Headers

```md
# This is an <h1> tag

## This is an <h2> tag

###### This is an <h6> tag
```

# This is an `<h1>` tag

## This is an `<h2>` tag

###### This is an `<h6>` tag

### Emphasis

```md
_This text will be italic_  
**This text will be bold**
```

_This text will be italic_  
**This text will be bold**

### Lists

```md
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

### Images

```md
![image-in-post](./image-in-post.jpg)
```

![image-in-post](./image-in-post.jpg)

### Links

```md
[github.com/Chronoblog/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog)
```

[github.com/Chronoblog/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog)

### Blockquotes

```md
As Kanye West said:

> We're living the future so
> the present is our past.
```

As Kanye West said:

> We're living the future so
> the present is our past.

### Inline code

**`js:`**

```js
const someFun = (text) => {
  console.log('some ' + text);
};
someFun('text');
```

**`css:`**

```css
.thing {
  font-size: 16px;
  width: 100%;
}
@media screen and (min-width: 40em) {
  font-size: 20px;
  width: 50%;
}
@media screen and (min-width: 52em) {
  font-size: 24px;
}
```

**`jsx:`**

```jsx
<Thing fontSize={[16, 20, 24]} width={[1, 1 / 2]} />
```

What distinguishes Markdown from many other lightweight markup syntaxes, which are often easier to write, is its readability.
