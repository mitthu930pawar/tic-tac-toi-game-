let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn= document.querySelector("#new-btn")
let msgcontainor= document.querySelector(".msg-containor")
let msg = document.querySelector("#msg")
let turn=0;
let count= 0;
const patterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGAME=()=>{
    turn=0;
   enableboxes(); 
   msgcontainor.classList.add("hide");
}
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    count=count+1;
    if(turn===0){
    box.innerHTML="x"
        turn=1
    box.style.color="red"    
    }
    else{
        box.innerHTML="0"
        box.style.color="brown"
        turn=0
    }
    box.disabled=true;
    winner();
    console.log (count);
});
});
const disableboxes= ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableboxes= ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showwinner=(winner) => {
    msg.innerText=`"congratulations" winner is ${winner}`; 
msgcontainor.classList.remove("hide");
disableboxes();
}
const winner =()=>{
for(let pattern of patterns){
       let pos1val= boxes[pattern[0]].innerText;
       let pos2val= boxes[pattern[1]].innerText;
       let pos3val= boxes [pattern[2]].innerText;

        if(pos1val!="" &&pos2val!=""&&pos3val!=""){
         if(pos1val===pos2val && pos2val===pos3val){
       showwinner(pos1val);
         }
        
        }
}
} 
newgamebtn.addEventListener("click", resetGAME()
)
resetbtn.addEventListener("click",()=>{
    resetGAME();
})



