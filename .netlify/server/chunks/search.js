import { w as writable } from "./index2.js";
const createSearchStore = (data) => {
  const { subscribe, set, update } = writable({
    data,
    filtered: data,
    search: ""
  });
  return {
    subscribe,
    set,
    update
  };
};
export {
  createSearchStore as c
};
