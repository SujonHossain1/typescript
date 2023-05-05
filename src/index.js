function myFunc() {
  const value = [...arguments].sort((a, b) => a - b);
  console.log(value);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
