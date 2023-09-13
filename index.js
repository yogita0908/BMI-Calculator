 function myFunction(){
        let a=document.getElementById("enter1");
        let b=document.getElementById("enter2");
        const btn=document.getElementById("btn2")
        const c=document.getElementById("enter3");
        let d=(a.value/(b.value*b.value)).toFixed(2);
        document.getElementById('enter3').innerHTML=d;
        return d;
        }
function color(){
            window.location.href="bmi.html";
        }
    