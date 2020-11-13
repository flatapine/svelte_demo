import { writable, derived } from 'svelte/store';

export const count = writable(0);
export const doubled = derived(count, $count => $count * 2);
export const increment = () => count.update(n => n + 1)