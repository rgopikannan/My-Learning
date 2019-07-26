/*
To state it more simply, there are two "requirements" for the module pattern to be exercised:

There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).

The enclosing function must return back at least one inner function, so that this inner function has closure over the private scope, and can access and/or modify that private state.
 */

function profileModule(){
    let name = "John";
    let age = 23;

    function printName(){
        console.log(name);
    }

    function printAge(){
        console.log(age);
    }
    printName(); 
    console.dir(printName) //Now name="john" and age=23 is a lexical scope with Closure
}
profileModule();

//Revealing Module( Module pattern )
function profileModule_1(){
    let name = "John";
    let age = 23;

    function printName() {
      console.log(name);
    }

    function printAge() {
      console.log(age);
    }

    return {
      printName: printName,
      printAge: printAge
    }
}

var p1 = profileModule_1();


var p2 = (function profileModule_1() {
  let name = "joe";
  let age = 25;

  function printName() {
    console.log(name);
  }

  function printAge() {
    console.log(age);
  }
  return publicAPI = {
    printName: printName,
    printAge: printAge
  }
})();
console.dir(p2.printName);

///Uisng anonymous function
var p3 = (function() {
  let name = "joe";
  let age = 25;

  function printName() {
    console.log(name);
  }

  function printAge() {
    console.log(age);
  }
  return publicAPI = {
    printName: printName,
    printAge: printAge
  }
})();
console.dir(p3)

//Uisng Arrow function
var p4 = (() => {
  let name = "joe";
  let age = 25;

  function printName() {
    console.log(name);
  }

  function printAge() {
    console.log(age);
  }
  return (publicAPI = {
    printName: printName,
    printAge: printAge
  });
})();
console.dir(p4);


obj = {
  a: 1,
  getA: function() {
    return this.a;
  }
};
var get = obj.getA.apply(obj);
console.log(get());