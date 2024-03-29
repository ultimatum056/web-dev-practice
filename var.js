function one() {
    for(var i = 0; i < 5; i++ ) {
        console.log(i)
    }

    console.log('var', i)
}

one();

function foo() {
    var x = 1;
    function bar() {
      var y = 2;
      console.log(x); // 1 (function `bar` closes over `x`)
      console.log(y); // 2 (`y` is in scope)
    }
    bar();
    console.log(x); // 1 (`x` is in scope)
    console.log(y); // ReferenceError, y is node defined
  }
  
  foo();