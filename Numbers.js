//even nos 1 to 50
 for(i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}


//multiples of 7
for(i=1;i<=100;i++){
    if(i%7==0){
        console.log(i)
    }
}

//multiples of 7 using count
count=0
for(i=1;i<=100;i++){
    if(i%7==0){
        count++
        console.log(i,`count is ${count}`)
    }
}

//total multiples of 7
count=0
for(i=1;i<=100;i++){
    if(i%7==0){
        count++
    }
}
console.log(count)

//printing table
num=5
for(i=1;i<=10;i++){
    console.log(`${num}*${i}=${i*num}`)
}

//or by using nested loops
num=5
for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
    console.log(`${i} x ${j} = ${i * j}`);
}
}

let arr=["thiru","a","b","c"]
user_not_found=true
while(user_not_found){
    for(i=0;i<arr.length;i++){
        if(arr[i]=="c"){
            console.log(arr[i])
            user_not_found=false
        }
    }
    user_not_found=false
    console.log("user not exists")
}


//printing 1 to 10 digits using while loop
count=1
while(count<=10){
    console.log(count)
     count++
}


//multiples of 8
let count = 1;
while (count <= 8) {
    console.log(8 * count);
    count++;
}

//prime number
let num=10
let fact=0

for(i=2;i<num;i++){
    if(num%i==0){
        fact++
    }
}
console.log(fact,`factors`)
if(fact==0){
    console.log(num,`is prime number`)
}
else{
    console.log(num,`is not prime number`)
}

//break:to stop iterations
//continue: to skip one particular iteration

//break example
for(i=1;i<100;i++){
    console.log(i)
    if(i==77){ //skips all iterations from this
        break
    }
}

//continue example
for(i=1;i<100;i++){
    console.log(i)
    if(i==77){ //skips only this iteration
        continue
    }
}

//prime number using factors for loop
let num = 10;
let fact = 0;
let factors = [];

if (num >= 2) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            fact++;
            factors.push(i);
        }
    }
    
    console.log(fact, `factors are excluding 1 and ${num}: ${factors.join(', ')}`);
    
    if (fact == 0) {
        console.log(num, `prime number`);
    } else {
        console.log(num, `not prime`);
    }
} else {
    console.log(num, `number should be greater than 2`);
}


//next prime number
num=3
while(true){
    num++
    fact=0
    for(i=2;i<num;i++){
        if(num%i==0){
            fact++
            break
        }
    }
    if(fact==0){
        console.log(num,"is prime")
        break
    }
}

//before prime number
num=5
while(true){
    num--
    fact=0
    for(i=2;i<num;i++){
        if(num%i==0){
            fact++
            break
        }
    }
    if(fact==0){
        console.log(num,"is prime")
        break
    }
}

//prime number in a range
count=0
for(i=200;i<=300;i++){
   fact=0
   for(j=2;j<i;j++){
       if(i%j==0){
           fact++
           break
       }
   }
   if(fact==0){
       console.log(`${i} is prime number`)
       count++
   }
}
console.log(count)

//length of a number
num=9182582051
len=0
while(num>0){
    num=Math.floor(num/10)
    len++
}
console.log(len)

//reverse of a number
num=123
reverse=0
while(num>0){
    digit=num%10
    reverse=reverse*10+digit
    num=Math.floor(num/10)
}
console.log(reverse)

//count of even and odd numbers in a number
num=1234567890
e_n=0
o_n=0
while(num>0){
    if((num%10)%2==0){
        e_n++
    }
    else{
        o_n++
    }
    num=Math.floor(num/10)
}
console.log(e_n,`are even numbers` ,o_n,`are odd numbers`)

//finding even and odd nos from a number
num=1234567890
e_n=0
o_n=0
while(num>0){
    digit=num%10
    if(digit%2==0){
        e_n=e_n*10+digit
    }
    else{
        o_n=o_n*10+digit
    }
    num=Math.floor(num/10)
}
console.log(e_n,o_n)

//factorial of a number
num=5
factorial=1
for(i=num;i>=1;i--){
    factorial=factorial*i
}
console.log(factorial)

//getting digit from a number
num=1234567890
rev=0
while(num>0){
    digit=num%10
    num=Math.floor(num/10)
    rev=rev*10+digit
}
rev2=0
count=0
while(rev>0){
    digit=rev%10
    rev=Math.floor(rev/10)
    count++
    if(count==6){
        console.log(digit)
        break
    }
}

//fibonnaci series
let a = 0;
let b = 1;
console.log(a); // print first number
console.log(b); // print second number

for (let i = 3; i <= 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}


//armstrong number
let num=153 //Used to count the number of digits
c1=num //Used to extract each digit and calculate the sum
c2=num //Stores the original number to compare at the end
len=0
while(num>0){
    num%10
    num=Math.floor(num/10)
    len++
}
sum=0
while(c1>0){
    digit=c1%10
    sum=sum+digit**len
    c1=Math.floor(c1/10)
}
if(sum==c2){
    console.log(c2,"is armstrong number")
}
else{
    console.log(c2,"not armsttrong number")
}


//lcm of numbers
num=14
num2=7
max=num>num2?num:num2
min=num<num2?num:num2
if(max%min===0){
    console.log(max,"is lcm")
}
else{
    check=0
    while(true){
        check=check+max
        console.log(check)
        if(check%num===0 && check%num2===0){
            console.log(check,"is lcm")
            break
        }
    }
}


//2nd largest lcm
num=50
num2=10
max=num>num2?num:num2
min=num<num2?num:num2
check=0
count=0
while(true){
        check=check+max
        if(check%num===0 && check%num2===0){
            count++
        }
        if(count==2){
            console.log(check)
            break
        }
    }

//printing 35th fibonacci series
a=0
b=1
count=0
for(i=0;i<=35;i++){
    count++
    if(count==35){
        console.log(a)
    }
    c=a+b
    a=b
    b=c
}

//gcd of number
num1=3
num2=17
if(num1>num2){
    max=num1
    min=num2
}
else{
    max=num2
    min=num1
}
console.log(min,max)
gcd=1
for(i=1;i<=min;i++){
    if(num1%i==0 && num2%i==0){
        gcd=i
    }
}
console.log(gcd)


