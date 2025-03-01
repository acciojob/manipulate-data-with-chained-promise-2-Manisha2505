//your JS code here. If required.
function manipulateData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  .then((array) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        document.getElementById('output').textContent = evenNumbers.join(',');
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map(num => num * 2);
        document.getElementById('output').textContent = doubledNumbers.join(',');
        resolve(doubledNumbers);  
      }, 2000);
    });
  });
}

manipulateData();
//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
  const number = parseFloat(document.getElementById('ip').value);
  processNumber(number);
});

function processNumber(num) {
  new Promise((resolve) => {
    setTimeout(() => {
      document.getElementById('output').textContent = Result: ${num};
      resolve(num);
    }, 2000);
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num * 2;
        document.getElementById('output').textContent = Result: ${result};
        resolve(result);
      }, 2000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num - 3;
        document.getElementById('output').textContent = Result: ${result};
        resolve(result);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num / 2;
        document.getElementById('output').textContent = Result: ${result};
        resolve(result);
      }, 1000);
    });
  })
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num + 10;
        document.getElementById('output').textContent = Final Result: ${result};
        resolve(result);
      }, 1000);
    });
  });
}