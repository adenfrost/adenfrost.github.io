var count=1;
function coolbutton(){
    let c=document.getElementById("button1");
    if(count==0)
    {
        c.innerText="Dark Mode";
        c.style.backgroundColor="transparent";
        c.style.color="black";
        let r = c.parentElement.parentElement.parentElement.parentElement;
        r.style.color="black";
        console.log(r);
        r.style.backgroundImage="url(https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519_960_720.jpg)";
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
        r1=document.getElementById("submit1");
        r1.style.color="black";
    }
    else
    {
        c.innerText="Light Mode";
        c.style.backgroundColor="transparent";
        c.style.borderColor="whitesmoke";
        c.style.color="whitesmoke";
        let r = c.parentElement.parentElement.parentElement.parentElement;
        r.style.color="whitesmoke";
        r.style.backgroundImage="url(https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_960_720.jpg)";
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
        r1=document.getElementById("submit1");
        r1.style.color="white";
    }
    count=1-count;
}
