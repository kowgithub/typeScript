function test() {
    console.log("调用函数");
}
test();
function greet() {
    return "hello world";
}
function caller() {
    var message = greet();
    console.log(message);
}
caller();
function add(x1, y1) {
    return x1 + y1;
}
console.log(add(1, 2));
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log('和为：' + sum);
}
addNumbers(1, 2, 3, 21, 2312, 3);
//匿名函数自调用
(function () {
    var x = "hello";
    console.log(x);
})();
var myFunction = new Function("a", "b", "return a+b");
var x = myFunction(4, 3);
console.log(x);
//递归函数
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(6));
//lambda表达式
var foo = function (x) {
    x = x + 10;
    console.log(x);
};
foo(100);
var func = function (x) {
    if (typeof x == 'number') {
        console.log(x + 'is a number');
    }
    else if (typeof x == "string") {
        console.log(x + "is a string");
    }
};
func(12);
func("tom");
