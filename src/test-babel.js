import {join} from "path";

const directories = ["/foo", "bar", "baz/abc", "qwerty", ".."];

const result = join(...directories);

console.log(result);