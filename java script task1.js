let a=[5,2,-7,3,-2,-1];
console.log("The negative elements from the array:")
for(let i=0;i<a.length;i++){
if(a[i]<0)
{
console.log(a[i]);
}}
console.log("\n");

let b=[5,10,15,20,22,23];
for(i=0;i<a.length;i++){
  if(b[i]%2==1){
    b[i]=0;
  }
}
console.log("The odd numbers from the array is changed into zero:")
    console.log(b);
