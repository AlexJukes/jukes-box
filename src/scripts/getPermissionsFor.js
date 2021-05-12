import { permissions } from "../stores";

const codeWords = {
  tech: permissions.update((existing) => [...existing, "tech"]),
  cat: permissions.update((existing) => [...existing, "cat"]),
  lobus: permissions.update((existing) => [...existing, "lobus"]),
  reset: permissions.update(() => []),
};

export const getPermissionsFor = (codeWord) => {
  console.log("codeWord", codeWord);
  if (Object.keys(codeWords).includes(codeWord)) {
    console.log(Object.keys(codeWords).includes(codeWord));
    codeWords[codeWord];
  }
};
