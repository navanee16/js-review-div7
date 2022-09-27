
var num = 200;
var setnum = [];
var index = 0;
for(let i = 1; i<=num; i++){
    // console.log(i);
    if (i%7==0){
        if(myfunction(i)){
        setnum[index]=i;
        index++; 
        }
    }
}
console.log(setnum);
function myfunction(number){
    var dine = number.toString();
    var x =[...dine]
    // console.log(x);
    var xi =[...dine].sort();
    var num=xi.join();
    // console.log(num);
    var num1 =x.join();
    // console.log(num1);

    if(num==num1){
        return true
    }else{
        return false
    }
}
// console.log(myfunction(21));

// var x =setnum
// console.log(setnum);
// var rem;
// while(x>0){
//     rem =x%10
//     console.log(rem);

//     x=(x-rem)/10
// }

// var x =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//  let y=x.forEach(x*7)
// console.log(y);
// const num =x.filter((mul)=>{
//     return mul%7==0
// })
// console.log(num);

// newarray=[];
// i=0
// x.forEach(myfunction())
// function myfunction(){
//    let y=x[i]*
//    console.log(y);
//    newarray=y
    // i++;
//    return(newarray)
// } 
// console.log(newarray);