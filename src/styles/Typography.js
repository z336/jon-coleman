import { createGlobalStyle } from 'styled-components';
import AlteHaasGroteskRegular from '../assets/fonts/AlteHaasGroteskRegular.ttf';
import Poppins from '../assets/fonts/Poppins-Bold.ttf';

const Typography = createGlobalStyle`

@font-face {
  font-family: Poppins;
  src: url(${Poppins});
  font-style: normal;
  font-weight: 700;
  font-display: block;
}

@font-face {
  font-family: AlteHaasGroteskRegular;
  src: url(${AlteHaasGroteskRegular});
  font-style: normal;
  font-weight: 400;
  font-display: optional;
}

body {
   font-family: AlteHaasGroteskRegular, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
}

h1,
h2,
h3 {
  font-family: Poppins, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-transform: uppercase;
}

h1 {
  font-size: var(--font-size-big);
}

h2 {
  font-size: var(--font-size-biggish);
}

h3 {
  font-size: var(--font-size-bigger);
}

a {
  color: var(--white);
  text-decoration: underline 3.5px;
  transition: all 125ms ease-in-out;
}

a:hover {
  background: var(--white);
  color: var(--black);
  padding: 0.15em;
  margin: -0.15em;
}

a:focus,
button:focus {
  padding: 0.15em;
  margin: -0.15em;
  outline: 3px dashed var(--white);
}

a:focus:not(:focus-visible),
button:focus:not(:focus-visible) {
  outline: none;
}
`;

export default Typography;
