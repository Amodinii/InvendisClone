// AUTOMATIC NAVIGATION
var counter = 1;
var counter2 = 1; //For the second image slider

setInterval(function(){
document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>7)
    {
        counter=1; //Repeat
    }
},5000);

//For the seconf image slider
setInterval(function(){
    document.getElementById('radio1'+counter2).checked=true;
        counter2++;
        if(counter2>2)
        {
            counter2=1; //Repeat
        }
    },5000);
