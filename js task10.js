function fact(n)
{
  if(n==0)
    return 1;
  else
  return fact(n-1)*n;
  
}
let n=5;
console.log("factorial of",n,"is:",fact(n))

