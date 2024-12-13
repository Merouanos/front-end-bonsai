let ele =document.querySelectorAll(".questions main article");
console.log(ele);
ele.forEach(function(x){

x.onclick=function()
{

    if( getComputedStyle(x.querySelector("main")).opacity === "0")
    {
    ele.forEach(function(x){
        x.querySelector("main").style.height="0";
        x.querySelector("main").style.opacity="0";
            }
        )   ;
    x.querySelector("main").style.height="200px";
    x.querySelector("main").style.opacity="1";
}else
{
x.querySelector("main").style.height="0";
        x.querySelector("main").style.opacity="0";
}


}











});