/**
 * @param {number} millis
 */
// Promise 
// pending
// new Promise(resolve, reject)
// fulfilled - resolve is called
// rejected - reject is called, failed
// setTimeout ( function, sleepDuration)
async function sleep(millis) {
  const promise = new Promise((resolve) => setTimeout(resolve, millis));
  return promise;
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */