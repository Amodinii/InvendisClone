var emaIl = document.forms['form']['email-id'];
var pwd = document.forms['form']['pwd'];

var emEr = document.getElementById('em-err');
var psEr = document.getElementById('pass-err');

emaIl.addEventListener('textInput', emVerify);
pwd.addEventListener('textInput', psVerify);

function validated() //If the email/phone number isn't perfecto!
{
    if (emaIl.value.length < 9)
    {
        emaIl.style.border = "1px solid red";
        emEr.style.display = "block";
        emaIl.focus();
        return false;
    }
    if (pwd.value.length < 6)
    {
        pwd.style.border = "1px solid red";
        psEr.style.display = "block";
        pwd.focus();
        return false;
    }
}

function emVerify()
{
    if (emaIl.value.length >= 9) //If it is perfecto!
    {
        emaIl.style.border = "1px solid silver";
        emEr.style.display = "none";
        return true;
    }
}

function psVerify()
{
    if (pwd.value.length >= 6)
    {
        pwd.style.border = "1px solid silver";
        psEr.style.display = "none";
        return true;
    }
}
