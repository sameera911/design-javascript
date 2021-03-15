var up = 999;
var low = 100;
var res = 0;

for (let i = low; i <= up; i++) {
    var num = i;
    while (i > 0) {
        var dig = num % 10;
        res = res + dig ** 3;
        num = Math.floor(num / 10);
    }
     if (num == res) {
      console.log(res);
     }
}

