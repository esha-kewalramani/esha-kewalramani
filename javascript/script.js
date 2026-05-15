let rows=5;
for (i=1; i<=5; i++){
let output="";
for(j=1; j<=rows-i; j++){
    output+="  ";
}
for(k=1; k>=i; k--){
    output+= k+" ";
}
for(d=2; d<=i; d++){
    output+= d+" ";
}
console.log(output);
}
