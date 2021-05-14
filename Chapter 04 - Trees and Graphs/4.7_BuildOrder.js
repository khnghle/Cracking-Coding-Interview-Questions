/* 

Input: 
  projects : a,b,c,d,e,f
  dependencies: (a,d), (f,b), (b,d), (f,a), (d,c)

Output: 
  f,e,a,b,d,c

{
  a : [d],
  f : [b, a],
  b : [d],
  d : [c],

}
f, e 

e , f , b , a , d, , c

How do we find node that has no incoming edges? 
  Searching all the values?? 

       a > d > c
       ^   ^
       f > b
       

*/