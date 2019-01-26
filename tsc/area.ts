var global_num = 12;
class Numbers{
    num_val = 13;
    static sval = 10;

    storeNum():void{
        var local_num =14;
    }
}
console.log('全局变量：'+global_num);
console.log(Numbers.sval);
var obj1 = new Numbers();
console.log(obj1.num_val);