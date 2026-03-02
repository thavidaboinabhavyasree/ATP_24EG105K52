let greatest=function(a,b,c){

    if(a>b&&a>c){
        return a;
    }
    else if (b>c&&b>a){
        return b;
    }
    else{
        return c;
    }
}

let result=greatest(33,66,99)
console.log(result)
