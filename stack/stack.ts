export interface Stack<T> {
  dataStore: T[];
  top: number;
  push(element: T): void;
  pop(): void;
  peek(): void;
  length(): number;
  clear(): void;
}

export class Stack<T> implements Stack<T> {
  dataStore: T[] = [];
  top = 0;
  push(element: T) {
    this.dataStore[this.top++] = element;
  }

  pop() {
    return this.dataStore[--this.top];
  }

  peek() {
    return this.dataStore[this.top - 1];
  }

  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }
}

// type strOrNum = string | number
//test
// var s = new Stack<strOrNum>();

// s.push('Simon');
// s.push('mengsio');
// s.push('tingjio');
// s.push(2);

// console.log(s.length());
// console.log(s.pop());
// console.log(s.peek());
// console.log(s.length());


