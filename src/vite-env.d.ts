/// <reference types="vite/client" />
type Colors = 'red' | 'green' | 'blue';
type DateYMDString = `${YYYY}-${MM}-${DD}`;
type ColorsClassName = `bg-${Colors}-300 text-${Colors}-900`;

interface Item {
  date: DateYMDString;
  // ✓ TODO could we use stronger color type here?
  color: Colors;
}

// ✓ TODO could we use inferred items type here?
interface Range {
  start: DateYMDString;
  end: DateYMDString;
  // ✓ TODO could we use stronger color type here?
  color: Colors;
}
