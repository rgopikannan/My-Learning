/* const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
} */

var show = function(num){
    if(num >5){
        return num
        +2;
    }

    if (num > 2) {
        return 
        num * 2;
    }
}

console.log(show(6));
console.log(show(3));