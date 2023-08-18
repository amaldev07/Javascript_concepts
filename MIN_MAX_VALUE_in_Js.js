 In js, the min and max value can be given as 
   
  Number.MAX_VALUE;
 
  Number.MIN_VALUE;

But a better way is to validate with
-Infinity and Infinity

eg:
1>-Infinity //true
1<-Infinity //false
1111>Infinity //false
1111<Infinity //true
 
