document.write("<h1>6.Check a number is prime or not.</h1>");
let pr=prompt("enter the value of pr:");
let count=0;
if(pr==0 || pr== 1){
    document.write("nothing");
}
else{
    for(i=2;i<pr;i++){
        if(pr%i==0){
            count=count+1;
            break;
        }
    }
    if(count>0){
        document.write("not prime:",pr);
    }
    else{
        document.write("prime:",pr);
    }
}
