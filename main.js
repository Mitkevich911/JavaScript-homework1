var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1,2,3,4,5];
var myObj = {first:'First Name', last:'Last Name'};
console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);
var decimal2 = myNum.toFixed(2);

var i =4;
console.log(i++);
console.log(++i);
console.log(i);
console.log(--i);
console.log(i--);
console.log(i);

var myTest = 20;

myTest += myNum;
console.log(myTest);

myTest -= myNum;
console.log(myTest);

myTest *= myNum;
console.log(myTest);

myTest /= myNum;
console.log(myTest);

myTest %= myNum;
console.log(myTest);


var myPi = Math.PI;
console.log(myPi);

var myRound = Math.round(89,279);
console.log(myRound);

var myRandom = Math.random()*10;
console.log(myRandom);

var myPow = Math.pow(3,5);
console.log(myPow);

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log(strObj);

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

var string = 'Lorem ipsum dolor sit';
console.log(string.toUpperCase());
console.log(string.toLowerCase());