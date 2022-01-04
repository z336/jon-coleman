import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* /// Resets /// */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* If a list has a class, remove default padding and styles */
ul[class],
ol[class] {
  padding: 0;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


/* /// Global settings /// */

:root {
  --black: #111111;
  --white: #f9f9f6;
  --measure: 60ch;
  --gutter: 1rem;
  --font-size-base: 1rem;
  --font-size-bigger: 1.563rem;
  --font-size-biggish: 1.953rem;
  --font-size-big: 2.441rem;
  font-size: calc(1rem + 0.5vw);
}

* {
  max-width: var(--measure);
}

html,
body,
div,
header,
nav,
main,
footer {
  max-width: none;
}

body {
  padding: 1.5rem;
  background: var(--black);
  color: var(--white);
}

::selection {
  background-color: var(--white);
  color: var(--black);
}

button {
  color: var(--white);
  background-color: var(--black);
  border: none;
  cursor: pointer;
  :hover {
    color: var(--black);
    background-color: var(--white);
  }
}

main {
  border-top: 3px solid var(--white);
  border-bottom: 3px solid var(--white);
  padding-top: 3rem;
  padding-bottom: 4rem;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1.5em;
}

article {
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
}

footer {
  padding: 0.5em;
  text-align: center;
}

/* Scrollbar Styles */
body::-webkit-scrollbar {
  width: 12px;
}
html {
  scrollbar-width: thin;
  scrollbar-color: var(--black) var(--white);
}
body::-webkit-scrollbar-track {
  background: var(--white);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--black);
  border-radius: 6px;
  border: 3px solid var(--white);
}
`;

export default GlobalStyles;
