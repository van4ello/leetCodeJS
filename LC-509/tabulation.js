/**
 * @param {number} n
 * @return {number}
 */
// F(5) = F(4) + F(3) = (F(3) + F(2)) + (F(2) + F(1)) = ((F(2) + F(1)) + (F(1) + F(0))) + (F(1) + F(0) + 1) =
// (F(1) + F(0)) + 1 + 1 + 0 + 1 + 0 + 1 = 5
// {3: 2}
var fib = function(n, memo = {}) {
  const tabFib = [0, 1];
  for (let i = 2; i <= n; i++) {
    tabFib[i] = tabFib[i - 2] + tabFib[i - 1];
  }

  return tabFib[n];
};