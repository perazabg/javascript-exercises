const sumAll = function(num1,num2) {
    let sum = 0;
    if(num1 < 0 || num2 < 0){return 'Error';}
    if(Number.isInteger(num1) && Number.isInteger(num2)){
      if(num1>num2){
        for(i=num2;i<=num1;i++){
          sum = i + sum;
        }
        return sum;
      }
      else{
        for(i=num1;i<=num2;i++){
          sum = i+ sum;
        }
        return sum;
      }
    }else{
    return "ERROR";
    }
}
   
  //console.log(sumAll(3,4));

// Do not edit below this line
module.exports = sumAll;
