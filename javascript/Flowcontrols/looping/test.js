var num=143;
var r;
var sum=0;
while (num != 0) {
    r = num % 10;
    //rev = rev * 10 + remainder;
    rs=r*r*r;
    sum=sum+rs;
    num=Math.floor(num/10);
}
console.log(sum);//tytu