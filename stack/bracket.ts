import { Stack } from "./stack";

const bracketPairMap: { [key: string]: string } = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function judgeBracketPair(str: string) {
  let strArr = str.split(""),
    len = strArr.length,
    i = 0;
  let stack = new Stack();

  for (; i < len; i++) {
    const item = strArr[i];
    const top = stack.peek();
    if (typeof top === "string" && bracketPairMap[top] === item) {
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  return stack.length() === 0;
}

judgeBracketPair("[{([()({})][]){}}]");
