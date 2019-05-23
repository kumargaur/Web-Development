
const myFunction = (
  function () {
    const hi = 'Hi!';
    return function () {
      console.log(hi);
    }
  }
)();


//quiz

(function(n){
  delete n;
  return n;
})(2);
