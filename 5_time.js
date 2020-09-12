console.time();

setTimeout(() => {
  console.timeEnd();
}, 3000)

setTimeout(() => {
  console.timeLog('logging time after 2 secs');
}, 2000)
