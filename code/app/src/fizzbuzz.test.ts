import { describe, it, expect } from 'vitest'
import { generateFizzBuzz } from './fizzbuzz'

describe('generateFizzBuzz', () => {
  it('returns correct length', () => {
    expect(generateFizzBuzz(0)).toEqual([]);
    expect(generateFizzBuzz(5)).toHaveLength(5);
  })

  it('returns numbers as strings when not divisible by 3 or 5', () => {
    expect(generateFizzBuzz(2)).toEqual(['1', '2'])
  })

  it('replaces numbers divisible by 3 with Fizz', () => {
    const res = generateFizzBuzz(6);
    expect(res[2]).toBe('Fizz');
    expect(res[5]).toBe('Fizz');
  })

  it('replaces numbers divisible by 5 with Buzz', () => {
    const res = generateFizzBuzz(10);
    expect(res[4]).toBe('Buzz');
    expect(res[9]).toBe('Buzz');
  })

  it('replaces numbers divisible by both 3 and 5 with FizzBuzz', () => {
    const res = generateFizzBuzz(30);
    expect(res[14]).toBe('FizzBuzz');
    expect(res[29]).toBe('FizzBuzz');
  })

  it('complete sequence 1..16 matches expectation', () => {
    expect(generateFizzBuzz(16)).toEqual([
      '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16'
    ]);
  })
})
