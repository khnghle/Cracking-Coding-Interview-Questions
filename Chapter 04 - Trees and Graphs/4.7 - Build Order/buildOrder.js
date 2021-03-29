/* 
- 4.7 : _Build Order_ - You are given a list of projects and a list of dependencies (list of pairs of projects where second project is dependent of the first) 
All of a projects dependencies much be built before the project is. 
Find a build order that allows the project to be build. If no valid build order, return an error. 

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