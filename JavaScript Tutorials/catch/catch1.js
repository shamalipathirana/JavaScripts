//Error handling

//Try Catch

/*try - Let you test a black of code for errors
catch-lets you handle the errors
throw-lets you create custom errors
finally-lets you execute code,after try and catch,regardless of the result
*/

//function to find the largest number

function findLargest(a,b,c){
    try{
        if(typeof(a) !== 'number' ||typeof(b) !== 'number' ||typeof(c) !== 'number' ){
            throw "Error:Enter only numbers";
        }
        else if(a==b || a==c ||b==c){
            throw "Error:Enter different Numbers";
        }
        else{
            if(a > b && a > c){
                console.log('a is the largest number');
            }
            else if(b > a && b > c){
                console.log('b is the largest number');
            }
            else{
                console.log('c is the largest number');
            }
        }
        
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log('Input values are'+a+' '+b+' '+c);
    }
}

findLargest(3,5,5);
