# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Mobile Layout](https://i.imgur.com/ywHQV5z.png)
![Desktop Layout](https://i.imgur.com/I235n26.png)

### Links

- Solution URL: [Github Repository](https://github.com/Sachin9328/time-tracking-dashboard-main)
- Live Site URL: [Live Site](https://sachin9328.github.io/time-tracking-dashboard-main/)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [jQuery](https://jquery.com/) - jQuery

### What I learned

- jQuery focus() Method 
- CSS grid-template property
- jQuery ready() Method

Code Snippets:

```css
/*CSS grid-template property*/ 
.container {
    display: grid;
    gap: 2em;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
        "user work play study"
        "user exercise social self-care"
        "attribution attribution attribution attribution";
    margin: auto auto;    
}
```
```js
//jQuery focus()
$('#user__frequency__weekly').focus();
```
```js
//jQuery ready()
$(document).ready(function() {
    $(daily).hide();
    $(monthly).hide();
});
```

### Continued development

- Learning more JavaScript
- Need to focus more on writing semantic HTML

### Useful resources

- [Kevin Powell](https://www.youtube.com/kepowob) - The videos on his youtube channel helped me get better with CSS

## Author

- Linkedin - [Sachin Jadhav](https://www.linkedin.com/in/sachin-jadhav-651a71127/)
- Github - [@Sachin9328](https://github.com/Sachin9328)
- Frontend Mentor - [@Sachin9328](https://www.frontendmentor.io/profile/Sachin9328)

