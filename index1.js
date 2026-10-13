let num=Number(prompt("Enter the Number [Even or Odd]"));
if(num%2==0){
    alert("Even");
}
else{
    alert("Odd");
}
function table(){
    let numb = Number(prompt("Enter the Number for Multiplication"));
    for (let i=1; i<=10; i++){
        alert(numb + "x" + i + " = " + (numb*i));
    }
}
table();

let numbb = Number(prompt("Enter the value of sum"));
let sum=0;
for (let i=1; i<=numbb; i++){
    sum = sum + i;
}
alert("sum =" + sum);

let numbbb = Number(prompt("Enter the Number of Rows for stars"));
let pattern= "";
for (let i = 1; i<=numbbb; i++){
    for(let j=1; j<=i; j++){
        pattern = pattern + " * ";
    }
    pattern = pattern + "\n";
}
alert(pattern);

