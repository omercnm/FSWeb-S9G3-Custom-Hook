import localStorageKullan from "./localStorageKullan";

export const geceModu = (initialValue) => {
  const [localModeDegeri, setLocalModeHandler] = localStorageKullan(
    "ömer",
    initialValue
  );
  return [localModeDegeri, setLocalModeHandler];
};
