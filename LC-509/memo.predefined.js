/**
 * @param {number} n
 * @return {number}
 */
// F(5) = F(4) + F(3) = (F(3) + F(2)) + (F(2) + F(1)) = ((F(2) + F(1)) + (F(1) + F(0))) + (F(1) + F(0) + 1) =
// (F(1) + F(0)) + 1 + 1 + 0 + 1 + 0 + 1 = 5
// {3: 2}
var fib = function(n, memo = {0:0, 1:1}) {
  if (Object.hasOwn(memo, n)) return memo[n];
  const fibCalced = fib(n - 2, memo) + fib(n - 1, memo);
  memo[n] = fibCalced;
  return fibCalced;
};