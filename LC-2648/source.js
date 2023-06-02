/**
 * @return {Generator<number>}
 */

// fib(4) = fib(3) + fib(2) = fib(2) + fib(1) + fib(1) + fib(0) = fib(1) + fib(0) + fib(1) + fib(1) + fib(0) = 1 + 0 + 1 + 1 + 0 = 3
var fibGenerator = function*() {
  let previous = 0;
  let current = 1;
  let n = 0;
  while (n <= 50) {
    yield previous;
    [previous, current] = [current, previous + current];
    n++;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */