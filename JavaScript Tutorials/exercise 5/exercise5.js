//...Tips Calculator
//objects
var billPay={

    bill:[],
    tip:[],
    final:[],
    calTip:function(){
        for(var i=0;this.bill.length;i++){
            var tp;
            if(this.bill[i]<1000){
                tp=20/100;
            }
            else if(this.bill[i]<1500 && this.bill>=1000){
                tp=15/100;
            }
            else{
                tp=10/100;
            }

            this.tip[i]=this.bill[i]*tp;
            //add final amount to the array
            this.final[i]=this.bill[i]+this.tip[i];
        }
    }


}

//get input
for(var i=0;i<5;i++){
    billPay.bill[i]=parseInt(prompt("Enter bill amount:"));
}
billPay.calTip();
//console.log(billPay.bill);