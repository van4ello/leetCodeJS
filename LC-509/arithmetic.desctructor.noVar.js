/**
 * @param {number} n
 * @return {number}
 */
// F(5) = F(4) + F(3) = (F(3) + F(2)) + (F(2) + F(1)) = ((F(2) + F(1)) + (F(1) + F(0))) + (F(1) + F(0) + 1) =
// (F(1) + F(0)) + 1 + 1 + 0 + 1 + 0 + 1 = 5
// {3: 2}
var fib = function(n) {
  let previous = 0;
  let current = 1;
  for (let i = 1; i <= n; i++) {
    [previous, current] = [current, current + previous];
  }

  return previous;
};