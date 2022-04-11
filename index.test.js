const { test, expect } = require('@jest/globals');
const add = require('./index.js');

test("testing add function",()=>{
    expect(add(2,3)).toBe(5);
})
