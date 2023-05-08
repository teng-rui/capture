// const { response } = require("express");

// const func = require(__dirname+'/../../api/controllers/register.js');

function sum(a,b){
    return a+b;
}
// test('adds 1 + 2 to equal 3', () => {
//     let myObject={body:{username:'tengrui1003@gmail.com',password:'qwe'}};
//   expect(func(myObject,response )).toBe("User already exists");
// });

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(5);
});