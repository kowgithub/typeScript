var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car(engine) {
        this.engine = engine;
    }
    car.prototype.disp = function () {
        console.log("发动机为：" + this.engine);
    };
    return car;
}());
var obj12 = new car('engine 1');
console.log(obj12.engine);
obj12.disp();
//类的继承
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("圆的面积为:" + this.Area);
    };
    return Circle;
}(Shape));
var ibj122 = new Circle(122);
ibj122.disp();
//继承类重写方法
var PrintClass = /** @class */ (function () {
    function PrintClass() {
    }
    PrintClass.prototype.doPrint = function () {
        console.log("父类的doPrint方法");
    };
    return PrintClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log('子类的doPrint()方法');
    };
    return StringPrinter;
}(PrintClass));
var obj111 = new StringPrinter();
obj111.doPrint();
//static关键字
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("num值为：" + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
StaticMem.disp();
