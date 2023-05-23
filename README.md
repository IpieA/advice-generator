# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/advice.gif)


### Links

- Solution URL: [https://github.com/IpieA/advice-generator]
- Live Site URL: [https://theadvicegeneator.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

The third party API Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice. I learned to bypass the caching mechanism by generating a random query parameter and appending it to the API URL. This tricks the server into thinking that it's a new request each time even if it is made within the 2 second window.

```js
    const timestamp = Date.now();
    const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
```

## Author

- Frontend Mentor - [@IpieA](https://www.frontendmentor.io/profile/IpieA)
- Twitter - [@iam_Ipie](https://www.twitter.com/iam_Ipie)

