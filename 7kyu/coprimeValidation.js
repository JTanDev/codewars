// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.
// The inputs will always be two positive integers between 2 and 99.
// Examples
// 20 and 27:
// Factors of 20: 1, 2, 4, 5, 10, 20
// Factors of 27: 1, 3, 9, 27
// Greatest shared factor: 1
// Result: 20 and 27 are coprime

function isCoprime(x, y) {
  for (let i = 2; i <= x; i++) {
    if (x % i == 0 && y % i == 0) {
      return false;
    }
  }
  return true;
}
