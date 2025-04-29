console.log("Script Start");

async function asyncFunc() {
  console.log("Inside async function");

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Resolved!");
      resolve("Done");
    }, 3000);
  });

  const result = await promise;
  console.log("Result after await:", result);
}

asyncFunc();

console.log("Script End");

document.addEventListener('click', () => {
  console.log("User clicked the page!");
});

/* 
Script Start
asynsIsSyntaticSugerPromise.js:1
Inside async function
asynsIsSyntaticSugerPromise.js:4
Script End
asynsIsSyntaticSugerPromise.js:19
Promise Resolved!
asynsIsSyntaticSugerPromise.js:8
Result after await: Done
*/

