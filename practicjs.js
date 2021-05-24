var count=1;
function coolbutton(){
    let c=document.getElementById("button1");
    if(count==0)
    {
        c.innerText="Bright Mode";
        c.style.backgroundColor="black";
        c.style.color="whitesmoke";
        let r = c.parentElement.parentElement;
        r.style.color="black";
        r.style.backgroundColor="whitesmoke";
        let r1 = document.getElementById("span1");
        r1.style.color="rgb(221, 129, 24)";
        r1 = document.getElementById("span2");
        r1.style.color="rgb(129, 221, 24)";
        r1 = document.getElementById("span3");
        r1.style.color="rgb(24, 221, 139)";
        r1 = document.getElementById("span4");
        r1.style.color="rgb(24, 109, 221)";
        r1 = document.getElementById("span5");
        r1.style.color="rgb(188, 24, 221)";
        r1 = document.getElementById("span6");
        r1.style.color="rgb(221, 24, 67)";
        r1 = document.getElementById("span7");
        r1.style.color="rgb(114, 60, 9)";
        r1 = document.getElementById("span8");
        r1.style.color="rgb(146, 11, 56)";
    }
    else
    {
        c.innerText="Dark Mode";
        c.style.backgroundColor="whitesmoke";
        c.style.color="black";
        let r = c.parentElement.parentElement;
        r.style.color="whitesmoke";
        r.style.backgroundColor="black";
        let r1 = document.getElementById("span1");
        r1.style.color="rgb(146, 11, 56)";
        r1 = document.getElementById("span2");
        r1.style.color="rgb(114, 60, 9)";
        r1 = document.getElementById("span3");
        r1.style.color="rgb(221, 24, 67)";
        r1 = document.getElementById("span4");
        r1.style.color="rgb(188, 24, 221)";
        r1 = document.getElementById("span5");
        r1.style.color="rgb(24, 109, 221)";
        r1 = document.getElementById("span6");
        r1.style.color="rgb(24, 221, 139)";
        r1 = document.getElementById("span7");
        r1.style.color="rgb(129, 221, 24)";
        r1 = document.getElementById("span8");
        r1.style.color="rgb(221, 129, 24)";
    }
    count=1-count;
}