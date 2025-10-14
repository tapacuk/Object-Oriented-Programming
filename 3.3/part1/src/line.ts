export class Line {
  value: string;
  length: number;

  constructor(Value: string) {
    this.value = Value;
    this.length = Value.length;
  }

  find = (input: string) => {
    return this.value.indexOf(input);
  };

  insert = (input: string) => {
    this.value = this.value.concat(input);
  };

  replace = (input: string, lineToReplace: string) => {
    this.value = this.value.replace(input, lineToReplace);
  };

  show = () => {
    return this.value;
  };
}
