import { expectType } from "tsd";
import flattenIhe, { T } from "./index";

const obj: T = {
  status: "success",
  name: {
    first: "Glenn",
    last: "Geenen",
  },
};

expectType<T>(flattenIhe(obj));

expectType<T>(flattenIhe(obj, "-"));
