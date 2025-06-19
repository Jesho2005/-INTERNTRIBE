let a=[-2,3,-4,5,2,-6,-8,4];
for(let i=0;i<a.length;i++) 
{
  if(a[i]<0)
   console.log("negative numbers from the array:",a[i]);
 
}

for( i=0;i<a.length;i++) {
 if(a[i]>0)
   console.log("positive numbers from the array:",a[i]);}
  console.log("\n")
  
  
 let vowel=['a','e','i','o','u','A','E','I','O','U'];
 let y='E';
 let flag=0;
 for(i=0;i<vowel.length;i++){
   flag=1;
 }   
  if(flag){
   console.log(y,"is a vowel character");
  }
  else
   {console.log(y,"is not a vowel character");
}  console.log("\n");

let x=[10,20,30,40,10];
for(i=0;i<=x.length;i++){
  if(x[0]==x[x.length-1]){
    console.log("true")
    break;}
  else{
    console.log("false")
    break;
  } 
}
  
