var sites:string[];
sites=["google","Runoob","Taobao"];
console.log(sites[0]);
console.log(sites[1]);


//初始化数组的大小
var arr_names:number[] = new Array(4);

for(var i = 0;i <arr_names.length;i++){
    arr_names[i] = i*2;
    console.log(arr_names[i]);
}

var sitess = new Array("google","taobao");


var arr:number[] = [12,13];
var[xx,y] = arr;
console.log(xx);
console.log(y);

var multi:number[][] = [[1,2,3],[12,13,14]];
console.log(multi[0][0]);
console.log(multi[0][1]);
console.log(multi[0][2]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);