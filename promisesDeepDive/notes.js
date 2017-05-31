

Monoid
  int addition
  boolean and
  Maybe x
  Either x y

Monads
  Maybe Monad
  Either Monad

https://philipnilsson.github.io/Badness10k/posts/2017-05-07-escaping-hell-with-monads.html



new Promise      // Ok
Promise.defer()  // Bad - but helpfult to first understand promises

.then
.catch    // Errors do not propagate
.finally  // Errors do not propagate

returning promises
returning thened promises

failing to return a promise

always return a promise, never pass one as an argument (unless the function is a promise combinator)

keeping variables in scope

multiple thens on the same promise

Promise.race
Promise.all


promisify
promisify.inverse

before/after
