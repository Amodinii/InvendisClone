var counter = 1;

//Automatic navigation
setInterval(function(){
    document.getElementById('radio1'+counter).checked=true;
    counter++;
    if(counter>2)
    {
        counter = 1;
    }
},5000);