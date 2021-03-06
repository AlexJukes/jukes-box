import { permissions } from "../stores";

const TECH = "tech";
const CAT = "cat";
const LOBUS = "lobus";
const LIGHT = "light";
const DARK = "dark";
const RESET = "reset";

function updateLightModePermissions(existing) {
  if (existing.includes(DARK)) {
    return [...existing.filter((permission) => permission !== DARK), LIGHT];
  }
  return [...existing, LIGHT];
}

function updateDarkModePermissions(existing) {
  if (existing.includes(LIGHT)) {
    return [...existing.filter((permission) => permission !== LIGHT), DARK];
  }
  return [...existing, DARK];
}

const codeWordsPermissionsMap = {
  [TECH]: () => permissions.update((existing) => [...existing, TECH]),
  [CAT]: () => permissions.update((existing) => [...existing, CAT]),
  [LOBUS]: () => permissions.update((existing) => [...existing, LOBUS]),
  [LIGHT]: () => permissions.update(updateLightModePermissions),
  [DARK]: () => permissions.update(updateDarkModePermissions),
  [RESET]: () => permissions.update(() => []),
};

export const checkIsValidCodeword = (codeWord) =>
  Object.keys(codeWordsPermissionsMap).includes(codeWord);

export const enablePermissionsFor = (codeWord) => {
  if (checkIsValidCodeword(codeWord)) {
    return codeWordsPermissionsMap[codeWord]();
  }
};
