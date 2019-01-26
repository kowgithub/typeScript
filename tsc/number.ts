console.log("typeScript Number 属性:");
console.log("最大值："+Number.MAX_VALUE);
console.log("最小值: "+Number.MIN_VALUE);
console.log('负无穷：'+Number.NEGATIVE_INFINITY);
console.log('正无穷：'+Number.POSITIVE_INFINITY);

var month =1 ;
if(month <= 0 || month >12){
    month = Number.NaN;
    console.log("月份是："+month);
}else{
    console.log("输入的月份正确")
}

function employee(id:number,name:string) { 
    this.id = id 
    this.name = name 
} 
 
var emp = new employee(123,"admin") 
employee.prototype.email = "admin@runoob.com" 
 
console.log("员工号: "+emp.id) 
console.log("员工姓名: "+emp.name) 
console.log("员工邮箱: "+emp.email)