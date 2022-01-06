import * as React from 'react';

export default function Footer() {
  return (
    <footer>
      <div>
        <small>not © {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
