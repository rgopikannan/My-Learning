let str = "I love my country";
let arr = str.split(" ");
console.log(arr.reverse());

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function() {
    console.log(this.registrationNumber + " " + this.brand);
  }
};

// car.displayDetails();

var tcar = car.displayDetails.bind(car);
tcar();
