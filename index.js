let Mark1 =Number((prompt('Enter the Mark1')));
let Mark2 =Number((prompt('Enter the Mark2')));
let Mark3 =Number((prompt('Enter the Mark3')));
let avg = (Mark1 +Mark2+Mark3)/3;
alert("Average:"+avg)
if(avg>=90){
    alert("Grade A");
}
else if(avg>=75 && avg<90){
    alert("Grade B");
}
else if(avg>=50 && avg<75){
    alert("Grade C");
}
else{
    alert("Grade F")
}
let name =(prompt('Enter Student Name'));{
    alert("NAME:" + name);
}
let accept=(confirm(`Do you need to calculate the mark of other student`));{
    alert(accept);
}

