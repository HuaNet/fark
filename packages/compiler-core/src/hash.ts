import fnv from 'fnv-plus';
import {hashCode, hashType} from "./type";


export const hashArray: hashType = [];

export function hashGenerate(s: any): hashType {
  if (!existHash(s)) {
    hashAdd({
      code: fnv.hash(s, 64).dec()
    });
  }
  return hashArray;
}

function hashAdd(s: any): hashType {
  (hashArray as hashCode[]).push(s);
  return hashArray;
}

export function hashRemove(all: boolean = false, s?: any): hashType {
  const index = existHash(s) as number;
  if (index !== -1) {
    (hashArray as hashCode[]).splice(index, 1);
  }
  return all || index === -1 ? (hashArray as hashCode[]) = [] : hashArray;
}

export function existHash(s: any): number | boolean {
  return (hashArray as hashCode[]).map(v => v.code).indexOf(s) !== -1;
}

