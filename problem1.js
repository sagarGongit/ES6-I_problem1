let input = ["MA","SA","I","SCH","OOL"];
    function convertToLowerCase(){
        input.map((ele,i)=>{
            if(ele.toUpperCase()){
               console.log(ele.toLowerCase().toString());
            }
            else {
               console.log(ele.toUpperCase().toString());
            }
         })
    }
       convertToLowerCase(input);