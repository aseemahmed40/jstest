let btn=document.getElementsByClassName("btn")
let screen=document.querySelector("#display")

str=''
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",function(e){
        if(e.target.innerText == "="){
            let result=eval(str)
            // console.log(result)
            str=result;
            screen.value=result;

        }
        else if(e.target.innerText == "c"){
            console.log("")
            str=""
            screen.value=str
        }
        else{
            str=str+e.target.innerText;
            screen.value=str
        }
    })
}
