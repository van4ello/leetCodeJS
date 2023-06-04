/**
 * @param {number} n
 * @return {number}
 */
// F(5) = F(4) + F(3) = (F(3) + F(2)) + (F(2) + F(1)) = ((F(2) + F(1)) + (F(1) + F(0))) + (F(1) + F(0) + 1) =
// (F(1) + F(0)) + 1 + 1 + 0 + 1 + 0 + 1 = 5
var fib = function(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;
  // if (n < 2) return n;
  return fib(n - 2) + fib(n - 1);
};