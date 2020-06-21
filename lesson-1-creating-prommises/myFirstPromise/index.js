/**
 * wait for number of milliseconds 
 * @param {number} ms - milliseconds
 * @returns {Promise} Promise object
 */
function wait(ms) {
  return new Promise(function (resolve, reject) {    
    console.log('this:', this);
    window.setTimeout(function () {
      resolve(ms);      
    }, ms);    
  });  
}

// 
var milliseconds = 5000;

/**
 * This function is just to test
 */
function finish() {
  var completion = document.querySelector('.completion');
  completion.innerHTML = "Complete after " + milliseconds + "ms.";
}

wait(milliseconds).then(finish);