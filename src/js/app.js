export default class Validator {
  constructor(name) {
    this.name = name;
    this.validateUsername();
  }

  validateUsername() {
    const have = /^[a-z-_0-9]*$/i.test(this.name);
    const absence = !/(^[\d_-]|\d{4}|[\d_-]$)/.test(this.name);
    if (have && absence) {
      return have && absence;
    }
    throw Error('The name contains forbidden characters');
  }
}

// const name = new Validator('e78rrr3e');
// const result = name.validateUsername();
// console.log(result);
