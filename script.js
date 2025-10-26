window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// An array to hold all promises

for (let i = 1; i <= 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${i} resolved in ${randomTime} seconds`);
    }, randomTime * 1000);
  });

  promises.push(promise);
}
Promise.any(promises)
  .then((result) => {
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    document.getElementById("output").innerText = "All promises rejected!";
  });
