// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


test('714-271-5716 is a phone number', () => {
    expect(isPhoneNumber('714-271-5716')).toBe(true);
});

test('(123) 456-3912 is a phone number', () => {
  expect(isPhoneNumber('(123) 456-3912')).toBe(true);
});

test('7132715718 is not a phone number', () => {
    expect(isPhoneNumber('7132715718')).toBe(false);
});

test('111 is not a phone number', () => {
    expect(isPhoneNumber('111')).toBe(false);
});

test('jaja@gmail.com is an email', () => {
  expect(isEmail('jaja@gmail.com')).toBe(true);
});

test('13245@blah.co is an email', () => {
  expect(isEmail('13245@blah.co')).toBe(true);
});

test('@blah.co is not an email', () => {
  expect(isEmail('@blah.co')).toBe(false);
});

test('adjfk@bam is not an email', () => {
  expect(isEmail('adjfk@bam')).toBe(false);
});

test('a12345 is a strong password', () => {
  expect(isStrongPassword('a12345')).toBe(true);
});

test('a12345dfskjojq is a strong password', () => {
  expect(isStrongPassword('a12345dfskjojq')).toBe(true);
});

test('a is not a strong password', () => {
  expect(isStrongPassword('a')).toBe(false);
});

test('111111111 is not a strong password', () => {
  expect(isStrongPassword('111111111')).toBe(false);
});


test('05/06/2024 is a date', () => {
  expect(isDate('05/06/2024')).toBe(true);
});

test('5/6/2024 is a date', () => {
  expect(isDate('5/6/2024')).toBe(true);
});

test('5/6/24 is not a date', () => {
  expect(isDate('5/6/24')).toBe(false);
});

test('5/6 is not a date', () => {
  expect(isDate('5/6')).toBe(false);
});

test('#FFF is a hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('abc is a hex color', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('##123 is not a hex color', () => {
  expect(isHexColor('##123')).toBe(false);
});

test('#FFFFFFFF is not a hex color', () => {
  expect(isHexColor('#FFFFFFFF')).toBe(false);
});