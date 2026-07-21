import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function to conditionally join classNames and merge tailwind classes safely.
 * Solves the problem of conflicting tailwind classes.
 * 
 * @param inputs - An array of class values (strings, objects, arrays, etc.)
 * @returns A strictly merged string of tailwind classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
