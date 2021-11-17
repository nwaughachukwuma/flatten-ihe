import { expectType } from "tsd";
import flattenObject, { T } from "./index";

const obj: T = {
  status: "success",
  name: {
    first: "Glenn",
    last: "Geenen",
  },
};

expectType<T>(flattenObject(obj));

expectType<T>(flattenObject(obj, '-'));
