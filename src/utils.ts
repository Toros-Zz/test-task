/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

export const useRenderHighlight = (className: string) => {
  // ✓ TODO fix any
  const ref = useRef<HTMLLIElement | null>(null);

  if (ref.current) {
    ref.current.classList.add(className);
    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove(className);
      }
    }, 200);
  }

  return ref;
};

// ✓ TODO fix any
export const range = (n: number, fn: (n: number) => Item): Item[] => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fn(i + 1));
  }
  return result;
};

// ✓ TODO fix any
export const chooseRandomly = (items: Colors[]): Colors => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const addDays = (date: Date, amount: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};

export const formatDate = (date: Date): DateYMDString => date.toISOString().split('T')[0];
