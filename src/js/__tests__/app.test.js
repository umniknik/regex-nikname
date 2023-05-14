/* eslint-disable no-unused-vars */
import Validator from '../app';

test('Checking the correctness of the name input', () => {
  const name = new Validator('e78rrr3e');
  const result = name.validateUsername();

  expect(result).toBe(true);
});

test('Checking for error ejection with an incorrect name', () => {
  expect(() => {
    const name = new Validator('-ab333c');
  //  const result = name.validateUsername();
  }).toThrowError('The name contains forbidden characters');
});

test('Checking for error ejection with an incorrect name', () => {
  expect(() => {
    const name = new Validator('_ab333c');
  //  const result = name.validateUsername();
  }).toThrowError('The name contains forbidden characters');
});

test('Checking for error ejection with an incorrect name', () => {
  expect(() => {
    const name = new Validator('2ab333c');
  //  const result = name.validateUsername();
  }).toThrowError('The name contains forbidden characters');
});

test('Checking for error ejection with an incorrect name', () => {
  expect(() => {
    const name = new Validator('ab3433c');
    // const result = name.validateUsername();
  }).toThrowError('The name contains forbidden characters');
});

test('Checking for error ejection with an incorrect name', () => {
  expect(() => {
    const name = new Validator('ab343c-');
    //   const result = name.validateUsername();
  }).toThrowError('The name contains forbidden characters');
});

test('Checking for error ejection with an incorrect name', () => {
  expect(() => {
    const name = new Validator('ab343c_');
  //  const result = name.validateUsername();
  }).toThrowError('The name contains forbidden characters');
});

test('Checking for error ejection with an incorrect name', () => {
  expect(() => {
    const name = new Validator('ab343c7');
  //  const result = name.validateUsername();
  }).toThrowError('The name contains forbidden characters');
});
