/**
 * Wrap an event listener for readystatechange in a Promise
 * @returns {Promise} Promise object
 */
function wrapperPromise() {
  return new Promise(function (resolve, reject) {
    function checkState() {
      console.log('document.readyState:', document.readyState);
      if (document.readyState !== 'loading') {
        resolve();
      }
    }
    document.addEventListener('readystatechange', checkState);
    checkState();
  });
}

/**
 * This function is just to test
 */
function wrapperResolved() {
  var completion = document.querySelector('.completion');
  completion.innerHTML = "Resolved!";
}

wrapperPromise().then(wrapperResolved);