// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber() tests
test('number with () passes', () => {
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});
test('number with - passes', () => {
  expect(isPhoneNumber('111-111-1111')).toBe(true);
});
test('number with letters fails', () => {
  expect(isPhoneNumber('111-ONE-FOUR')).toBe(false);
});
test('number too short fails', () => {
  expect(isPhoneNumber('111')).toBe(false);
});

// isEmail() tests
test('letter only address passes', () => {
  expect(isEmail('johnsmith@gmail.com')).toBe(true);
});
test('letter + valid characters address passes', () => {
  expect(isEmail('john_smith05@gyahoo.com')).toBe(true);
});
test('invalid characters fails', () => {
  expect(isEmail('john!!!@wow.air')).toBe(false);
});
test('missing @ fails', () => {
  expect(isEmail('johnsmithsmart.ai')).toBe(false);
});

// isStrongPassword() tests
test('valid strong password passes', () => {
  expect(isStrongPassword('ahsuf_12647gfe')).toBe(true);
});
test('15 lenght password passes', () => {
  expect(isStrongPassword('abcde123456789_')).toBe(true);
});
test('invalid characters fails', () => {
  expect(isStrongPassword('a!@#$nef')).toBe(false);
});
test('short password fails', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate() tests
test('(MM/DD/YYYY) passes', () => {
  expect(isDate('01/01/2000')).toBe(true);
});
test('(M/D/YYYY) passes', () => {
  expect(isDate('1/8/2000')).toBe(true);
});
test('(MM/DD/YY) failes', () => {
  expect(isDate('01/01/01')).toBe(false);
});
test('(MM-DD-YYYY) fails', () => {
  expect(isDate('02-05-3019')).toBe(false);
});

// isHexColor() tests
test('valid 6-character hex with # passes', () => {
  expect(isHexColor('#AABBCC')).toBe(true);
});
test('valid 3-character hex without # passes', () => {
  expect(isHexColor('F00')).toBe(true);
});
test('hex color with invalid letters fails', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});
test('hex color with incorrect number of digits fails', () => {
  expect(isHexColor('#ABCD')).toBe(false);
});
