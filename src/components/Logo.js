import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Brand = styled.div`
  place-self: center;
  max-width: 8rem;
  a {
    text-decoration: none;
    :hover {
      background-color: transparent;
      color: currentColor;
    }
  }
`;

export default function Logo() {
  return (
    <Brand>
      <Link to="/" tabIndex="-1">
        <svg
          version="1.0"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 500v500h1000V0H0v500zm982-369.5V240H21V21h961v109.5zm0 488.5v359H21V260h961v359z"
            fill="currentColor"
          />
          <path
            d="M174.6 105.1c-12.1 2-24.9 12-30.4 23.6-2.5 5.3-2.7 6.9-2.7 17.8 0 11.4.2 12.3 3.2 18.7 4.1 8.6 10.9 15.5 19.8 19.9 6.7 3.3 7.4 3.4 18.5 3.4 11.4 0 11.7-.1 19.2-3.8 12.7-6.2 20.8-17.2 22.7-30.9 3.4-24.1-11.2-45.1-34-48.8-7.2-1.1-9.3-1.1-16.3.1zm17.3 25.7c5.4 4 6.6 6.8 6.6 15.7 0 9-1.1 11.6-6.9 15.9-3.9 2.9-13.3 2.9-17.3 0-8.1-5.8-9.7-21.3-3-28.9 4.6-5.4 15.1-6.7 20.6-2.7zM465.1 105.1c-6.9 1.2-18.2 7.1-22.5 11.9-14.9 16.5-15.4 42.1-1 58 18.1 20 51.9 18.4 66.7-3.2 5.8-8.5 7.1-12.8 7.1-25.4.1-10.8 0-11.2-3.6-18.6-6-11.9-15.7-19.6-28.4-22.3-7.7-1.6-10.4-1.7-18.3-.4zm17.3 25.7c9.3 5.4 9.5 24.9.4 31.5-3.9 2.9-12.3 3.3-16.8.9-9.5-5.2-11.3-22.8-3.1-30.6 1.5-1.5 4.1-3.1 5.7-3.6 3.8-1.2 10.1-.4 13.8 1.8zM372.6 106.1c-6.2 1.5-15.5 6.9-19.2 11.3-13.6 15.9-13.6 43.4.1 59.4 2.3 2.6 6.4 5.5 11.3 7.9 7.5 3.7 7.8 3.8 19.1 3.8 10.9 0 12-.2 18.2-3.1 3.7-1.8 8.5-4.9 10.8-6.9 4.2-3.8 9.6-13.5 10.7-19.3l.7-3.2h-27.1l-2.6 3.5c-4.8 6.3-14.7 7.2-19.9 1.7-3.5-3.7-4.7-7.3-4.7-14.2 0-6.9 1.2-10.5 4.7-14.2 5.2-5.5 15-4.6 20 1.7l2.8 3.5h26.8l-.7-3.2c-2.7-13.4-13.5-24.7-27.1-28.3-6.4-1.6-17.7-1.8-23.9-.4zM106 133.8c0 23.5-.2 28.1-1.6 30-2.8 4.1-7.9 1.9-9.1-3.9l-.5-2.9h-26l.6 2.7c.2 1.6.8 4.6 1.1 6.8 1.4 8.2 6.9 15.2 15.5 19.5 6.3 3.2 20.6 4 28 1.5 6.8-2.2 12.1-7.1 15.1-13.8 2.3-5 2.4-6.1 2.7-36.5l.4-31.2H106v27.8zM235 147v41h26v-20.3l.1-20.2 13.2 20.2 13.2 20.2 13.3.1H314v-82h-26l-.2 20.4-.3 20.4-13-20.2-13.1-20.1-13.2-.3-13.2-.3V147zM525 147v41h51v-18.9l-12.2-.3-12.3-.3-.3-31.3-.2-31.2h-26v41zM584 147v41h55v-19.9l-14.2-.3-14.3-.3v-11l12.8-.3 12.7-.3v-18.8l-12.7-.3-12.8-.3v-10l14.3-.3 14.2-.3V106h-55v41zM649 147v41h26v-19.3c0-10.7.4-18.5.9-17.7.5.8 3.2 9.5 6.2 19.3l5.4 17.7 11.5-.2 11.4-.3 6.1-19.5 6-19.5.3 19.7.2 19.8h26v-82l-16.2.2-16.3.3-8.5 23.7c-4.6 13-8.7 23.5-9 23.2-.3-.3-4.3-11-9-23.7l-8.6-23.2-16.2-.3-16.2-.2v41zM769.6 146.2c-8 22.2-14.6 40.6-14.6 41 0 .5 6 .8 13.4.8h13.4l2-5.8 1.9-5.7H813.4l1.7 5.5 1.6 5.5 13.7.3c7.5.1 13.6-.1 13.6-.5s-6.6-18.9-14.6-41.1L814.7 106h-30.4l-14.7 40.2zm33.4-1.3c1.6 5.4 3 10.1 3 10.5 0 .3-3.1.6-6.9.6h-7l3.6-10.5c1.9-5.8 3.6-10.5 3.8-10.5.2 0 1.8 4.4 3.5 9.9zM850 147v41h26l.2-20.3.3-20.2 13.4 20.2 13.3 20.3H930v-82h-26v20c0 11-.3 20-.7 20-.5 0-6.6-9-13.7-20l-12.9-20H850v41zM489.6 294.1c-6 4.7-5.6-3.9-5.6 136.6v128.9l-27.1 18.9c-14.8 10.5-29.7 20.9-33 23.3-3.3 2.3-6.3 4-6.8 3.8-.5-.3-1.1-2.9-1.5-5.8-.4-2.9-3-17.2-5.7-31.7l-4.9-26.4.9-17.6c2.5-47.9-5.1-82.3-21.9-99.1-14.9-14.9-39.1-17.1-62.5-5.6-3.8 1.9-11.3 5.1-16.5 7.2-32.3 12.6-68.8 35.3-98 61-54.5 47.9-89.6 109-104 180.9-4.7 24-6.1 38.9-8.4 92-.9 21.4 2.4 67.5 6 85.3 4.1 20 11.3 37.9 19.2 47.9 5.6 7.1 13.6 12.9 22.4 16.4 6.5 2.5 8.6 2.8 18.4 2.9 9.8 0 12.9-.5 28.5-4.4 26.1-6.7 30.5-7.1 71.4-7.1 38.7.1 52.3 1.1 79.2 6.1 7.3 1.3 15.4 2.4 18 2.4 10.9 0 23.8-5.8 33.2-14.9 19.9-19.4 32-53.2 37.3-105.1 1.6-15.9 1.6-69.4 0-89.5-1.5-18.2-4.9-50-6.1-57.5-.7-3.9-.6-5.8.2-6.7 1.1-1 48.8-34.7 66.9-47.2 4.3-2.9 8.3-5.1 9-4.8.7.2 18.7 12.7 40 27.6 21.2 14.9 39.1 27.1 39.7 27.1 1.5 0 1.4 1.1-.9 20.7-4 35-5.3 56.1-5.3 88.3 0 25.8.4 34.7 2.1 49 5.8 48.6 17.2 79 36.4 97.6 7.8 7.6 13.8 11.2 23.2 13.9 7.1 2.1 13.5 1.7 33.6-1.8 8-1.4 22.2-3.3 31.6-4.1 22.4-2.1 65.5-2.1 82.6-.1 13.7 1.6 13.5 1.5 34.4 6.9 23.7 6 39.2 4.8 53-4.3 20.3-13.2 30.8-38.9 35.9-88 3.2-30.3 1.6-98.7-3.1-130.1-8.9-60.1-31-112-67.5-158.1-10.2-13-38.3-41.1-50.9-51-28.1-22.1-59.4-40.8-84.7-50.5-5.4-2-12.8-5.2-16.5-7.1-28.5-14.1-53.5-10.5-69 9.9-8.3 11-14.4 29.6-16.8 51-1.1 11-1.2 41.6-.2 52.5.8 7.3-.1 13.1-7.2 48.3-.9 4.1-2.3 12-3.1 17.5-.9 5.5-1.8 10.2-2.1 10.4-.2.3-1.7-.4-3.2-1.5-3.5-2.6-36.6-25.9-54.9-38.7l-14.3-10V430.8c0-140.6.4-132-5.6-136.7-1.9-1.5-4.1-2.1-7.9-2.1-3.8 0-6 .6-7.9 2.1zm174.9 148.4c4.4 1.8 14.1 5.9 21.5 9 76.9 32 137.8 91.3 167.6 163.2 19.3 46.3 26.5 93.9 25.1 165.8-.7 39.6-3.9 63.6-10.8 81.6-9 23.4-19.8 27.5-51.8 19.5-19.9-5-29.5-6.4-52.9-7.8-32.3-1.9-75.5 1-107.6 7.2-6.3 1.2-12.1 1.8-14 1.5-20.2-4.3-35.8-39.4-41-92.6l-1.3-13.3 8.8-20.4c4.9-11.3 9.1-20.7 9.4-21 1.5-1.5 16.9 20.3 23.1 32.7 10.6 21.4 14.9 41.9 13.7 64.7l-.6 10 3.5 3.7c3.1 3.2 4.1 3.7 8.1 3.7 5.5 0 10-3.3 11.8-8.7 1.6-5 .6-36.5-1.6-46.3-6.3-28.6-21.5-56.7-43.2-80.1l-4.3-4.6 3.8-8.6c2-4.8 4.3-8.7 5-8.7 2.1 0 36.1 34.6 45.6 46.5 21.2 26.5 33.7 50.1 37.5 71.1 1.4 7.2 3.3 10.2 7.8 12 6.5 2.7 14.6-1.4 15.9-8.1.8-4.4-1.8-17.3-5.6-27.6-6.4-17.3-20.3-41.4-32.4-56.3-2.6-3.2-4.4-6.2-3.9-6.6 3.6-3.4 27.2-4 38.3-.9 13.3 3.7 20.3 8 32.3 20.2 6.4 6.4 12 11.2 13.7 11.7 9.4 2.7 17.8-7.3 13.6-16.2-2.2-4.7-13.5-16.8-20.7-22.4-25-19.3-57.5-24.3-90-13.9l-5.6 1.8-13.1-12.9c-7.2-7.1-15.5-14.9-18.6-17.4-3-2.5-5.5-4.8-5.6-5.1 0-.3 1.4-3.6 3-7.3l3-6.6h5.3c7.7 0 37.1 3.6 53.7 6.6 29.2 5.2 49.8 10.8 67.5 18.2 14.6 6.1 23.5 11.3 30.9 18.2 7.3 6.8 9.4 8 14 8 2.5 0 4.5-.9 7-3 6.9-6.1 5.7-12.9-3.7-21.6-17.4-16.1-45.2-28.4-85.7-38-8-1.9-15.5-3.4-16.7-3.4-3.2 0-3.7-1.7-1.4-4.6 5.4-6.9-.4-18.4-9.2-18.4-4.5 0-16.1-4.1-24.7-8.7-10.9-5.9-24-14.5-24-15.9 0-.5 5.4-3 12-5.3l11.9-4.4 8.3 4.3c33 17.1 43.4 24.4 50.1 35 2.5 3.9 8.3 6.6 12.2 5.6 1.4-.4 3.9-1.9 5.6-3.4 8.6-7.6 2.5-20.4-16.6-34.7-6.9-5.2-23.4-15.1-32.7-19.6-2.7-1.3-4.8-2.8-4.8-3.5 0-1.2 15.3-8.6 25.5-12.3 3.3-1.2 6.7-2.8 7.5-3.4 9.1-7 4.6-21.7-6.5-21.7-2.8 0-20.5 7-30.7 12.1-8.9 4.5-16.2 9.5-21.3 14.6-3.8 3.8-6.5 5.2-20.2 10.3-8.7 3.2-17.5 6.5-19.6 7.4-7.1 3.1-27.3 7-28.2 5.6-.3-.4 1.1-8.8 3-18.6l3.5-17.8-1.1-13.5c-.7-8.2-.9-20.4-.5-30.6 1.6-41.8 11.7-62.2 29.6-59.9 2.5.3 8.1 2.1 12.5 3.9zm-304.7-2.1c9 4.7 15.4 19.7 18.2 42.6 1.2 10.3 1.2 40.7 0 51-.8 6.7-.5 9.5 2.6 25.7 1.9 10.1 3.3 18.7 2.9 19.2-1.3 2.1-20.1-2-34.1-7.4-6.2-2.4-15.3-5.8-20.3-7.6-7.4-2.5-10.1-4.1-13.9-7.8-8.4-8.2-22.9-16.4-43.4-24.5-7.7-3-9.8-3.2-14.2-1.1-7.9 3.8-8.8 14.7-1.6 20.2.8.6 4.2 2.2 7.5 3.4 10 3.6 25.5 11.1 25.5 12.3 0 .6-5.1 3.8-11.2 7.1-29.9 16-46.7 31.3-46.8 42.6 0 4.1 4 9.2 8.6 10.8 3.6 1.3 4.4 1.2 7.8-.4 2.2-1 4.6-3.2 5.5-4.8 3.1-5.8 6.5-8.9 17.5-16.1 10.2-6.7 38.9-22.6 40.8-22.6 1.3 0 23.2 8.1 24.1 9 1 .8-13.9 11.1-23.8 16.4-8.9 4.8-20.2 8.6-25.4 8.6-3.1 0-4.9.7-7.3 2.9-3 2.6-3.3 3.5-3.3 8.4 0 4.5.5 6 2.4 8.1l2.4 2.5-2.4.5c-34.1 7.1-57.7 14.4-76.3 23.5-18.9 9.2-34.5 21.9-36 29.2-1.3 6.5 4.6 13.9 11.1 13.9 4.3 0 7.9-1.9 12.3-6.5 15.4-16.2 57.8-31.5 109.5-39.4 18.7-2.9 41.4-5.3 45.9-4.9 3.7.3 4 .5 6.9 7.1l3 6.9-4.9 4.1c-2.7 2.2-11.1 10.2-18.6 17.6L317 704.4l-6.7-2.1c-3.8-1.2-9.5-2.7-12.8-3.4-8.6-1.9-31.3-1.6-40.3.4-16.7 3.9-32.7 12.9-45.3 25.6-9.4 9.6-13.4 16-12.5 20.2 1.5 7.4 8.9 12.3 15.1 9.9 1.5-.6 7.5-5.9 13.4-11.9 8.2-8.3 12.2-11.6 17.8-14.5 9.7-5 20.6-7.6 31.3-7.6 8.5 0 19.7 1.6 21.3 3 .5.4-2 4.5-5.6 9.1-17.8 23.1-31 49.4-35.2 69.8-.9 4.6-1.4 9.8-1.1 11.7.7 3.6 5.2 8 9.1 9 5.3 1.3 12.9-3.6 13.9-9 5.2-27 16-47.6 40.5-77.6 9.6-11.9 41.4-44 43.5-44 .7 0 2.9 3.9 5 8.6l3.6 8.7-5.8 6.6c-24.6 28.1-37.1 52.6-42.3 82.9-2.1 12.6-2.6 35.2-.9 41.4 1.5 5.4 6.1 8.8 11.7 8.8 3.9 0 5-.5 7.9-3.6l3.4-3.5v-16.1c0-27.7 6-48.3 20.7-71.6 4.4-6.9 14.5-20.1 15.4-20.2.4 0 3.9 7.5 7.9 16.8 4 9.2 8.3 18.7 9.5 21.2 2.2 4.4 2.2 4.8 1 17.5-4.7 48.4-18.6 82.7-36.8 90.6-5.4 2.3-5.4 2.3-20.7-.6-15.7-2.9-39.7-5.4-61.7-6.5-36-1.8-67.6.4-91.7 6.5-30.2 7.6-38.8 6.8-48.4-4-15-17.1-21.7-69.8-18.2-143 1.3-25.4 3.2-42.2 7.1-61.6 17-85 64.7-152.1 141.2-198.8 9.5-5.8 32.6-17.2 42.7-21.1 4.7-1.8 12.3-5 17-7 4.7-2.1 9.9-4.2 11.5-4.8 4.4-1.5 14.2-1.4 17.3.2zm15.5 162.3c3.2.3 6 .9 6.2 1.3.6 1-7.9 13.7-12.4 18.3-5.9 6.3-8.9 7.3-25.6 8.6-8.2.7-17.9 1.6-21.5 2.1-3.5.5-6.6.8-6.8.6-.2-.2 3.4-2.4 8-4.8s10.8-6 13.8-7.9c7.7-5 20.8-15.7 22.1-18.1.9-1.8 1.7-2 5.7-1.4 2.6.3 7.3.9 10.5 1.3zm265.7.2c1.2 2.3 14.4 13.1 22 18 3 1.9 9.2 5.5 13.8 7.9 4.6 2.4 8.2 4.6 8 4.8-.2.2-3.3-.1-6.8-.6-3.6-.5-13.2-1.4-21.5-2.1-17.2-1.3-20.1-2.4-26.4-9.6-5.4-6-12.2-16.4-11.5-17.5.3-.4 2.4-.9 4.7-.9 2.3-.1 5.6-.5 7.2-.9 5.7-1.4 9.4-1.1 10.5.9zm-246.3 39.7c2.3 17.5 5.2 45.6 5.8 55.4.3 5.2.8 11.4 1.1 13.7.3 2.4.1 4.3-.4 4.3-.4 0-7.3-14.9-15.2-33.2-13.1-30.4-14.2-33.3-12.5-34.2 4-2.4 11.2-8.5 14.5-12.3 1.9-2.3 3.9-4 4.5-3.9.5.1 1.5 4.7 2.2 10.2zm229.6 4.3c2 1.2 3.7 2.6 3.7 2.9 0 .7-8 19.7-10 23.7-.6 1.1-4.5 10.3-8.9 20.5-7.7 18-10.5 22.6-9.5 15.8.2-1.8 1.1-11.4 1.9-21.3 1.4-17.2 4.9-46.9 6.1-52.8l.6-2.8 6.1 5.8c3.4 3.3 7.9 6.9 10 8.2z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </Brand>
  );
}
