class car{

    engine:string;

    constructor(engine:string){
        this.engine = engine;
    }
    disp():void{
        console.log("发动机为："+this.engine)
    }
}
var obj12 = new car('engine 1');
console.log(obj12.engine);
obj12.disp();


//类的继承
class Shape{
    Area:number

    constructor(a:number){
        this.Area = a;
    }
}
class Circle extends Shape{
    disp():void{
        console.log("圆的面积为:"+this.Area);
    }
}
var ibj122 = new Circle(122);
ibj122.disp();

//继承类重写方法
class PrintClass{
    doPrint():void{
        console.log("父类的doPrint方法");
    }
}

class StringPrinter extends PrintClass{
    doPrint():void{
        super.doPrint();
        console.log('子类的doPrint()方法')
    }
}
var obj111 = new StringPrinter();
obj111.doPrint();

//static关键字
class StaticMem{
    static num:number;

    static disp():void{
        console.log("num值为："+StaticMem.num);
    }
}
StaticMem.num=12;
StaticMem.disp();