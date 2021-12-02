export interface T extends Record<string, any> {}
export default function flattenIhe<K extends T>(obj: K, sep?: string): K;
