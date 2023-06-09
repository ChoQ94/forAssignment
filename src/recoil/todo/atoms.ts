import { atom } from "recoil";

const initialValue = {
  name: "",
  mail: "",
};

export const textState = atom({
  key: "submitState", // unique ID (with respect to other atoms/selectors)
  default: initialValue, // default value (aka initial value)
});
