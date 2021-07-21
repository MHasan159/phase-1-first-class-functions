function receivesAFunction(callback){
   callback();
}
function returnsANamedFunction(){
    return returnsANamedFunction();
}
function returnsANamedFunction() {
    return function namedFunction(){};
  }
  function returnsAnAnonymousFunction(){
     return function (){};
  }