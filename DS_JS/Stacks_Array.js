//Stack in JS Array - push, pop, currentIndex, length

var letters = [];
var word = "racecar1";

var rword = "";
var rstr = letters.reverse();

for(var i=0;i<word.length;i++){
    letters.push(word[i]);
}

for (var j = 0; j < word.length; j++){
   rword += letters.pop();
}

if(rword === word){
    console.log(rword +' is palindrom');
}else{
    console.log(rword+" is not palindrom");
}

